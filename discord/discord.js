/**
 * Redireciona a página para o convite configurado no arquivo central de dados.
 *
 * @return {void}
 */
(function initDiscordRedirect() {
  "use strict";

  const redirectDelay = 15000;
  const fallbackLink = document.getElementById("discord-fallback");

  if (!window.PB_CONFIG_READY) {
    console.error("[Pingobras] Configuração do site não foi inicializada.");
    return;
  }

  window.PB_CONFIG_READY.then((config) => {
    const discordUrl = config.contacts && config.contacts.discord;
    if (!discordUrl) {
      throw new Error("O contato do Discord não foi definido na configuração.");
    }

    if (fallbackLink) fallbackLink.href = discordUrl;
    window.setTimeout(() => window.location.assign(discordUrl), redirectDelay);
  }).catch((error) => {
    console.error(
      "[Pingobras] Não foi possível preparar o redirecionamento do Discord.",
      error,
    );
  });
})();
