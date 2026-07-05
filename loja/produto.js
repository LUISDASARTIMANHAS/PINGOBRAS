/**
 * ============================================================================
 * PINGOBRAS - Página de Detalhes do Produto
 * ----------------------------------------------------------------------------
 * Lê o parâmetro `id` da URL (validado como inteiro positivo), busca o
 * produto correspondente na camada de dados mockada e renderiza galeria,
 * especificações técnicas, produtos relacionados e o CTA do WhatsApp.
 * ============================================================================
 */

("use strict");

/**
 * Extrai e valida o ID do produto a partir dos parâmetros da URL atual.
 * @returns {?number} ID do produto como inteiro positivo, ou null se inválido/ausente.
 */
function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const rawId = params.get("id");
  const id = Number.parseInt(rawId ?? "", 10);
  return Number.isInteger(id) && id > 0 ? id : null;
}

/**
 * Busca um produto pelo ID dentro da lista carregada.
 * @param {Product[]} products - Lista completa de produtos.
 * @param {number} id - ID do produto procurado.
 * @returns {?Product} Produto encontrado, ou null.
 */
function findProductById(products, id) {
  return products.find((product) => product.id === id) ?? null;
}

/**
 * Renderiza a galeria principal e as miniaturas de um produto.
 * @param {Product} product - Produto cujas imagens serão exibidas.
 * @returns {void}
 */
function renderGallery(product) {
  const mainImage = document.getElementById("gallery-main");
  const thumbsContainer = document.getElementById("gallery-thumbs");
  if (!mainImage || !thumbsContainer) return;

  const images = product.images?.length
    ? product.images
    : [null];

  const mainImgEl = document.createElement("img");
  mainImgEl.className = "img-fluid w-100";
  mainImgEl.loading = "eager";
  mainImgEl.decoding = "async";

  const setActiveImage = (index) => {
    const imageName = images[index];

    mainImgEl.src = getProductImageUrl(imageName);
    mainImgEl.alt = `${product.name} - imagem ${index + 1}`;

    thumbsContainer.querySelectorAll(".gallery-thumb").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
    });
  };

  // render principal
  mainImage.innerHTML = "";
  mainImage.appendChild(mainImgEl);

  // render thumbs
  thumbsContainer.innerHTML = "";

  images.forEach((imageName, index) => {
    const thumb = document.createElement("button");
    thumb.type = "button";
    thumb.className = `gallery-thumb ${index === 0 ? "active" : ""}`;

    const img = createProductImage(imageName, product.name);

    img.className = "img-thumbnail";
    img.style.width = "70px";
    img.style.height = "70px";
    img.style.objectFit = "cover";

    thumb.appendChild(img);

    thumb.addEventListener("click", () => setActiveImage(index));

    thumbsContainer.appendChild(thumb);
  });

  setActiveImage(0);
}

/**
 * Renderiza a tabela de especificações técnicas do produto.
 * @param {Product} product - Produto de origem.
 * @returns {void}
 */
function renderSpecsTable(product) {
  const tbody = document.getElementById("specs-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";
  Object.entries(product.specs).forEach(([key, value]) => {
    const row = document.createElement("tr");
    const th = document.createElement("th");
    th.scope = "row";
    th.textContent = key.replace(/_/g, " ");
    const td = document.createElement("td");
    td.textContent = value;
    row.append(th, td);
    tbody.appendChild(row);
  });
}

/**
 * Preenche os elementos textuais da página com os dados do produto.
 * Usa exclusivamente `textContent` para eliminar qualquer risco de XSS.
 * @param {Product} product - Produto a exibir.
 * @returns {void}
 */
function renderProductInfo(product) {
  document.title = `${product.name} | Loja Pingobras`;

  const setText = (elementId, text) => {
    const element = document.getElementById(elementId);
    if (element) element.textContent = text;
  };

  setText("product-brand", product.brand);
  setText("product-title", product.name);
  setText("product-condition", conditionLabel(product.condition));
  setText("product-warranty", product.warranty);
  setText("product-stock", product.stock > 0 ? `${product.stock} unidades em estoque` : "Sob consulta");
  setText("product-short-description", product.shortDescription);
  setText("product-long-description", product.longDescription);
  setText("product-dimensions", product.dimensions);
  setText("product-weight", `${product.weightKg} kg`);

  const priceElement = document.getElementById("product-price");
  const oldPriceElement = document.getElementById("product-old-price");
  if (priceElement) priceElement.textContent = formatCurrency(product.price);
  if (oldPriceElement) {
    const hasDiscount = Number.isFinite(product.oldPrice) && product.oldPrice > product.price;
    oldPriceElement.textContent = hasDiscount ? formatCurrency(product.oldPrice) : "";
    oldPriceElement.classList.toggle("d-none", !hasDiscount);
  }

  const whatsappButton = document.getElementById("whatsapp-cta");
  if (whatsappButton) whatsappButton.href = buildWhatsAppLink(product);

  const breadcrumbCategory = document.getElementById("breadcrumb-category");
  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = CATEGORIES.find((c) => c.slug === product.category)?.name ?? product.category;
  }
}

/**
 * Renderiza os cartões de produtos relacionados.
 * @param {Product[]} allProducts - Todos os produtos disponíveis.
 * @param {Product} product - Produto atual (fonte da lista de relacionados).
 * @returns {void}
 */
function renderRelatedProducts(allProducts, product) {
  const container = document.getElementById("related-grid");
  if (!container) return;
  const related = product.relatedIds
    .map((id) => findProductById(allProducts, id))
    .filter((item) => item !== null);
  renderProducts(related, container);
}

/**
 * Exibe um estado de "produto não encontrado" caso o ID seja inválido.
 * @returns {void}
 */
function renderNotFound() {
  const main = document.getElementById("product-main");
  if (!main) return;
  main.innerHTML = `
    <div class="text-center py-5">
      <i class="bi bi-emoji-frown display-3 mb-3 d-block text-secondary"></i>
      <h1 class="h3 mb-3">Produto não encontrado</h1>
      <p class="text-muted">O produto que você procura não existe ou não está mais disponível.</p>
      <a href="index.html" class="btn btn-primary-gradient mt-2">Voltar para a loja</a>
    </div>
  `;
}

/**
 * Ponto de entrada da página de detalhes do produto.
 * @returns {Promise<void>}
 */
async function initProdutoPage() {
  const products = await loadProducts();
  const id = getProductIdFromUrl();
  const product = id !== null ? findProductById(products, id) : null;

  if (!product) {
    renderNotFound();
    return;
  }

  renderProductInfo(product);
  renderGallery(product);
  renderSpecsTable(product);
  renderRelatedProducts(products, product);
}

document.addEventListener("DOMContentLoaded", initProdutoPage);
