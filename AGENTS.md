# AGENTS.md

Objetivo
--------
Fornecer instruções curtas e acionáveis para agentes de IA trabalharem com este repositório.

Como usar
---------
- Preferir referenciação a documentos existentes; não copie grandes trechos de docs.
- Antes de modificar arquivos, identificar o impacto e pedir confirmação para alterações amplas.
- Abra PRs pequenos e focados; inclua comando(s) para reproduzir alterações localmente.

Visão rápida do repositório
---------------------------
- Tipo: site estático com múltiplas páginas e subpastas.
- Arquivos/dirs úteis para inspecionar:
  - [README.md](README.md)
  - [MODERNIZATION.md](MODERNIZATION.md)
  - [src/](src/) — contém `assets/`, `css/`, `js/` centralizados
  - [src/assets/](src/assets/) — imagens e ícones do site
  - [src/js/](src/js/) — scripts reutilizáveis e de página
  - [src/css/](src/css/) — estilos globais e temas
  - [src/template.html](src/template.html) — scaffold de página Bootstrap
  - [jogos/](jogos/) e [login/](login/) — exemplos de páginas existentes
  - [LUIS_DAS_ARTIMANHAS/](LUIS_DAS_ARTIMANHAS/) — sub-site pessoal que deve ser preservado

Build / Preview
---------------
Não há pipeline de build identificado. Para pré-visualizar localmente, use um servidor HTTP simples:

```bash
python -m http.server 8000
# ou
npx http-server . -p 8080
```

Conveções observadas
---------------------
- CSS central em `src/css/` e estilos locais em pastas de componentes.
- JS principal em `src/js/`; há scripts isolados por funcionalidade em várias pastas.
- Arquivos HTML na raiz e em subpastas representam páginas estáticas; evite refatorações grandes sem testes.
- A modernização atual está guiada por `MODERNIZATION.md` e usa Bootstrap progressivamente.

Pontos de atenção
-----------------
- Não há testes automatizados nem CI óbvios — tome cuidado ao alterar infra-estrutura crítica.
- Muitos arquivos dependem de caminhos relativos; verifique caminhos ao mover arquivos.

Modernização planejada
----------------------
- Estado atual: site antigo (2019/2020) e parcialmente obsoleto.
- Objetivo: modernizar o site com Bootstrap, JS modularizado e CSS organizado, mantendo o conteúdo existente onde aplicável.
- Roteiro principal: audit, migrar estilos para Bootstrap, refatorar scripts em `src/js/`, tornar páginas responsivas, testar páginas chave manualmente, publicar versão inicial moderna.

Requisitos da empresa
---------------------
- Cores principais: azul e roxo — use variáveis CSS para facilitar o tema.
- **ANIMAÇÕES (OBRIGATÓRIO)**: implemente animações suaves em TODAS as páginas; prefira performance com CSS. Este requisito NÃO pode ser ignorado.
- Objetivo geral: apresentar a Pingobras S.A. e agregar todos os sistemas web em um único site.
- Segurança: priorizar sempre; validar entradas, usar HTTPS e rotas protegidas na API.
- API atual: `https://pingobras-sg.onrender.com/` com base `/api`.
- Estrutura de funcionários: páginas de colaboradores (ex.: `LUIS_DAS_ARTIMANHAS/`) devem permanecer integradas e visíveis como sub-sites ou blogs.
- **SEPARAÇÃO DE ARQUIVOS (OBRIGATÓRIO)**: cada página/componente em `.html`, `.css` e `.js` separados. Nunca misturar CSS ou JS dentro do HTML.

Arquitetura e restrições
-----------------------
- O projeto é um site estático renderizado no navegador; toda a dinâmica vem da API externa (`/api`).
- Não adicione código de backend neste repositório; mantenha o foco em HTML/CSS/JS que o navegador executa.
- Não inclua segredos (API keys) no front-end. Se for necessário um token, documente o fluxo de obtenção seguro e prefira tokens temporários.

Próximas customizações recomendadas
-----------------------------------
- Criar `.github/copilot-instructions.md` com atalhos e comandos de build/preview específicos (já presente; atualizar conforme necessidade).
- Criar skill/AGENT para tarefas comuns: abrir PRs, atualizar dependências front-end, formatar JS/CSS, rodar checklist de QA manual.

Contato
-------
Quando em dúvida sobre escopo de alteração, peça confirmação ao mantenedor antes de mudanças amplas.
