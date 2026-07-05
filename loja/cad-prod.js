/**
 * ============================================================================
 * Painel Administrativo - Cadastro de Produtos
 * ----------------------------------------------------------------------------
 * Gera objetos compatíveis com loja-data.js
 * ============================================================================
 */

/** @type {HTMLFormElement} */
const form = document.getElementById("product-form");
const output = document.getElementById("output");

const brandSelect = document.getElementById("brand");
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");

/**
 * Carrega marcas.
 */
function loadBrands() {
  brandSelect.innerHTML = "";

  brandSelect.add(new Option("Selecione...", ""));

  BRANDS.slice()
    .sort((a, b) => a.localeCompare(b))
    .forEach((brand) => {
      brandSelect.add(new Option(brand, brand));
    });
}

/**
 * Carrega categorias.
 */
function loadCategories() {
  categorySelect.innerHTML = "";

  categorySelect.add(new Option("Selecione...", ""));

  CATEGORIES.slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((category) => {
      categorySelect.add(
        new Option(category.name, category.slug)
      );
    });

  loadSubcategories(categorySelect.value);
}

/**
 * Atualiza as subcategorias conforme a categoria escolhida.
 *
 * @param {string} categorySlug
 */
function loadSubcategories(categorySlug) {

  subcategorySelect.innerHTML = "";

  if (!categorySlug) {
    subcategorySelect.add(
      new Option("Selecione uma categoria", "")
    );
    return;
  }

  const subcategories = [
    ...new Set(
      PRODUCTS
        .filter(product => product.category === categorySlug)
        .map(product => product.subcategory)
    )
  ].sort((a, b) => a.localeCompare(b));

  if (!subcategories.length) {
    subcategorySelect.add(
      new Option("Sem subcategorias", "")
    );
    return;
  }

  subcategorySelect.add(new Option("Selecione...", ""));

  subcategories.forEach((subcategory) => {
    subcategorySelect.add(
      new Option(subcategory, subcategory)
    );
  });

}

categorySelect.addEventListener("change", () => {
  loadSubcategories(categorySelect.value);
});

/**
 * Converte textarea em objeto de especificações.
 *
 * Exemplo:
 * Processador: Intel Xeon
 * Memória: 32GB
 *
 * @param {string} text
 * @returns {Object.<string,string>}
 */
function parseSpecs(text) {

  const specs = {};

  text
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .forEach(line => {

      const index = line.indexOf(":");

      if (index === -1) {
        return;
      }

      const key = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();

      if (key && value) {
        specs[key] = value;
      }

    });

  return specs;

}

/**
 * Gera ID simples.
 *
 * @returns {number}
 */
function generateId() {
  return Date.now();
}

/**
 * Monta objeto do produto.
 *
 * @returns {Object}
 */
function buildProduct() {

  return {
    id: generateId(),

    name: document.getElementById("name").value.trim(),

    price: Number(document.getElementById("price").value),

    oldPrice:
      document.getElementById("oldPrice").value !== ""
        ? Number(document.getElementById("oldPrice").value)
        : null,

    brand: brandSelect.value,

    model: document.getElementById("model").value.trim(),

    category: categorySelect.value,

    subcategory: subcategorySelect.value,

    shortDescription: document
      .getElementById("shortDescription")
      .value.trim(),

    longDescription: document
      .getElementById("longDescription")
      .value.trim(),

    specs: parseSpecs(
      document.getElementById("specs").value
    ),

    warranty: document
      .getElementById("warranty")
      .value.trim(),

    condition: document.getElementById("condition").value,

    stock: Number(document.getElementById("stock").value),

    weightKg: Number(document.getElementById("weightKg").value),

    dimensions: document
      .getElementById("dimensions")
      .value.trim(),

    images: document
      .getElementById("images")
      .value
      .split(",")
      .map(i => i.trim())
      .filter(Boolean),

    tags: document
      .getElementById("tags")
      .value
      .split(",")
      .map(t => t.trim())
      .filter(Boolean),

    relatedIds: []
  };

}

/**
 * Renderiza JSON.
 *
 * @param {Object} product
 */
function render(product) {
  output.textContent = JSON.stringify(product, null, 2);
}

/**
 * Copia JSON.
 */
async function copyJSON() {

  if (!output.textContent.trim()) {
    return;
  }

  await navigator.clipboard.writeText(output.textContent);

}

/* ==========================================================================
 * Eventos
 * ========================================================================== */

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const product = buildProduct();

  render(product);
});

document
  .getElementById("copy")
  .addEventListener("click", copyJSON);

/* ==========================================================================
 * Inicialização
 * ========================================================================== */

loadBrands();
loadCategories();