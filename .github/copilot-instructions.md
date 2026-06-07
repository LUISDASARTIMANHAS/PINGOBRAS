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

Conveções e expectativas
------------------------
- Projeto: site estático com JS/CSS em `src/` e páginas em várias pastas.
- Prefira PRs pequenos e reversíveis; documente mudanças de caminhos.
- Não há CI ou testes automatizados detectados — alterações precisam de validação manual.

Quando criar uma PR
-------------------
- Descreva o objetivo, passos para testar localmente e arquivos afetados.
- Se mudar caminhos, inclua exemplos de páginas testadas e screenshots se possível.

Links úteis
----------
- [AGENTS.md](../AGENTS.md)
- [README.md](../README.md)
