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
  - [src/](src/)
  - [src/js/](src/js/)
  - [src/css/](src/css/)
  - [jogos/](jogos/)
  - [login/](login/)

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

Pontos de atenção
-----------------
- Não há testes automatizados nem CI óbvios — tome cuidado ao alterar infra-estrutura crítica.
- Muitos arquivos dependem de caminhos relativos; verifique caminhos ao mover arquivos.

Próximas customizações recomendadas
-----------------------------------
- Criar `.github/copilot-instructions.md` com atalhos e comandos de build/preview específicos.
- Criar skill/AGENT para tarefas comuns: abrir PRs, atualizar dependências front-end, formatar JS/CSS.

Contato
-------
Quando em dúvida sobre escopo de alteração, peça confirmação ao mantenedor antes de mudanças amplas.
