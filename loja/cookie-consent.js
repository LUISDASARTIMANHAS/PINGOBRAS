/**
 * PINGOBRAS - Banner de Consentimento de Cookies (LGPD)
 * --------------------------------------------------------------------------
 * Componente leve e reutilizável em qualquer página do site. Armazena a
 * escolha do usuário em localStorage, sem enviar dados a terceiros e sem
 * usar cookies para controlar o próprio consentimento (evita o paradoxo de
 * "usar cookie para consentir cookies" antes da decisão do usuário).
 */

("use strict");

const CONSENT_STORAGE_KEY = "pingobras_cookie_consent";

/**
 * Verifica se o usuário já registrou uma decisão sobre cookies.
 * @returns {boolean} true se já existe uma escolha salva.
 */
function hasStoredConsent() {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) !== null;
  } catch {
    // Armazenamento indisponível (ex: modo privado restrito): trata como não decidido.
    return false;
  }
}

/**
 * Persiste a escolha do usuário sobre cookies.
 * @param {'accepted'|'rejected'} decision - Decisão do usuário.
 * @returns {void}
 */
function storeConsent(decision) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, decision);
  } catch {
    // Falha silenciosa: se o storage não estiver disponível, o banner
    // simplesmente reaparecerá na próxima visita.
  }
}

/**
 * Renderiza e injeta o banner de cookies no final do <body>, caso o usuário
 * ainda não tenha tomado uma decisão.
 * @returns {void}
 */
function renderCookieBanner() {
  if (hasStoredConsent()) return;

  const banner = document.createElement("div");
  banner.className = "cookie-banner py-3";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-live", "polite");
  banner.setAttribute("aria-label", "Aviso de cookies");
  banner.innerHTML = `
    <div class="container d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
      <p class="mb-0 small">
        Usamos cookies essenciais e de análise para melhorar sua experiência. Ao continuar
        navegando, você concorda com nossa
        <a href="/privacidade.html" class="link-light text-decoration-underline">Política de Privacidade</a>
        e nossos
        <a href="/termos.html" class="link-light text-decoration-underline">Termos de Serviço</a>.
      </p>
      <div class="d-flex gap-2 flex-shrink-0">
        <button type="button" class="btn btn-sm btn-outline-light" data-cookie-action="reject">Recusar não essenciais</button>
        <button type="button" class="btn btn-sm btn-primary-gradient" data-cookie-action="accept">Aceitar todos</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  banner.addEventListener("click", (event) => {
    const action = event.target.closest("[data-cookie-action]")?.dataset.cookieAction;
    if (!action) return;
    storeConsent(action === "accept" ? "accepted" : "rejected");
    banner.remove();
  });
}

document.addEventListener("DOMContentLoaded", renderCookieBanner);
