/**
 * @file loader-components.js
 * @description Ponto único de entrada do sistema de componentes da Pingobras.
 * Toda página só precisa incluir este script para receber automaticamente
 * navbar, footer, scripts globais, head, cookies, avisos de privacidade e
 * utilitários (toast, modal, busca), sem duplicar HTML.
 *
 * Suporta duas formas de placeholder, que têm prioridade sobre a posição padrão:
 *   <div data-component="navbar"></div>
 *   <pb-navbar></pb-navbar>
 *
 * Se nenhum placeholder existir para um componente global, ele é criado e
 * inserido automaticamente na posição padrão (compatibilidade com páginas
 * antigas que não foram migradas).
 *
 * Ao final, dispara: document.dispatchEvent(new Event("componentsLoaded"))
 */

function bootstrapComponents(global, document) {
  "use strict";

  /**
   * @typedef {"prepend-body"|"append-body-before-main"|"append-body-end"} PBInsertMode
   */

  /**
   * Componentes globais carregados automaticamente em toda página, com sua
   * posição padrão caso a página não tenha um placeholder explícito.
   * @type {Array<{name: string, insert: PBInsertMode}>}
   */
  const AUTO_COMPONENTS = [
    { name: "loading", insert: "prepend-body" },
    { name: "navbar", insert: "prepend-body" },
    { name: "footer", insert: "append-body-end" },
    { name: "cookies", insert: "append-body-end" },
    { name: "privacy-banner", insert: "append-body-end" },
    { name: "toast", insert: "append-body-end" },
    { name: "modal", insert: "append-body-end" },
    { name: "search-modal", insert: "append-body-end" },
    { name: "scripts", insert: "append-body-end" },
  ];

  /**
   * Procura um placeholder já existente no DOM para um componente, seja no
   * formato data-component="nome" ou na forma de tag customizada <pb-nome>.
   *
   * @param {string} name - Nome do componente.
   * @return {Element|null} O placeholder encontrado, ou null.
   */
  function findExistingPlaceholder(name) {
    const byData = document.querySelector(`[data-component="${name}"]`);
    if (byData) return byData;

    const tagName = `pb-${name}`;
    return document.querySelector(tagName) || null;
  }

  /**
   * Cria um placeholder na posição padrão configurada para um componente
   * global quando a página não define um explicitamente.
   *
   * @param {PBInsertMode} insertMode - Onde inserir o placeholder criado.
   * @param {string} name - Nome do componente (usado para depuração via atributo).
   * @return {Element} O placeholder recém-criado e já inserido no DOM.
   */
  function createDefaultPlaceholder(insertMode, name) {
    const placeholder = document.createElement("div");
    placeholder.setAttribute("data-component", name);
    placeholder.setAttribute("data-pb-auto", "true");

    const body = document.body;
    const main = body.querySelector("main");

    switch (insertMode) {
      case "prepend-body":
        body.insertBefore(placeholder, body.firstChild);
        break;
      case "append-body-before-main":
        if (main) {
          body.insertBefore(placeholder, main);
        } else {
          body.appendChild(placeholder);
        }
        break;
      case "append-body-end":
      default:
        body.appendChild(placeholder);
        break;
    }

    return placeholder;
  }

  /**
   * Resolve todos os componentes globais (encontrando ou criando seus
   * placeholders) e dispara o carregamento de cada um em paralelo.
   *
   * @return {Promise<void>} Resolve quando todos os componentes terminarem
   *   (com sucesso ou falha individual — nenhum bloqueia os demais).
   */
  async function loadAllGlobalComponents() {
    const tasks = AUTO_COMPONENTS.map((component) => {
      const placeholder =
        findExistingPlaceholder(component.name) ||
        createDefaultPlaceholder(component.insert, component.name);

      return global.PBComponentLoader.loadComponentInto(placeholder, component.name);
    });

    await Promise.allSettled(tasks);
  }

  /**
   * Monta os tokens de página para o componente de <head>, combinando os
   * valores definidos pela página (window.PB_PAGE) com defaults globais
   * vindos de site-config.js (window.PB_CONFIG).
   *
   * @return {Object<string, string>} Tokens prontos para o template de head.
   */
  function buildHeadTokens() {
    const page = global.PB_PAGE || {};
    const config = global.PB_CONFIG || {};
    const canonical = page.canonical || global.location.href.split(/[?#]/)[0];

    return {
      TITLE: page.title ? `${page.title} | ${config.siteName || ""}` : config.siteName || "",
      DESCRIPTION: page.description || "",
      KEYWORDS: page.keywords || "",
      AUTHOR: config.company || "",
      CANONICAL: canonical,
      FAVICON: config.favicon || "/favicon.ico",
      OG_IMAGE: page.ogImage || config.logo || "",
    };
  }

  /** Guarda de execução única — evita duplicar todo o processo caso o script rode duas vezes. */
  let hasBootstrapped = false;

  /**
   * Orquestra todo o processo: carrega o head, carrega os componentes globais
   * em paralelo, remove o overlay de carregamento e sinaliza a conclusão.
   *
   * @return {Promise<void>}
   */
  async function bootstrap() {
    if (hasBootstrapped) return;
    hasBootstrapped = true;

    if (!global.PBComponentLoader) {
      console.error(
        "[Pingobras] engine.js não foi carregado antes de loader-components.js."
      );
      return;
    }

    await Promise.allSettled([
      global.PBComponentLoader.loadHeadComponent(buildHeadTokens()),
      loadAllGlobalComponents(),
    ]);

    document.body.classList.add("pb-components-ready");
    document.dispatchEvent(new Event("componentsLoaded"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
}
bootstrapComponents(window, document);
