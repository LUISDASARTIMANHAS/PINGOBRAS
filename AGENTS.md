# AGENTS.md

## Objetivo

Orientar agentes de IA a fazer mudanças pequenas e verificáveis no site estático
da Pingobras. Consulte [README.md](README.md) e [MODERNIZATION.md](MODERNIZATION.md)
para contexto e roteiro; não duplique esses documentos.

## Visão rápida

- Site estático multipágina: HTML na raiz e em subpastas, sem backend neste repositório.
- Código compartilhado: [src/css/](src/css/), [src/js/](src/js/) e [src/assets/](src/assets/).
- Padrão novo: [src/template.html](src/template.html), `site-config.js`, `engine.js` e
  `loader-components.js` carregam componentes de [src/components/](src/components/).
- Páginas legadas ainda existem em `login/`, `jogos/`, `loja/`, `user/` e
  [LUIS_DAS_ARTIMANHAS/](LUIS_DAS_ARTIMANHAS/); preserve-as durante a migração.

## Arquitetura e convenções

- O site executa no navegador e chama a API central em
  `https://pingobras-sg.onrender.com/api`; não adicione servidor, chaves ou segredos.
- Informações institucionais, navegação e contatos devem vir de
  [src/js/site-config.js](src/js/site-config.js). Endpoints específicos de domínio
  ainda podem estar em scripts de página; não presuma que toda URL já foi centralizada.
- Para páginas novas, prefira o sistema de componentes e mantenha HTML, CSS e JS em
  arquivos separados. Componentes existentes podem conter scripts inline por legado;
  não reescreva todos eles em uma tarefa localizada.
- Ao mover ou adicionar arquivos, verifique dependências relativas. Evite URLs iniciadas
  por `/` quando a página precisar funcionar em deploy sob subcaminho, como GitHub Pages.
- Use `--brand-blue` e `--brand-purple` nos estilos novos, Bootstrap 5 conforme o padrão
  local e animações suaves com CSS, respeitando `prefers-reduced-motion` quando possível.
- Valide entradas no cliente, use HTTPS, não exponha tokens e trate operações autenticadas
  como responsabilidade da API. Insira texto dinâmico com `textContent` quando possível.

## Preview e validação

- Não há build, testes automatizados, lint ou CI detectados.
- Preview confiável: `python -m http.server 8000` na raiz do repositório.
- Valide manualmente as páginas alteradas em desktop e mobile, conferindo console,
  links relativos, componentes carregados, animações e chamadas de API.
- Páginas de referência existentes: `index.html`, `index-example.html`,
  `jogos/index.html`, `login/index.html`, `loja/index.html` e `user/index.html`.
- Não use `src/index.html` como página de teste: esse arquivo não existe.

## Regras de mudança

- Faça PRs pequenas e focadas; mantenha conteúdo e URLs existentes quando possível.
- Antes de alterar caminhos, procure os consumidores e teste pelo menos uma página na
  raiz e uma página em subpasta.
- Novas imagens devem ficar em `src/assets/` e usar caminhos relativos corretos.
- Não corrija arquivos ausentes ou refatore a arquitetura inteira incidentalmente;
  registre o problema e mantenha o escopo da tarefa.
- Ao preparar uma PR, descreva objetivo, arquivos afetados, páginas testadas e animações
  verificadas. Peça confirmação antes de mudanças amplas.
- O projeto é um site estático renderizado no navegador; toda a dinâmica vem da API externa (`/api`).
