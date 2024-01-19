reloadDataUser();

function renderizarDetalhes() {
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const token = localStorage.getItem("token");
  const nomeLabel = document.getElementById("nomeDetalhes");
  const userLabel = document.getElementById("userDetalhes");
  const saldoLabel = document.getElementById("saldoDetalhes");
  const coinsLabel = document.getElementById("coinsDetalhes");
  const sonhosLabel = document.getElementById("sonhosDetalhes");
  const imgLabel = document.getElementById("thumbnail");
  const backgroundLabel = document.getElementById("backgroundDetalhes");
  const tokenLabel = document.getElementById("tokenDetalhes");
  const adminLabel = document.getElementById("adminDetalhes");
  const pixLabel = document.getElementById("pixDetalhes");
  const pixTypeLabel = document.getElementById("pixTypeDetalhes");
  const navigatorLabel = document.getElementById("navigatorDetalhes");
  const tabelaServices = document.querySelector("tbody");

  // banco de dados
  console.log("Carregando dados....");
  const nomeLoad = dataUser.nome;
  const userLoad = dataUser.user;
  const saldoLoad = dataUser.saldo;
  const coinsLoad = dataUser.coinsVR;
  const sonhosLoad = dataUser.sonhos;
  const imgLoad = dataUser.PerfilIMG;
  const backgroundLoad = dataUser.UserBGCad;
  const admin = dataUser.admin;
  const adminLoad = conversorSimEnao(admin);
  const pix = dataUser.pix;
  const pixType = dataUser.pixType;
  const services = dataUser.services;

  // img presets
  if (imgLoad) {
    imgLabel.src = imgLoad;
  } else {
    imgLabel.src =
      "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/icon-4399701_960_720.png?v=1687048218541";
  }
  navigatorLabel.textContent = navigator.appCodeName;

  // js presets
  nomeLabel.textContent = nomeLoad;
  userLabel.textContent = userLoad;
  saldoLabel.textContent = saldoLoad;
  coinsLabel.textContent =
    coinsLoad + ` (Conversão p/ sonhos: ${coinsLoad / 1.6})`;
  sonhosLabel.textContent = sonhosLoad || 0;
  adminLabel.textContent = adminLoad;
  tokenLabel.textContent = token;
  pixLabel.textContent = pix || "Não Cadastrado";
  pixTypeLabel.textContent = pixType || "Não Selecionado";
  for (let i = 0; i < services.length; i++) {
    const service = services[i];
    var trLine = document.createElement("tr");
    var tdElementService = document.createElement("td");
    var tdElementServiceQtdeContr = document.createElement("td");
    var tdElementServiceQtdePaga = document.createElement("td");
    var tdElementServiceTotalPago = document.createElement("td");
    var tdElementServicePreco = document.createElement("td");
    var tdElementServiceStatus = document.createElement("td");

    tdElementService.textContent = service.name;
    tdElementServiceQtdeContr.textContent = service.qtde;
    tdElementServiceQtdePaga.textContent = service.pago;
    tdElementServiceTotalPago.textContent = service.pago * service.preco;
    tdElementServicePreco.textContent = service.preco;
    tdElementServiceStatus.textContent = service.status;

    trLine.appendChild(tdElementService);
    trLine.appendChild(tdElementServiceQtdeContr);
    trLine.appendChild(tdElementServiceQtdePaga);
    trLine.appendChild(tdElementServiceTotalPago);
    trLine.appendChild(tdElementServicePreco);
    trLine.appendChild(tdElementServiceStatus);

    tabelaServices.appendChild(trLine);
  }
}
renderizarDetalhes();

function conversorSimEnao(value) {
  if (value) {
    return "✔Esta conta esta autorizada como administrador";
  }
  return "⚠Esta conta não tem acessoa administrativo!";
}

function reloadDataUser() {
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const payloadLogin = {
    usuario: dataUser.user,
    senha: dataUser.senha,
  };
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: "snve072509ç$",
    },
    body: JSON.stringify(payloadLogin),
  };
  autoLoginMessage(
    dataUser.user + " está recarregando seus dados via login automático!"
  );
  fetch("https://pingobras-sg.glitch.me/login", options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Erro na solicitação de recarregar dados do usuario, Contate o administrador ou PINGOBRAS S.A"
        );
      }
    })
    .then((data) => {
      console.log("DATA RESPONSE: ");
      console.log(data);
      const newDataUser = {
        nome: data.nomeCad,
        user: data.userCad,
        senha: data.senhaCad,
        saldo: data.saldoCad,
        coinsVR: data.coinsVirtuais,
        sonhos: data.sonhos,
        PerfilIMG: data.PerfilIMG,
        Token: data.token,
        UserBGCad: data.UserBGCad,
        admin: data.admin,
        pixType: data.pixType,
        pix: data.pixKey,
        services: data.services,
      };
      const newDataUserJson = JSON.stringify(newDataUser);
      localStorage.setItem("dataUser", newDataUserJson);
    })
    .catch((error) => errors(error));
}

function errors(error) {
  console.debug(error);
  alert(error);
}

function autoLoginMessage(msg) {
  const url = "https://pingobras-sg.glitch.me/api/pingobras/mensagem";
  const payload = {
    titulo: "AUTOLOGIN",
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
