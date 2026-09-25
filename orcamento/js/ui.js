import { defaults, delivery, faqs, features, infrastructure, maintenance, pages, projectTypes, scenarios } from "./data.js";
import { calculateEstimate, formatMoney } from "./calculator.js";

const byId = (id) => document.getElementById(id);
const state = structuredClone(defaults);

/** Cria elementos usando textContent para manter os dados fora de HTML interpretável. */
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/** Constrói um controle de seleção de catálogo. */
function choiceControl({ item, group, checked, priceLabel, description, help = true }) {
  const label = element("label", group === "feature" ? "feature-item" : "choice-item");
  const input = element("input", "form-check-input");
  input.type = "checkbox";
  input.checked = checked;
  input.dataset.choice = group;
  input.value = item.id;
  const body = element("span", group === "feature" ? "feature-item__body" : "choice-item__body");
  body.append(element("strong", "", item.name));
  if (description) body.append(element("small", "", description));
  const price = element("span", group === "feature" ? "feature-item__price" : "choice-item__price", priceLabel);
  label.append(input, body, price);
  if (help) {
    const why = element("button", "why-button choice-item__why", "Por que isso custa?");
    why.type = "button";
    why.dataset.why = item.id;
    why.dataset.whyGroup = group;
    label.append(why);
  }
  return label;
}

function renderScenarios() {
  const root = byId("scenario-options");
  scenarios.forEach((scenario) => {
    const label = element("div", "mode-choice");
    const input = element("input", "form-check-input");
    input.type = "radio";
    input.name = "scenario";
    input.id = `scenario-${scenario.id}`;
    input.value = scenario.id;
    input.checked = state.scenario === scenario.id;
    input.dataset.choice = "scenario";
    const copy = element("label", "mode-choice__label");
    copy.htmlFor = input.id;
    copy.append(element("strong", "", scenario.name), element("small", "", scenario.detail));
    const why = element("button", "why-button", "Por que isso custa?");
    why.type = "button";
    why.dataset.why = scenario.id;
    why.dataset.whyGroup = "scenario";
    label.append(input, copy, why);
    root.append(label);
  });
}

function renderProjects() {
  const root = byId("project-options");
  projectTypes.forEach((project) => {
    const label = element("article", "project-choice");
    const input = element("input", "form-check-input");
    input.type = "radio";
    input.name = "project-type";
    input.id = `project-${project.id}`;
    input.value = project.id;
    input.checked = state.project === project.id;
    input.dataset.choice = "project";
    const name = element("label", "project-choice__name", project.name);
    name.htmlFor = input.id;
    const why = element("button", "why-button project-choice__why", "Por que isso custa?");
    why.type = "button";
    why.dataset.why = project.id;
    why.dataset.whyGroup = "project";
    label.append(input, name, element("span", "project-choice__price", `A partir de ${formatMoney(project.price)}`), element("span", "project-choice__hint", project.hint), why);
    root.append(label);
  });
}

function renderChoices() {
  const pageRoot = byId("page-options");
  pages.forEach((page) => pageRoot.append(choiceControl({ item: page, group: "page", checked: state.pages.includes(page.id), priceLabel: page.price ? formatMoney(page.price) : "Incluída", description: page.kind === "functional" ? "Página funcional" : "Página informativa" })));

  const groupedFeatures = features.reduce((groups, feature) => {
    groups[feature.group] ||= [];
    groups[feature.group].push(feature);
    return groups;
  }, {});
  Object.entries(groupedFeatures).forEach(([groupName, items]) => {
    const section = element("section", "feature-group");
    section.append(element("h4", "", groupName));
    const list = element("div", "feature-list");
    items.forEach((feature) => {
      const control = choiceControl({ item: feature, group: "feature", checked: state.features.includes(feature.id), priceLabel: formatMoney(feature.price), description: feature.description });
      list.append(control);
    });
    section.append(list);
    byId("feature-options").append(section);
  });

  infrastructure.forEach((item) => byId("infrastructure-options").append(choiceControl({ item, group: "infrastructure", checked: state.infrastructure.includes(item.id), priceLabel: `${formatMoney(item.price)}/${item.unit}`, description: item.description })));
  maintenance.forEach((item) => byId("maintenance-options").append(choiceControl({ item, group: "maintenance", checked: state.maintenance.includes(item.id), priceLabel: `${formatMoney(item.price)}/${item.unit}`, description: item.description })));
  byId("source-delivery").checked = state.delivery;
  renderFaq();
}

function renderFaq() {
  faqs.forEach((faq, index) => {
    const item = element("div", "accordion-item");
    const heading = element("h3", "accordion-header");
    const button = element("button", "accordion-button collapsed", faq.question);
    const panelId = `faq-panel-${index}`;
    button.type = "button";
    button.dataset.bsToggle = "collapse";
    button.dataset.bsTarget = `#${panelId}`;
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", panelId);
    heading.append(button);
    const collapse = element("div", "accordion-collapse collapse");
    collapse.id = panelId;
    collapse.dataset.bsParent = "#faq-list";
    const body = element("div", "accordion-body", faq.answer);
    collapse.append(body);
    item.append(heading, collapse);
    byId("faq-list").append(item);
  });
}

function renderSummary() {
  const estimate = calculateEstimate(state);
  const root = byId("summary-content");
  root.replaceChildren();
  addSummaryGroup(root, "Tipo de projeto", [estimate.projectName]);
  if (estimate.pages.length) addSummaryGroup(root, `Páginas · ${estimate.pages.length}`, estimate.pages.map((page) => page.name));
  if (estimate.features.length) addSummaryGroup(root, `Funcionalidades · ${estimate.features.length}`, estimate.features.map((feature) => feature.name));
  if (estimate.infrastructure.length) addSummaryGroup(root, "Infraestrutura", estimate.infrastructure.map((item) => `${item.name} (${item.unit})`));
  if (estimate.maintenance.length) addSummaryGroup(root, "Suporte", estimate.maintenance.map((item) => `${item.name} (${item.unit})`));
  if (state.delivery) addSummaryGroup(root, "Entrega", ["Arquivos do projeto"]);
  byId("development-total").textContent = formatMoney(estimate.developmentTotal);
  const recurring = byId("recurring-totals");
  recurring.replaceChildren();
  recurring.append(recurringRow("Infraestrutura e manutenção · mês", estimate.monthlyTotal));
  recurring.append(recurringRow("Domínio e serviços · ano", estimate.annualTotal));
  updateRequestLink(estimate);
}

function addSummaryGroup(root, title, items) {
  const group = element("section", "summary-group");
  group.append(element("h3", "", title));
  const list = element("ul");
  items.slice(0, 7).forEach((name) => {
    const row = element("li");
    row.append(element("span", "", name));
    list.append(row);
  });
  if (items.length > 7) list.append(element("li", "summary-empty", `+ ${items.length - 7} itens`));
  group.append(list);
  root.append(group);
}

function recurringRow(label, amount) {
  const row = element("div", "recurring-line");
  row.append(element("span", "", label), element("strong", "", `${formatMoney(amount)}/${label.includes("mês") ? "mês" : "ano"}`));
  return row;
}

function updateRequestLink(estimate) {
  const selected = [
    `Tipo: ${estimate.projectName}`,
    `Páginas: ${estimate.pages.map((item) => item.name).join(", ") || "não se aplica"}`,
    `Funcionalidades: ${estimate.features.map((item) => item.name).join(", ") || "nenhuma selecionada"}`,
    `Infraestrutura: ${estimate.infrastructure.map((item) => item.name).join(", ") || "nenhuma selecionada"}`,
    `Manutenção e suporte: ${estimate.maintenance.map((item) => item.name).join(", ") || "nenhum selecionado"}`,
    `Desenvolvimento estimado: ${formatMoney(estimate.developmentTotal)}`,
    `Recorrência mensal: ${formatMoney(estimate.monthlyTotal)}`,
    `Recorrência anual: ${formatMoney(estimate.annualTotal)}`,
    `Modelo: ${scenarios.find((item) => item.id === state.scenario)?.name || "Projeto completo"}`,
    `Entrega dos arquivos: ${state.delivery ? "sim" : "não"}`,
    "\nEsta simulação é uma estimativa, não um orçamento definitivo.",
  ].join("\n");
  const subject = "Solicitação de orçamento de projeto web";
  byId("request-quote").href = `mailto:pingobras.s.a@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(selected)}`;
}

function openWhy(id, group = "feature") {
  const catalog = { feature: features, page: pages, infrastructure, maintenance, project: projectTypes, scenario: scenarios };
  const item = group === "delivery" ? delivery : catalog[group]?.find((entry) => entry.id === id);
  if (!item) return;
  const content = byId("why-content");
  content.replaceChildren();
  content.append(element("h2", "", item.name));
  content.append(element("h3", "", "O que é?"), element("p", "", item.description || item.detail));
  content.append(element("h3", "", "Por que existe esse custo?"), element("p", "", item.why || item.description || item.detail));
  if (item.includes?.length) {
    content.append(element("h3", "", "O que está incluído?"));
    const list = element("ul");
    item.includes.forEach((line) => list.append(element("li", "", line)));
    content.append(list);
  }
  if (item.needed) content.append(element("h3", "", "Quando é necessário?"), element("p", "", item.needed));
  if (item.fallback) content.append(element("h3", "", "E se eu não contratar?"), element("p", "", item.fallback));
  const price = item.billing || (item.price ? `${formatMoney(item.price)}${item.unit ? `/${item.unit}` : " · valor único"}` : "Sem custo adicional nesta estimativa; formato definido no contrato.");
  content.append(element("p", "why-cost-note", `Cobrança: ${price}${item.monthly ? ` + ${formatMoney(item.monthly)}/mês de infraestrutura, quando contratado` : ""}.`));
  byId("why-dialog").showModal();
}

function setScenario(value) {
  state.scenario = value;
  if (value === "own-server") {
    state.infrastructure = state.infrastructure.filter((id) => !["hosting", "database-hosting"].includes(id));
  }
  if (value === "api-only") {
    state.features = [...new Set([...state.features, "api-backend", "database"] )];
    state.pages = [];
    state.infrastructure = state.infrastructure.filter((id) => !["hosting", "database-hosting"].includes(id));
  }
  renderChoiceChecks();
  renderSummary();
  updateScenarioVisibility();
}

function updateScenarioVisibility() {
  const apiOnly = state.scenario === "api-only";
  byId("project-block").classList.toggle("u-hidden", apiOnly);
  byId("pages-block").classList.toggle("u-hidden", apiOnly);
}

function setManagedDefaults() {
  state.scenario = "complete";
  state.infrastructure = [...new Set([...state.infrastructure, "hosting", "database-hosting", "domain"])];
  state.features = [...new Set([...state.features, "database", "api-backend", "backups"])];
  renderScenarioChecks();
  renderChoiceChecks();
  updateScenarioVisibility();
  renderSummary();
}

function renderScenarioChecks() {
  document.querySelectorAll('[data-choice="scenario"]').forEach((input) => { input.checked = input.value === state.scenario; });
}

function renderChoiceChecks() {
  const selections = { page: state.pages, feature: state.features, infrastructure: state.infrastructure, maintenance: state.maintenance };
  Object.entries(selections).forEach(([group, values]) => {
    document.querySelectorAll(`[data-choice="${group}"]`).forEach((input) => { input.checked = values.includes(input.value); });
  });
  byId("source-delivery").checked = state.delivery;
}

function reset() {
  Object.assign(state, structuredClone(defaults));
  renderScenarioChecks();
  renderChoiceChecks();
  document.querySelectorAll('[data-choice="project"]').forEach((input) => { input.checked = input.value === state.project; });
  updateScenarioVisibility();
  renderSummary();
}

function handleChange(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) return;
  const { choice } = input.dataset;
  if (choice === "scenario") setScenario(input.value);
  if (choice === "project") state.project = projectTypes.some((item) => item.id === input.value) ? input.value : defaults.project;
  if (["page", "feature", "infrastructure", "maintenance"].includes(choice)) {
    const collection = { page: "pages", feature: "features", infrastructure: "infrastructure", maintenance: "maintenance" }[choice];
    const validItems = { page: pages, feature: features, infrastructure, maintenance }[choice];
    if (!validItems.some((item) => item.id === input.value)) return;
    state[collection] = input.checked ? [...new Set([...state[collection], input.value])] : state[collection].filter((id) => id !== input.value);
  }
  if (input.dataset.choice === "delivery") state.delivery = input.checked;
  renderSummary();
}

function handleClick(event) {
  const trigger = event.target.closest("[data-why], [data-action]");
  if (!trigger) return;
  if (trigger.dataset.why) openWhy(trigger.dataset.why, trigger.dataset.whyGroup || "delivery");
  if (trigger.dataset.action === "managed") setManagedDefaults();
  if (trigger.dataset.action === "reset") reset();
  if (trigger.dataset.action === "close-dialog") byId("why-dialog").close();
}

export function initializeSimulator() {
  renderScenarios();
  renderProjects();
  renderChoices();
  document.addEventListener("change", handleChange);
  document.addEventListener("click", handleClick);
  byId("why-dialog").addEventListener("click", (event) => {
    if (event.target === byId("why-dialog")) byId("why-dialog").close();
  });
  updateScenarioVisibility();
  renderSummary();
}