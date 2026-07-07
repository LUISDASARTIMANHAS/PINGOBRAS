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
   * Configuração global e imutável do site.
   * @type {Readonly<Object>}
   */
  const PB_CONFIG = Object.freeze({
    /** Nome oficial exibido na marca. */
    siteName: "PINGOBRAS",

    /** Razão social usada em textos institucionais e rodapé. */
    company: "Pingobras S.A",

    /** Caminho do logo usado pela navbar e Open Graph. */
    logo: "https://luisdasartimanhas.github.io/PINGOBRAS/src/assets/pingobras logo.png",

    /** Favicon usado pelo componente de head. */
    favicon: "./src/assets/favicon.png",

    /** Ano de fundação (não confundir com o ano do copyright, que é automático). */
    foundedYear: 2010,

    /** Versão atual do site/sistema, exibida no rodapé. */
    version: "1.0.28",

    /** Endpoint base do servidor geral que atende toda a plataforma. */
    apiBaseUrl: "https://pingobras-sg.onrender.com/api",

    /** Canais de contato e redes sociais. */
    contacts: Object.freeze({
      whatsapp: "https://wa.me/5527995744791",
      discord: "https://discord.gg/pingobras",
      github: "https://github.com/LUISDASARTIMANHAS",
      instagram: "https://instagram.com/pingobras",
      email: "pingobras.s.a@gmail.com",
    }),

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
  });

  // Expõe a configuração de forma somente-leitura no escopo global.
  global.PB_CONFIG = PB_CONFIG;
})(window);
