const form = document.getElementById("editalForm");
form.addEventListener("click", stopDefAction, false);
const dataUser = JSON.parse(localStorage.getItem("dataUser"));
const byAdmin = document.getElementById("byAdmin");

function stopDefAction(evt) {
  evt.preventDefault();
}

function adcionarEdital() {
  const url = "https://pingobras-sg.glitch.me/edital/cadastrar";
  const inpTitulo = document.getElementById("titulo");
  const inpDataTermino = document.getElementById("dataTermino");
  const inpDescricao = document.getElementById("descricao");
  const userLoad = dataUser.user;
  const senhaLoad = dataUser.senha;
  const tokenLoad = dataUser.Token;
  const admin = dataUser.admin;

  byAdmin.value = userLoad;

  if (admin) {
    const payload = {
      edital: inpTitulo.value,
      dataDeTermino: inpDataTermino.value.replaceAll("-", "/"),
      descricao: inpDescricao.value,
      byAdmin: userLoad,
      inscritos: [],
    };
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json;charset=utf-8",
        Authorization: "snve072509ç$",
      },
      body: JSON.stringify(payload),
    };
    sendMessage(
      "ADICIONAR-EDITAL",
      userLoad + "está tentando adicionar um edital! Aguarde confirmação!"
    );
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          return response.text();
        }
      })
      .then((data) => {
        console.log("DATA RESPONSE: ");
        console.log(data);
        reloadDataUser();
        alert(data);
        window.location.href = "";
      })
      .catch((error) => errors(error));
  } else {
    alert("Você não e administrador!");
    alert(
      "qualquer tentativa de burlagem resultara em banimento permanete do seu IP"
    );
  }
}

function renderData() {
  const userLoad = dataUser.user;
  const tokenLoad = dataUser.Token;
  const admin = dataUser.admin;

  byAdmin.value = userLoad;
}
renderData();

function reloadDataUser() {
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
  sendMessage(
    "AUTOLOGIN",
    dataUser.user + " está recarregando seus dados via login automático!"
  );
  fetch("https://pingobras-sg.glitch.me/login", options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        sendMessage(
          "AUTOLOGIN",
          "Erro na solicitação de recarregar dados do usuario, Contate o administrador ou PINGOBRAS S.A"
        );
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
        pix: data.pixKey,
        services: data.services,
      };
      const newDataUserJson = JSON.stringify(newDataUser);
      localStorage.setItem("dataUser", newDataUser);
    })
    .catch((error) => errors(error));
}

function errors(error) {
  console.debug(error);
  alert(error);
}

function sendMessage(titulo, msg) {
  const url = "https://pingobras-sg.glitch.me/api/pingobras/mensagem";
  const payload = {
    titulo: titulo,
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
