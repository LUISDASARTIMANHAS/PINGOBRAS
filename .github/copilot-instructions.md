# copilot-instructions.md

As regras gerais estão em [AGENTS.md](../AGENTS.md). Antes de editar, consulte
[README.md](../README.md) e [MODERNIZATION.md](../MODERNIZATION.md).

Preview local
-------------
Na raiz do repositório, execute:

```bash
python -m http.server 8000
```

Não há pipeline de build ou testes automatizados. Valide manualmente as páginas
alteradas, incluindo uma página na raiz e outra em subpasta; confira links,
console, componentes carregados e animações.

Checklist curto
---------------
- Preserve conteúdo e URLs e faça alterações pequenas.
- Procure consumidores antes de mover arquivos ou corrigir caminhos relativos.
- Para páginas novas, use Bootstrap 5, componentes compartilhados quando aplicável,
  e HTML/CSS/JS separados. Páginas legadas podem conter inline e devem ser migradas
  gradualmente, não em uma refatoração incidental.
- Não use `src/index.html` como referência: ele não existe. Use `index.html`,
  `index-example.html`, `jogos/index.html`, `login/index.html` ou `user/index.html`.
- Documente as páginas testadas e as animações verificadas na PR.
