# copilot-instructions.md

Objetivo
--------
Instruções curtas e acionáveis para agentes/assistentes de IA que editam este repositório.

Antes de alterar
---------------
- Consulte [AGENTS.md](../AGENTS.md) e [README.md](../README.md) para contexto.
- Procure por dependências de caminho relativo antes de mover arquivos.

Preview local
-------------
Use um servidor HTTP simples para pré-visualizar o site estático:

```bash
cd "d:/Projetos Temporarios/PINGOBRAS"
python -m http.server 8000
# ou (quando disponível)
npx http-server . -p 8080
```

Checks rápidos antes de PR
-------------------------
- Verifique links relativos em HTML/JS/CSS.
- Teste páginas principais: `index.html`, `src/index.html`, `jogos/index.html`, `login/index.html`.
- Evite grandes refatorações de caminhos sem testes manuais locais.
- **OBRIGATÓRIO**: Toda página deve ter animações suaves — valide que existem.
- **OBRIGATÓRIO**: Confirme que CSS e JS estão em arquivos separados, não inline no HTML.

Notas de modernização
---------------------
- O projeto agora tem um plano de modernização; consulte [MODERNIZATION.md](../MODERNIZATION.md) para o roteiro.
- Priorize pequenas PRs que implementem o scaffold do Bootstrap, migração de estilos e reorganização de `src/js/`.
- Ao testar, documente quais páginas foram validadas no corpo do PR.

Requisitos e contexto rápido
---------------------------
- Cores da empresa: azul e roxo — prefira variáveis CSS `--brand-blue` e `--brand-purple`.
- **ANIMAÇÕES (OBRIGATÓRIO)**: todas as páginas devem ter animações suaves; priorize performance usando CSS transitions/animations. Este requisito NÃO pode ser ignorado.
- **SEPARAÇÃO DE ARQUIVOS (OBRIGATÓRIO)**: arquivo `.html`, `.css` e `.js` separados. Nunca incluir CSS/JS inline ou em tags dentro do HTML.
- API central: `https://pingobras-sg.onrender.com/` com base `/api` para todas as chamadas.
- Segurança: valide entradas, use HTTPS e assegure que rotas sensíveis da API exigem autenticação.
- Páginas importantes: verifique páginas em `LUIS_DAS_ARTIMANHAS/` (site do dono) e outras subpastas de funcionários.

Arquitetura (importante)
------------------------
- Este repositório deve permanecer como um site estático; todo o comportamento dinâmico é feito no navegador via `fetch` para `https://pingobras-sg.onrender.com/api`.
- Garanta que a API suporte CORS para os hosts de preview/produção que usaremos.
- Nunca inclua chaves ou segredos no código cliente. Para autenticação, siga um fluxo seguro documentado em PRs.

Conveções e expectativas
------------------------
- Projeto: site estático com JS/CSS em `src/`, assets em `src/assets/` e páginas em várias pastas.
- Prefira PRs pequenos e reversíveis; documente mudanças de caminhos.
- Não há CI ou testes automatizados detectados — alterações precisam de validação manual.
- Ao adicionar imagens, coloque em `src/assets/` e use caminhos relativos corretos.

Quando criar uma PR
-------------------
- Descreva o objetivo, passos para testar localmente e arquivos afetados.
- Se mudar caminhos, inclua exemplos de páginas testadas e screenshots se possível.

Links úteis
----------
- [AGENTS.md](../AGENTS.md)
- [README.md](../README.md)
