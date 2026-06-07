# Modernização do site PINGOBRAS

Visão geral
-----------
Este repositório contém a versão antiga do site da empresa (2019/2020). O objetivo é modernizar o site para uma versão responsiva e mais fácil de manter, usando Bootstrap, organização de `src/js/` e `src/css/`, e práticas simples de deploy.

Metas principais
----------------
- Publicar uma versão moderna e responsiva do site.
- Organizar CSS e JS em `src/` reutilizáveis, separados em arquivos individuais.
- Manter URLs e conteúdo existente quando possível.
- Fornecer instruções claras para agentes/colaboradores no repositório.
- **OBRIGATÓRIO**: Implementar animações suaves em TODAS as páginas.

Roteiro (linha do tempo sugerida)
---------------------------------
1. Auditoria (esta fase): identificar páginas chave, dependências e pontos críticos.
2. Scaffold Bootstrap: incluir Bootstrap via CDN ou gerenciador de pacotes; criar template base `src/template.html`.
3. Migrar estilos: substituir estilos antigos por classes Bootstrap progressivamente; extrair estilos customizados para `src/css/`.
4. Refatorar JS: consolidar scripts em `src/js/`, modularizar e remover código obsoleto.
5. Ajustes de conteúdo: corrigir links relativos e garantir assets corretos.
6. Testes manuais: validar páginas principais em dispositivos móveis e desktop.
7. Deploy: publicar em host escolhido (FTP, Netlify, GitHub Pages, etc.).

Checklist mínimo de auditoria
----------------------------
- Listar páginas críticas: `index.html`, `jogos/index.html`, `login/index.html`, páginas em `src/`.
- Verificar referências a scripts externos e assets em caminhos relativos.
- Identificar arquivos JavaScript com lógica de dependência (ex.: `src/js/load-scripts.js`).
- **CRÍTICO**: Auditar TODAS as páginas quanto a animações — se não houver, adicionar. Sem exceções.
- **CRÍTICO**: Verificar se CSS e JS estão misturados dentro dos arquivos HTML. Se sim, separar em arquivos `.css` e `.js` individuais.

Como contribuir
---------------
- Crie pequenas PRs focadas (uma tarefa por PR).
- Teste localmente com `python -m http.server 8000` e documente quais páginas foram validadas.
- Marque PRs com "modernização" no título para facilitar triagem.
- **OBRIGATÓRIO em todas as PRs**: 
  - Confirmar que TODAS as páginas afetadas têm animações suaves (CSS transitions/animations).
  - Confirmar que CSS e JS estão em arquivos separados (`.css` e `.js`), não misturados no HTML.
  - Documentar quais animações foram adicionadas no corpo da PR.

Recomendações de tecnologia
--------------------------
- Bootstrap 5 (CDN ou pacote npm) para layout responsivo rápido.
- Organizar CSS em `src/css/` com um arquivo principal `main.css` e arquivos de tema.
- Consolidar JS em `src/js/` e usar módulos ES6 simples se o target do navegador permitir.

Requisitos da empresa
---------------------
- Cores principais: azul e roxo — defina variáveis CSS para `--brand-blue` e `--brand-purple` em `src/css/variables.css`.
- Animações: todas as páginas devem ter animações suaves; prefira CSS transitions/animations e bibliotecas leves (ex.: AOS ou animate.css) quando necessário.
+ **ANIMAÇÕES (OBRIGATÓRIO)**: TODAS as páginas devem ter animações suaves. Prefira CSS transitions/animations. Use bibliotecas leves quando necessário. Este é um requisito que NÃO pode ser ignorado.
+ **ESTRUTURA DE ARQUIVOS (OBRIGATÓRIO)**: Separar cada página em: `.html` (estrutura), `.css` (estilos), `.js` (comportamento). Nunca incluir CSS/JS em tags inline dentro do HTML.
- Objetivo do site: apresentar a empresa Pingobras S.A. e centralizar todos os sistemas web (jogos, admin, login, etc.).
- Segurança: priorizar sempre, validar entradas, usar HTTPS e proteger rotas de API.
- API atual: servidor central `https://pingobras-sg.onrender.com/` com rota base `/api` para todas as chamadas.
- Páginas de funcionários: mantenha sub-sites/entradas de funcionários (ex.: `LUIS_DAS_ARTIMANHAS/`) integradas ao site principal como blogs/páginas pessoais.

Arquitetura proposta
--------------------
- Modelo: site estático renderizado no navegador (HTML/CSS/JS). Toda dinâmica será feita via chamadas AJAX/fetch para a API externa (`https://pingobras-sg.onrender.com/api`).
- Restrições: não incluir código de servidor neste repositório; nenhuma secret-chave sensível deve ser armazenada no front-end.
- CORS: garantir que a API permita CORS para os domínios de preview/produção usados; documente hosts permitidos na API.
- Autenticação: para operações autenticadas, prefira tokens curtos emitidos pelo servidor; no front-end armazene apenas tokens não sensíveis com cuidado (por ex., em memória) e nunca exponha segredos no código-fonte.
- Cache e offline: considere cache via `localStorage` ou `IndexedDB` para dados não sensíveis e melhorar UX offline.
- Assets: todas as imagens estão em `src/assets/`; referencie-as com caminhos relativos corretos (ex.: `<img src="src/assets/logo.png" alt="Logo">` ou `../src/assets/` quando em subpastas).

Links úteis
----------
- Roteiro do repositório: [AGENTS.md](AGENTS.md)
- Instruções de pré-visualização: [.github/copilot-instructions.md](.github/copilot-instructions.md)
