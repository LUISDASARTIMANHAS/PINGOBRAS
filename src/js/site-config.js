/**
 * @file site-config.js
 * @description Fonte única de verdade para todas as informações institucionais,
 * links, redes sociais e endpoints usados pelos componentes globais da Pingobras
 * (navbar, footer, cookies, head, etc). Nenhum componente deve conter URLs
 * ou textos institucionais fixos no HTML — tudo deve vir daqui.
 *
 * Qualquer alteração de marca, links ou endpoints deve ser feita APENAS neste
 * arquivo. Isso garante consistência em todo o site e migração sem retrabalho.
 */

(function initSiteConfig(global) {
  "use strict";

  /**
   * Localiza o JSON relativo ao próprio script, funcionando na raiz e em
   * páginas servidas por subdiretórios.
   *
   * @return {string} URL absoluta do arquivo de informações do site.
   */
  function getInfoUrl() {
    const scriptUrl = document.currentScript && document.currentScript.src;
    return new URL("../data/info.json", scriptUrl || global.location.href).href;
  }

  /**
   * @typedef {Object} PBNavLink
   * @property {string} label - Texto exibido no link.
   * @property {string} href  - Caminho absoluto (ex: "/jogos").
   */

  /**
   * @typedef {Object} PBFooterColumn
   * @property {string} title
   * @property {PBNavLink[]} links
   */

  /**
   * Configuração estrutural que não faz parte dos dados institucionais.
   *
   * @type {Readonly<Object>}
   */
  const STRUCTURAL_CONFIG = {
    /** Itens principais de navegação (usados pela navbar). */
    nav: Object.freeze(
      /** @type {PBNavLink[]} */ ([
        { label: "Home", href: "./" },
        { label: "loja", href: "./loja" },
        { label: "Editais", href: "./edital" },
        { label: "Conta", href: "./user" },
        { label: "Sobre", href: "./#sobre" },
      ])
    ),

    /** Link de destaque (botão) da navbar. */
    authLink: Object.freeze({ label: "Entrar", href: "/login" }),

    /** Conteúdo institucional do rodapé. */
    footer: Object.freeze({
      description:
        "Empréstimos pessoais, pesquisa e soluções digitais confiáveis.",
      columns: Object.freeze(
        /** @type {PBFooterColumn[]} */ ([
          {
            title: "Serviços",
            links: [
              { label: "Empréstimos", href: "/" },
              { label: "Pesquisa e IA", href: "/" },
              { label: "Consultoria", href: "/" },
              { label: "Plataformas", href: "/" },
            ],
          },
          {
            title: "Plataformas",
            links: [
              { label: "Loja", href: "./loja" },
              { label: "Jogos", href: "/jogos" },
              { label: "Blog", href: "/user/blog" },
              { label: "Chat", href: "/user/chat" },
              { label: "Editais", href: "/edital" },
            ],
          },
          {
            title: "Conta",
            links: [
              { label: "Entrar", href: "/login" },
              { label: "Recuperar Senha", href: "/login/recuperar-senha.html" },
              { label: "Minha Conta", href: "/user" },
              { label: "Admin", href: "/user/admin" },
            ],
          },
        ])
      ),
      /** Links legais obrigatórios (LGPD/consumo), exibidos no rodapé e no banner de cookies. */
      legalLinks: Object.freeze([
        { label: "Política de Cookies", href: "./legal/cookies.html" },
        { label: "Privacidade", href: "./legal/privacidade.html" },
        { label: "Termos de Serviço", href: "./legal/termos.html" },
      ]),
    }),
  };

  /**
   * Busca o arquivo de dados e combina seus valores com a configuração
   * estrutural usada pelos componentes globais.
   *
   * @return {Promise<Readonly<Object>>} Configuração pronta e imutável.
   */
  async function loadSiteConfig() {
    const response = await fetch(getInfoUrl(), {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error(`Falha ao carregar info.json: HTTP ${response.status}`);
    }

    const info = await response.json();
    if (!info || typeof info !== "object") {
      throw new Error("info.json não contém um objeto de configuração válido.");
    }

    const config = {
      ...info,
      favicon: info.icon || "./src/assets/favicon.png",
      contacts: Object.freeze({ ...(info.contacts || {}) }),
      ...STRUCTURAL_CONFIG,
    };

    return Object.freeze(config);
  }

  /** Inicialização compartilhada para que os componentes aguardem o JSON. */
  global.PB_CONFIG = null;
  global.PB_CONFIG_READY = loadSiteConfig()
    .then((config) => {
      global.PB_CONFIG = config;
      return config;
    })
    .catch((error) => {
      console.error("[Pingobras] Não foi possível carregar a configuração do site.", error);
      throw error;
    });
})(window);
