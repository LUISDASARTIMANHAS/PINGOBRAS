const formWebhook = document.getElementById("webhookForm");
const formPingobrasWebhook = document.getElementById("webhookPingobrasForm");

formWebhook.addEventListener("submit", stopDefAction, false);
formPingobrasWebhook.addEventListener("submit", stopDefAction, false);

function stopDefAction(evt) {
  evt.preventDefault();
}

function sendWebhook() {
  const webhookUrl = document.getElementById("webhookUrl");
  const webhookTitulo = document.getElementById("webhookTitulo");
  const webhookMsg = document.getElementById("webhookMsg");
  const webhookColor = document.getElementById("webhookColor");
  const urlBase = "https://discord.com/api/webhooks/";

  // Verificação de URL do webhook
  if (
    !webhookUrl.value.startsWith(urlBase) ||
    webhookUrl.length <= urlBase.length
  ) {
    alert("URL do webhook inválida!");
  } else {
    if (webhookTitulo.value && webhookMsg.value) {
      discordWebhookAPI(
        webhookTitulo.value,
        webhookMsg.value,
        webhookColor.value.slice(1),
        webhookUrl.value
      );
      console.log("Enviando dados...");
    } else {
      alert("Dados Incompletos!");
    }
  }
}

function pingobrasSendWebhook() {
  const webhookTitulo = document.getElementById("pingobras-webhookTitulo");
  const webhookMsg = document.getElementById("pingobras-webhookMsg");
  const urlBase = "https://discord.com/api/webhooks";
  const id = "1043621229858390098";
  const token =
    "F9agt1QAvY853mnVJrGdtmC5TKtDqXnX_CTyJ6XzT57mCoPPaxMLsmOu_fjLyNyoHbF0";

  if (webhookTitulo.value && webhookMsg.value) {
    discordWebhookAPI(
      `SISTEMA/${(webhookTitulo.value).toUpperCase()}`,
      webhookMsg.value,
      "FF00FF",
      `${urlBase}/${id}/${token}`
    );
    console.log("Enviando dados...");
  } else {
    alert("Dados Incompletos!");
  }
}

function discordWebhookAPI(titulo, msg, color, webhookUrl) {
  const url = "https://pingobras-sg.glitch.me/api/discord/webhook/v1";
  const payload = {
    titulo: titulo,
    mensagem: msg,
    color: color,
    url: webhookUrl,
  };
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization:
        "Bearer APIKey8b54f4d52a6f64a07e1d18c1d5f2064d59d2d9b92b38b42a710a2a1043a54725&message&discordAPI&socket",
    },
    body: JSON.stringify(payload),
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        return response.text().then((errorText) => {
          throw new Error("Erro ao enviar webhook: " + errorText);
        });
      }
    })
    .then((data) => {
      console.log("DATA RESPONSE: ");
      console.log(data);
      alert("SERVIDOR: WEBHOOK ENVIADO!");
    })
    .catch((error) => console.debug(error));
}
