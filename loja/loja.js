/**
 * ============================================================================
 * PINGOBRAS - Loja (Catálogo de Produtos)
 * ----------------------------------------------------------------------------
 * Módulo responsável por carregar, filtrar, ordenar, paginar e renderizar o
 * catálogo de produtos. Todas as funções que hoje leem de PRODUCTS/CATEGORIES
 * (definidos em loja-data.js) foram escritas para serem substituídas por
 * chamadas assíncronas ao servidor central da Pingobras
 * (https://pingobras-sg.onrender.com/) sem exigir mudanças na camada de
 * renderização.
 *
 * Segurança: nenhum dado de produto é inserido via innerHTML sem passar por
 * escapeHtml(). Números são sempre validados com Number.isFinite antes de
 * formatação, e o link do WhatsApp é sempre construído com encodeURIComponent.
 * ============================================================================
 */

("use strict");

/** Número de produtos exibidos por página. */
const PAGE_SIZE = 8;

/** @type {{search: string, category: string, brand: string, condition: string, sort: string, page: number}} */
const state = {
  search: "",
  category: "todas",
  brand: "todas",
  condition: "todas",
  sort: "relevancia",
  page: 1,
};
const PRODUCT_IMAGE_PATH = "../src/assets/products/";
const PRODUCT_FALLBACK_IMAGE = "../src/assets/no-image.png";

/**
 * Retorna a URL da imagem do produto.
 *
 * @param {string} imageName
 * @returns {string}
 */
function getProductImageUrl(imageName) {
    if (!imageName) {
        return PRODUCT_FALLBACK_IMAGE;
    }

    return `${PRODUCT_IMAGE_PATH}${encodeURIComponent(imageName)}.png`;
}

/**
 * Cria uma imagem com fallback automático.
 *
 * @param {string} imageName
 * @param {string} alt
 * @returns {HTMLImageElement}
 */
function createProductImage(imageName, alt) {
    const img = document.createElement("img");

    img.loading = "lazy";
    img.decoding = "async";

    img.src = getProductImageUrl(imageName);
    img.alt = alt;

    img.onerror = () => {
        img.onerror = null;
        img.src = PRODUCT_FALLBACK_IMAGE;
    };

    return img;
}

/**
 * Escapa caracteres especiais de HTML para evitar XSS ao inserir texto
 * dinâmico via innerHTML.
 * @param {string} value - Texto potencialmente inseguro.
 * @returns {string} Texto seguro para inserção em HTML.
 */
function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = String(value ?? "");
  return div.innerHTML;
}

/**
 * Formata um valor numérico como moeda brasileira (BRL).
 * @param {number} value - Valor monetário.
 * @returns {string} Valor formatado (ex: "R$ 1.234,56").
 */
function formatCurrency(value) {
  if (!Number.isFinite(value)) return "";
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/**
 * Simula a busca assíncrona de produtos em uma API.
 * Hoje resolve com os dados mockados de loja-data.js; no futuro, deve ser
 * substituída por: `return fetch('https://pingobras-sg.onrender.com/api/produtos').then(r => r.json());`
 * @returns {Promise<Product[]>} Lista de produtos.
 */
async function loadProducts() {
  return Promise.resolve(PRODUCTS);
}

/**
 * Simula a busca assíncrona de categorias em uma API.
 * @returns {Promise<{slug: string, name: string, icon: string}[]>} Lista de categorias.
 */
async function loadCategories() {
  return Promise.resolve(CATEGORIES);
}

/**
 * Filtra produtos por termo de busca livre (nome, marca, modelo e tags).
 * @param {Product[]} products - Lista de produtos de origem.
 * @param {string} term - Termo digitado pelo usuário.
 * @returns {Product[]} Produtos cujo conteúdo corresponde ao termo.
 */
function searchProducts(products, term) {
  const query = term.trim().toLowerCase();
  if (!query) return products;
  return products.filter((product) => {
    const haystack = [
      product.name,
      product.brand,
      product.model,
      ...product.tags,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}

/**
 * Aplica filtros de categoria, marca e condição sobre uma lista de produtos.
 * @param {Product[]} products - Lista de produtos de origem.
 * @param {{category: string, brand: string, condition: string}} filters - Filtros ativos.
 * @returns {Product[]} Produtos que atendem a todos os filtros selecionados.
 */
function filterProducts(products, filters) {
  return products.filter((product) => {
    const matchesCategory =
      filters.category === "todas" || product.category === filters.category;
    const matchesBrand =
      filters.brand === "todas" || product.brand === filters.brand;
    const matchesCondition =
      filters.condition === "todas" || product.condition === filters.condition;
    return matchesCategory && matchesBrand && matchesCondition;
  });
}

/**
 * Ordena produtos de acordo com o critério selecionado pelo usuário.
 * @param {Product[]} products - Lista de produtos a ordenar (não é mutada).
 * @param {'relevancia'|'menor-preco'|'maior-preco'|'nome'} sort - Critério de ordenação.
 * @returns {Product[]} Nova lista ordenada.
 */
function sortProducts(products, sort) {
  const copy = [...products];
  switch (sort) {
    case "menor-preco":
      return copy.sort((a, b) => a.price - b.price);
    case "maior-preco":
      return copy.sort((a, b) => b.price - a.price);
    case "nome":
      return copy.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    default:
      return copy;
  }
}

/**
 * Monta o link do WhatsApp com mensagem pré-preenchida para um produto.
 * @param {Product} product - Produto de interesse.
 * @returns {string} URL completa do WhatsApp (wa.me) com a mensagem codificada.
 */
function buildWhatsAppLink(product) {
  const phone = "5527995744791";
  const productUrl = `${window.location.origin}/loja/produto.html?id=${product.id}`;
  const message =
    `Olá! Tenho interesse neste produto:\n` +
    `Nome: ${product.name}\n` +
    `Preço: ${formatCurrency(product.price)}\n` +
    `Código: ${product.id}\n` +
    `Link: ${productUrl}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Renderiza um único cartão de produto como elemento DOM.
 * @param {Product} product - Produto a ser renderizado.
 * @returns {HTMLElement} Elemento `<div class="col">` pronto para inserção no grid.
 */
function renderProduct(product) {
  const col = document.createElement("div");
  col.className = "col-sm-6 col-lg-4 col-xl-3";

  const hasDiscount =
    Number.isFinite(product.oldPrice) && product.oldPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  col.innerHTML = `
    <article class="product-card h-100" data-product-id="${escapeHtml(product.id)}">
      <div class="product-card__media">
        <span class="badge product-card__badge text-bg-${product.condition === "novo" ? "success" : "secondary"}">
          ${escapeHtml(conditionLabel(product.condition))}
        </span>
        ${hasDiscount ? `<span class="badge product-card__discount text-bg-danger">-${discountPercent}%</span>` : ""}
        <div class="product-card__image">
          <img
            class="product-card__img"
            width="240px"
            height="240px"
            src="${getProductImageUrl(product.images?.[0])}"
            alt="${escapeHtml(product.name)}"
            loading="lazy"
            decoding="async"
            onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}';"
          />
        </div>
      </div>
      <div class="product-card__body">
        <p class="product-card__brand">${escapeHtml(product.brand)}</p>
        <h3 class="product-card__title">${escapeHtml(product.name)}</h3>
        <div class="product-card__price">
          ${hasDiscount ? `<span class="product-card__old-price">${escapeHtml(formatCurrency(product.oldPrice))}</span>` : ""}
          <span class="product-card__current-price">${escapeHtml(formatCurrency(product.price))}</span>
        </div>
        <p class="product-card__stock"><i class="bi bi-box-seam" aria-hidden="true"></i> ${product.stock > 0 ? `${product.stock} em estoque` : "Sob consulta"}</p>
      </div>
      <div class="product-card__footer">
        <a class="btn btn-outline-primary-gradient w-100 mb-2" href="produto.html?id=${encodeURIComponent(product.id)}">
          Ver detalhes
        </a>
        <a class="btn btn-primary-gradient w-100" target="_blank" rel="noopener noreferrer"
           href="${escapeHtml(buildWhatsAppLink(product))}">
          <i class="bi bi-whatsapp" aria-hidden="true"></i> Comprar pelo WhatsApp
        </a>
      </div>
    </article>
  `;
  return col;
}

/**
 * Retorna o rótulo amigável para o estado de conservação do produto.
 * @param {'novo'|'seminovo'|'recondicionado'} condition - Estado do produto.
 * @returns {string} Rótulo em português para exibição.
 */
function conditionLabel(condition) {
  const labels = {
    novo: "Novo",
    seminovo: "Seminovo",
    recondicionado: "Recondicionado",
  };
  return labels[condition] || condition;
}

/**
 * Retorna o ícone (Bootstrap Icons) associado a uma categoria.
 * @param {string} categorySlug - Slug da categoria do produto.
 * @returns {string} Nome da classe do ícone.
 */
function categoryIcon(categorySlug) {
  const found = CATEGORIES.find((c) => c.slug === categorySlug);
  return found ? found.icon : "bi-box-seam";
}

/**
 * Renderiza a lista completa de produtos no grid da página.
 * @param {Product[]} products - Produtos já filtrados/ordenados/paginados.
 * @param {HTMLElement} container - Elemento onde os cards serão inseridos.
 * @returns {void}
 */
function renderProducts(products, container) {
  container.innerHTML = "";
  if (products.length === 0) {
    container.innerHTML = `
      <div class="col-12 empty-state text-center py-5">
        <i class="bi bi-search display-4 mb-3 d-block"></i>
        <p class="mb-0">Nenhum produto encontrado com os filtros selecionados.</p>
      </div>`;
    return;
  }
  const fragment = document.createDocumentFragment();
  products.forEach((product) => fragment.appendChild(renderProduct(product)));
  container.appendChild(fragment);
}

/**
 * Renderiza os controles de paginação com base no total de itens.
 * @param {number} totalItems - Total de produtos após filtro/busca.
 * @param {number} currentPage - Página atualmente selecionada (1-indexed).
 * @param {HTMLElement} container - Elemento `<ul>` de paginação.
 * @param {(page: number) => void} onPageChange - Callback ao trocar de página.
 * @returns {void}
 */
function renderPagination(totalItems, currentPage, container, onPageChange) {
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
  container.innerHTML = "";
  if (totalPages <= 1) return;

  const createPageItem = (label, page, disabled = false, active = false) => {
    const li = document.createElement("li");
    li.className =
      `page-item ${disabled ? "disabled" : ""} ${active ? "active" : ""}`.trim();
    const button = document.createElement("button");
    button.type = "button";
    button.className = "page-link";
    button.textContent = label;
    button.disabled = disabled;
    button.addEventListener("click", () => onPageChange(page));
    li.appendChild(button);
    return li;
  };

  container.appendChild(
    createPageItem("Anterior", currentPage - 1, currentPage === 1),
  );
  for (let page = 1; page <= totalPages; page += 1) {
    container.appendChild(
      createPageItem(String(page), page, false, page === currentPage),
    );
  }
  container.appendChild(
    createPageItem("Próxima", currentPage + 1, currentPage === totalPages),
  );
}

/**
 * Popula o `<select>` de categorias e os chips de categorias populares.
 * @param {{slug: string, name: string, icon: string}[]} categories - Categorias disponíveis.
 * @returns {void}
 */
function renderCategoryOptions(categories) {
  const select = document.getElementById("filter-category");
  const chipsContainer = document.getElementById("category-chips");
  if (!select || !chipsContainer) return;

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.slug;
    option.textContent = category.name;
    select.appendChild(option);
  });

  chipsContainer.innerHTML = "";
  categories.forEach((category) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "category-chip";
    chip.dataset.categorySlug = category.slug;
    chip.innerHTML = `<i class="bi ${escapeHtml(category.icon)}" aria-hidden="true"></i> ${escapeHtml(category.name)}`;
    chip.addEventListener("click", () => {
      state.category = category.slug;
      select.value = category.slug;
      state.page = 1;
      applyFiltersAndRender();
      document
        .getElementById("catalogo")
        ?.scrollIntoView({ behavior: "smooth" });
    });
    chipsContainer.appendChild(chip);
  });
}

/**
 * Popula o `<select>` de marcas com base na lista global BRANDS.
 * @returns {void}
 */
function renderBrandOptions() {
  const select = document.getElementById("filter-brand");
  if (!select) return;
  BRANDS.forEach((brand) => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    select.appendChild(option);
  });
}

/** Cache em memória de todos os produtos carregados (evita nova "chamada de API" a cada filtro). */
let productsCache = [];

/**
 * Aplica busca, filtros e ordenação ao cache de produtos e renderiza a página atual.
 * @returns {void}
 */
function applyFiltersAndRender() {
  const grid = document.getElementById("products-grid");
  const pagination = document.getElementById("pagination");
  const resultsCount = document.getElementById("results-count");
  if (!grid || !pagination) return;

  let result = searchProducts(productsCache, state.search);
  result = filterProducts(result, state);
  result = sortProducts(result, state.sort);

  if (resultsCount) {
    resultsCount.textContent = `${result.length} produto${result.length === 1 ? "" : "s"} encontrado${result.length === 1 ? "" : "s"}`;
  }

  const start = (state.page - 1) * PAGE_SIZE;
  const pageItems = result.slice(start, start + PAGE_SIZE);

  renderProducts(pageItems, grid);
  renderPagination(result.length, state.page, pagination, (page) => {
    state.page = page;
    applyFiltersAndRender();
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  });
}

/**
 * Conecta os elementos de filtro/busca/ordenação da UI ao estado da aplicação.
 * @returns {void}
 */
function bindFilterEvents() {
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("filter-category");
  const brandSelect = document.getElementById("filter-brand");
  const conditionSelect = document.getElementById("filter-condition");
  const sortSelect = document.getElementById("sort-select");
  const clearButton = document.getElementById("clear-filters");

  searchInput?.addEventListener(
    "input",
    debounce((event) => {
      state.search = event.target.value;
      state.page = 1;
      applyFiltersAndRender();
    }, 250),
  );

  categorySelect?.addEventListener("change", (event) => {
    state.category = event.target.value;
    state.page = 1;
    applyFiltersAndRender();
  });

  brandSelect?.addEventListener("change", (event) => {
    state.brand = event.target.value;
    state.page = 1;
    applyFiltersAndRender();
  });

  conditionSelect?.addEventListener("change", (event) => {
    state.condition = event.target.value;
    state.page = 1;
    applyFiltersAndRender();
  });

  sortSelect?.addEventListener("change", (event) => {
    state.sort = event.target.value;
    applyFiltersAndRender();
  });

  clearButton?.addEventListener("click", () => {
    state.search = "";
    state.category = "todas";
    state.brand = "todas";
    state.condition = "todas";
    state.sort = "relevancia";
    state.page = 1;
    if (searchInput) searchInput.value = "";
    if (categorySelect) categorySelect.value = "todas";
    if (brandSelect) brandSelect.value = "todas";
    if (conditionSelect) conditionSelect.value = "todas";
    if (sortSelect) sortSelect.value = "relevancia";
    applyFiltersAndRender();
  });
}

/**
 * Renderiza a vitrine de produtos em destaque (maior desconto) no topo da página.
 * @param {Product[]} products - Todos os produtos carregados.
 * @returns {void}
 */
function renderFeaturedProducts(products) {
  const container = document.getElementById("featured-grid");
  if (!container) return;
  const featured = [...products]
    .filter((p) => Number.isFinite(p.oldPrice) && p.oldPrice > p.price)
    .sort((a, b) => b.oldPrice / b.price - a.oldPrice / a.price)
    .slice(0, 4);
  renderProducts(featured, container);
}

/**
 * Cria uma versão "debounced" de uma função, atrasando sua execução.
 * @param {Function} fn - Função original.
 * @param {number} delayMs - Atraso em milissegundos.
 * @returns {Function} Função com debounce aplicado.
 */
function debounce(fn, delayMs) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delayMs);
  };
}

/**
 * Ponto de entrada da página de catálogo: carrega dados, popula filtros e
 * renderiza a primeira página de resultados.
 * @returns {Promise<void>}
 */
async function initLojaPage() {
  const [products, categories] = await Promise.all([
    loadProducts(),
    loadCategories(),
  ]);
  productsCache = products;

  renderCategoryOptions(categories);
  renderBrandOptions();
  renderFeaturedProducts(products);
  bindFilterEvents();
  applyFiltersAndRender();
}

document.addEventListener("DOMContentLoaded", initLojaPage);
