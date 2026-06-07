# Integração rápida do Bootstrap

Opções rápidas
--------------
- CDN (rápido, recomendado para protótipo): adicione ao `<head>` das páginas:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

- Pacote npm (para workflow mais avançado): inicialize `package.json` e instale `bootstrap`.

Passos sugeridos para scaffold
-----------------------------
1. Criar um arquivo base de template (ex.: `src/template.html`) contendo o head com Bootstrap CDN e um footer comum.
2. Atualizar `index.html` para estender o template base (ou manualmente colar head/footer durante a migração).
3. Migrar classes CSS: substitua grids e utilitários por classes Bootstrap (`container`, `row`, `col-*`, `d-flex`, etc.).
4. Extrair estilos customizados para `src/css/custom.css` e carregá-lo após o CSS do Bootstrap para sobrescrever quando necessário.
5. Testar responsividade em diferentes larguras e ajustar componentes.

Temas e animações
-----------------
- Defina variáveis CSS em `src/css/variables.css` para as cores principais `--brand-blue` e `--brand-purple`.
- Para animações, prefira animações CSS leves; recomenda-se usar AOS (Animate On Scroll) ou `animate.css` para efeitos pré-definidos, mas evite bibliotecas pesadas.
- Carregue o CSS customizado após o Bootstrap para sobrescrever estilos e aplicar o tema da empresa.

API e segurança
----------------
- Lembre de apontar chamadas de API para `https://pingobras-sg.onrender.com/api` durante a migração.
- Garanta que chamadas que alteram dados sejam autenticadas e que o front-end não exponha segredos.

CORS e fetch
------------
- Como a aplicação é estática e roda no navegador, verifique com o time da API os cabeçalhos CORS (`Access-Control-Allow-Origin`) para permitir nossos domínios de preview e produção.
- Use `fetch()` para todas as chamadas à API. Exemplo básico:

```js
fetch('https://pingobras-sg.onrender.com/api/some-endpoint')
	.then(r => r.json())
	.then(data => { /* renderizar no DOM */ })
	.catch(err => console.error(err));
```

Armazenamento e tokens
----------------------
- Não armazene segredos no `localStorage` ou em arquivos públicos. Para tokens curtos, prefira mantê-los em memória ou usar cookies seguros quando possível.
- Dados não-sensíveis podem ser cacheados em `localStorage` ou `IndexedDB` para melhorar o desempenho.

Notas
-----
- Ao usar CDN, esteja atento a políticas de CSP se aplicável.
- Para produção, considere empacotar assets e minimizar arquivos.
