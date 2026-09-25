import { delivery, features, infrastructure, maintenance, pages, projectTypes } from "./data.js";

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

/**
 * Localiza um item por id sem confiar em valores vindos de campos do usuário.
 * @param {Array<Object>} items - Catálogo controlado pela aplicação.
 * @param {string} id - Identificador selecionado.
 * @return {Object|undefined} Item encontrado no catálogo.
 */
function findItem(items, id) {
  return items.find((item) => item.id === id);
}

/**
 * Calcula a estimativa do projeto usando apenas ids válidos dos catálogos.
 * Os resultados servem somente como referência e não são orçamento vinculante.
 * @param {Object} project - Configuração atual do simulador.
 * @return {Object} Valores agrupados por cobrança única, mensal e anual.
 */
export function calculateEstimate(project) {
  const apiOnly = project.scenario === "api-only";
  const selectedProject = findItem(projectTypes, project.project);
  const selectedPages = project.pages.map((id) => findItem(pages, id)).filter(Boolean);
  const selectedFeatures = project.features.map((id) => findItem(features, id)).filter(Boolean);
  const selectedInfrastructure = project.infrastructure.map((id) => findItem(infrastructure, id)).filter(Boolean);
  const selectedMaintenance = project.maintenance.map((id) => findItem(maintenance, id)).filter(Boolean);
  const oneTimeItems = [];

  if (apiOnly) {
    oneTimeItems.push({ name: "Estrutura inicial de API", price: 4200 });
  } else if (selectedProject) {
    oneTimeItems.push({ name: selectedProject.name, price: selectedProject.price });
  }

  selectedPages.filter((page) => page.id !== "home").forEach((page) => {
    oneTimeItems.push({ name: `Página: ${page.name}`, price: page.price });
  });
  selectedFeatures.forEach((feature) => oneTimeItems.push({ name: feature.name, price: feature.price }));
  if (project.delivery) oneTimeItems.push({ name: delivery.name, price: delivery.price });

  const monthlyItems = selectedInfrastructure.filter((item) => item.unit === "mês").map((item) => ({ name: item.name, price: item.price }));
  const annualItems = selectedInfrastructure.filter((item) => item.unit === "ano").map((item) => ({ name: item.name, price: item.price }));
  selectedMaintenance.filter((item) => item.unit === "mês").forEach((item) => monthlyItems.push({ name: item.name, price: item.price }));
  selectedMaintenance.filter((item) => item.unit !== "mês").forEach((item) => oneTimeItems.push({ name: item.name, price: item.price }));

  return {
    projectName: apiOnly ? "API + banco de dados" : selectedProject?.name || "Projeto personalizado",
    pages: apiOnly ? [] : selectedPages,
    features: selectedFeatures,
    infrastructure: selectedInfrastructure,
    maintenance: selectedMaintenance,
    oneTimeItems,
    monthlyItems,
    annualItems,
    developmentTotal: oneTimeItems.reduce((sum, item) => sum + item.price, 0),
    monthlyTotal: monthlyItems.reduce((sum, item) => sum + item.price, 0),
    annualTotal: annualItems.reduce((sum, item) => sum + item.price, 0),
  };
}

/**
 * Formata um valor em reais no padrão brasileiro.
 * @param {number} value - Valor em reais.
 * @return {string} Valor formatado.
 */
export function formatMoney(value) {
  return money.format(value);
}