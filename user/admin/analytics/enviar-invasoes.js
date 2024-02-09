const baseName = document.getElementById("baseName");
const simulacao = document.getElementById("Simulacao");
const bitcoins = document.getElementById("bitcoins");
const money = document.getElementById("money");
const reputacao = document.getElementById("rep");
const urlReplay = document.getElementById("url");
const noUrl = document.getElementById("noUrl");
const form = document.querySelector("form");
var dataUser = JSON.parse(localStorage.getItem("dataUser"));
var byAdmin = dataUser.user;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  console.log("Validando dados...");
  validar();
});

function validar() {
  const bitcoinsValue = bitcoins.value;
  const moneyValue = money.value;
  const repValue = reputacao.value;
  var baseNameValue = baseName.value;
  var urlReplayValue = urlReplay.value;

  if (simulacao.checked) {
    baseNameValue = baseName.value + " " + simulacao.value;
  }

  if (noUrl.checked) {
    urlReplayValue = noUrl.value;
  }

  if (
    baseNameValue &&
    bitcoinsValue &&
    moneyValue &&
    urlReplayValue &&
    repValue
  ) {
    postData(
      baseNameValue,
      bitcoinsValue,
      moneyValue,
      repValue,
      urlReplayValue
    );
    console.log("Enviando dados...");
  } else {
    alert("Dados Incompletos!");
  }
}

function postData(base, bitcoins, money, rep, replayLink) {
  const url = "https://pingobras-sg.glitch.me/api/thegame/hackers/invasions";
  const payload = {
    base: base,
    bitcoins: bitcoins,
    money: money,
    reputacao: rep,
    replayLink: replayLink,
    byAdmin: byAdmin,
  };
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: "APIKey20231603",
    },
    body: JSON.stringify(payload),
  };
  analyticsMessage(
    byAdmin + " Está tentando enviar um analytics, Aguarde confirmação!"
  );
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.text();
        analyticsMessage(byAdmin + " Enviou um analytics com sucesso!");
      } else {
        return response.text();
      }
    })
    .then((data) => {
      console.log("DATA RESPONSE: ");
      console.log(data);
      alert(data);
      window.location.href = "";
    })
    .catch((error) => errosEnviar(error));
}

function errosEnviar(error) {
  console.debug(error);
  alert(error);
}

function analyticsMessage(msg) {
  const url = "https://pingobras-sg.glitch.me/api/pingobras/mensagem";
  const payload = {
    titulo: "ANALYTICS",
    mensagem: msg,
  };
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: "APIKey20231603",
    },
    body: JSON.stringify(payload),
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.text();
      }
    })
    .then((data) => {
      console.log("DATA RESPONSE: ");
      console.log(data);
    })
    .catch((error) => console.debug(error));
}
