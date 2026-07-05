/**
 * @file component-loader.js
 * @description Motor de baixo nível responsável por buscar, injetar e executar
 * os componentes HTML da Pingobras (navbar, footer, cookies, etc). Não conhece
 * regras de negócio — apenas "como" carregar um componente com segurança,
 * cache e tolerância a falhas. A orquestração de "quais" componentes carregar
 * fica em loader-components.js.
 *
 * Segurança:
 *  - Nomes de componente são validados contra uma allowlist (regex) antes de
 *    compor a URL de fetch, prevenindo path traversal (ex: "../../etc/passwd").
 *  - Fetch é sempre same-origin, sem credenciais expostas a terceiros.
 *  - Nenhum conteúdo vindo de fora do próprio domínio é injetado via innerHTML.
 */

(function initComponentLoader(global) {
  "use strict";

  /** Caminho base (mesmo domínio) onde vivem os fragmentos HTML dos componentes. */
  const COMPONENTS_BASE_PATH = "/src/components/";

  /** Nomes de componente só podem conter minúsculas, números e hífen. */
  const VALID_COMPONENT_NAME = /^[a-z][a-z0-9-]{1,40}$/;

  /** Cache em memória: evita novo fetch se o componente já foi baixado. */
  const componentCache = new Map();

  /**
   * Escapa texto para uso seguro dentro de HTML (evita XSS ao interpolar
   * valores de configuração dentro de templates).
   *
   * @param {unknown} value - Valor a ser escapado.
   * @return {string} Texto seguro para inserção em innerHTML.
   */
  function escapeHtml(value) {
    const text = value === null || value === undefined ? "" : String(value);
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /**
   * Valida se um nome de componente é seguro para compor uma URL de fetch.
   *
   * @param {string} name - Nome do componente (ex: "navbar").
   * @return {boolean} true se o nome é seguro.
   */
  function isValidComponentName(name) {
    return typeof name === "string" && VALID_COMPONENT_NAME.test(name);
  }

  /**
   * Busca o HTML bruto de um componente, usando cache em memória.
   *
   * @param {string} name - Nome do componente (sem extensão), ex: "footer".
   * @return {Promise<string>} HTML do componente.
   * @throws {Error} Se o nome for inválido ou o fetch falhar.
   */
  async function fetchComponentHTML(name) {
    if (!isValidComponentName(name)) {
      throw new Error(`Nome de componente inválido: "${name}"`);
    }

    if (componentCache.has(name)) {
      return componentCache.get(name);
    }

    const response = await fetch(`${COMPONENTS_BASE_PATH}${name}.html`, {
      method: "GET",
      credentials: "same-origin",
      cache: "default",
    });

    if (!response.ok) {
      throw new Error(
        `Falha ao buscar componente "${name}" (HTTP ${response.status})`
      );
    }

    const html = await response.text();
    componentCache.set(name, html);
    return html;
  }

  /**
   * Extrai os elementos <script> de um fragmento e os remove do DOM original,
   * já que scripts inseridos via innerHTML não são executados pelo navegador.
   *
   * @param {DocumentFragment} fragment - Fragmento contendo o componente já parseado.
   * @return {HTMLScriptElement[]} Lista de scripts extraídos (ainda não executados).
   */
  function extractScripts(fragment) {
    const scripts = Array.from(fragment.querySelectorAll("script"));
    scripts.forEach((script) => script.remove());
    return scripts;
  }

  /**
   * Recria e executa scripts extraídos de um componente, preservando atributos
   * (como type="module" ou src) e a ordem de execução.
   *
   * @param {HTMLScriptElement[]} scripts - Scripts originais (fora do documento).
   * @return {void}
   */
  function executeScripts(scripts) {
    scripts.forEach((originalScript) => {
      const runnable = document.createElement("script");

      Array.from(originalScript.attributes).forEach((attr) => {
        runnable.setAttribute(attr.name, attr.value);
      });

      if (originalScript.textContent) {
        runnable.textContent = originalScript.textContent;
      }

      // Anexar ao body e remover em seguida: o navegador executa o script
      // no momento em que ele entra no DOM, mesmo sem permanecer nele.
      document.body.appendChild(runnable);
      runnable.remove();
    });
  }

  /**
   * Renderiza uma mensagem de erro amigável no lugar de um componente que
   * falhou ao carregar, sem nunca quebrar o restante da página.
   *
   * @param {Element} target - Elemento onde o componente seria inserido.
   * @param {string} name - Nome do componente que falhou.
   * @param {Error} error - Erro original (logado no console para depuração).
   * @return {void}
   */
  function renderComponentError(target, name, error) {
    console.error(`[Pingobras] Componente "${name}" não pôde ser carregado.`, error);
    target.innerHTML =
      '<div class="pb-component-error" role="alert">' +
      `⚠️ Não foi possível carregar o componente "${escapeHtml(name)}".` +
      "</div>";
  }

  /**
   * Busca, injeta e executa um componente dentro de um elemento alvo.
   * Nunca rejeita: falhas são tratadas internamente com uma UI de erro.
   *
   * @param {Element} target - Elemento (placeholder) onde o componente será inserido.
   * @param {string} name - Nome do componente a carregar.
   * @return {Promise<boolean>} true se carregado com sucesso, false caso contrário.
   */
  async function loadComponentInto(target, name) {
    try {
      const html = await fetchComponentHTML(name);
      const template = document.createElement("template");
      template.innerHTML = html.trim();

      const scripts = extractScripts(template.content);

      target.innerHTML = "";
      target.appendChild(template.content);
      target.dataset.pbLoaded = "true";
      target.dataset.pbComponent = name;

      executeScripts(scripts);
      return true;
    } catch (error) {
      renderComponentError(target, name, error);
      return false;
    }
  }

  /**
   * Carrega o componente especial de <head>, que difere dos demais por:
   *  - não possuir um elemento alvo visível (o próprio document.head é o alvo);
   *  - usar um template com tokens {{CHAVE}} substituídos por valores de página;
   *  - evitar duplicar tags já existentes no head (ex: bootstrap já presente).
   *
   * @param {Object<string, string>} tokens - Pares chave/valor para substituição no template.
   * @return {Promise<boolean>} true se carregado com sucesso.
   */
  async function loadHeadComponent(tokens) {
    try {
      const rawHtml = await fetchComponentHTML("head");
      const filledHtml = rawHtml.replace(/{{\s*([A-Z_]+)\s*}}/g, (match, key) => {
        const value = tokens[key];
        return value !== undefined ? escapeHtml(value) : "";
      });

      const parsed = new DOMParser().parseFromString(
        `<head>${filledHtml}</head>`,
        "text/html"
      );

      Array.from(parsed.head.childNodes).forEach((node) => {
        if (!isDuplicateHeadNode(node)) {
          document.head.appendChild(document.importNode(node, true));
        }
      });

      return true;
    } catch (error) {
      console.error("[Pingobras] Falha ao carregar o componente de head.", error);
      return false;
    }
  }

  /**
   * Verifica se um nó já existe no <head> atual, evitando tags duplicadas
   * (ex: dois <link rel="stylesheet"> para o Bootstrap).
   *
   * @param {Node} node - Nó candidato a ser inserido no head.
   * @return {boolean} true se um nó equivalente já existir.
   */
  function isDuplicateHeadNode(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) return false;

    const el = /** @type {Element} */ (node);
    const identityAttr =
      el.getAttribute("href") || el.getAttribute("name") || el.getAttribute("property");

    if (!identityAttr) return false;

    return Array.from(document.head.children).some(
      (existing) =>
        existing.tagName === el.tagName &&
        (existing.getAttribute("href") === identityAttr ||
          existing.getAttribute("name") === identityAttr ||
          existing.getAttribute("property") === identityAttr)
    );
  }

  /** API pública do motor de componentes, usada por loader-components.js. */
  global.PBComponentLoader = Object.freeze({
    loadComponentInto,
    loadHeadComponent,
    escapeHtml,
    isValidComponentName,
  });
})(window);
