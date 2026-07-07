# Sistema de Componentes Reutilizáveis — Pingobras

Este pacote transforma o site da Pingobras em um sistema modular sem
frameworks: apenas **HTML + CSS + JavaScript ES6 + Bootstrap 5**.

## Estrutura de arquivos

```
src/
  components/
    head.html            -> template do <head> (tokens {{TITLE}}, {{DESCRIPTION}}...)
    navbar.html           -> navbar com destaque automático da página atual
    footer.html           -> rodapé institucional (ano automático)
    scripts.html          -> Bootstrap JS + functions.js + scroll suave
    cookies.html          -> banner de consentimento de cookies (LGPD)
    privacy-banner.html   -> aviso de atualização de Privacidade/Termos
    loading.html          -> overlay de carregamento inicial
    toast.html            -> notificações (window.PBToast.show)
    modal.html            -> modal genérico (window.PBModal.open)
    search-modal.html     -> modal de busca (consome o servidor geral)
  css/
    component-loader.css  -> estilos exclusivos da infraestrutura de componentes
  js/
    site-config.js        -> ÚNICA fonte de URLs, redes sociais e navegação
    engine.js   -> motor genérico de fetch/injeção/execução
    loader-components.js  -> orquestrador: descobre placeholders e inicializa tudo

legal/
  cookies.html
  privacidade.html
  termos.html

index-example.html        -> exemplo de página no novo padrão mínimo
```

## Como criar uma página nova

Toda página nova só precisa disto:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <script>
    window.PB_PAGE = {
      title: "Título da Página",
      description: "Descrição para SEO e redes sociais.",
      keywords: "palavra1, palavra2",
    };
  </script>
  <script src="/src/js/site-config.js"></script>
  <script src="/src/js/engine.js"></script>
  <script src="/src/js/loader-components.js" defer></script>
</head>
<body>
  <main>
    <!-- Conteúdo específico da página -->
  </main>
</body>
</html>
```

Navbar, footer, scripts, cookies, avisos de privacidade, overlay de
carregamento, toasts, modal e busca são injetados automaticamente — não é
necessário adicionar nenhum placeholder.

## Sobrescrevendo a posição de um componente (opcional)

Se uma página precisar posicionar um componente manualmente, basta declarar
o placeholder no local desejado — o loader usa esse local em vez da posição
padrão:

```html
<div data-component="navbar"></div>
<!-- ou -->
<pb-navbar></pb-navbar>
```

## Alterando dados institucionais

Nunca edite links, telefones ou redes sociais dentro dos componentes.
Edite apenas `src/js/site-config.js` — todos os componentes leem daquele
arquivo automaticamente.

## Compatibilidade com páginas antigas

Páginas que ainda copiam o `template.html` continuam funcionando normalmente
e não precisam ser alteradas. A migração para o novo padrão é gradual:
basta trocar o conteúdo de uma página pelo modelo mínimo acima quando
conveniente.

## Segurança

- Nomes de componente são validados por uma allowlist antes do fetch,
  prevenindo path traversal.
- Todo texto dinâmico (toasts, resultados de busca, mensagens de erro) é
  inserido via `textContent`, nunca `innerHTML`, exceto o próprio HTML
  confiável dos componentes internos.
- Fetch de componentes é sempre `same-origin`.
- CDNs do Bootstrap e Animate.css usam atributos `integrity` +
  `crossorigin` (Subresource Integrity).

## Eventos disponíveis

```js
document.addEventListener("componentsLoaded", () => {
  // Todos os componentes globais já foram injetados e executados.
});
```

## APIs globais expostas

| API | Uso |
|---|---|
| `PB_CONFIG` | Configuração institucional (somente leitura) |
| `PBComponentLoader` | Motor de baixo nível (uso interno) |
| `PBToast.show(msg, tipo)` | Exibe uma notificação toast |
| `PBModal.open(titulo, conteudo, opções)` | Abre o modal genérico |
