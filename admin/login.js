const form = document.getElementById("form");
const msgError = document.getElementById("msgError");
const msgSuccess = document.getElementById("msgSuccess");
const date = new Date();
const day = date.getDate();
const sep = ",";
const path = "login";
const url = "https://pingobras-sg.glitch.me/" + path;
const bypasstokenJS = {
  bypass: 1695241900 + day,
  bypass2: 19264095713 + day,
};
const bypasstoken = JSON.stringify(bypasstokenJS);

form.addEventListener("click", stopDefAction, false);

function stopDefAction(evt) {
  evt.preventDefault();
}

function getData() {
  const inpSenha = document.getElementById("senha");
  const inpUsuario = document.getElementById("usuario");
  const payloadLogin = {
    usuario: inpUsuario.value,
    senha: inpSenha.value,
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

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro na solicitação, URL inválida ou fetch inválido");
        return response.text()
      }
    })
    .then((data) => {
      console.log("DATA RESPONSE: ");
      console.log(data);
      autenticar(data);
    })
    .catch((error) => errosLogin(error));
}

function autenticar(userLogado) {
  const clientID = Math.random().toString(9).substr(16);
  const mathRandom = Math.random().toString(16).substr(2);
  let token = mathRandom + mathRandom + "ValidDB:" + clientID;

  localStorage.setItem("bypass", bypasstoken);
  localStorage.setItem("token", token);

  if (userLogado.admin) {
    msgError.setAttribute("style", "display: none");
    msgSuccess.innerHTML = "Bem Vindo Administrador...";
    msgSuccess.setAttribute("style", "display: block");

    setTimeout(redirect("admin"), 7000);
  } else {
    msgError.setAttribute("style", "display: none");
    msgSuccess.innerHTML = "Validando acesso...";
    msgSuccess.setAttribute("style", "display: block");
    const dataUser = {
      nome: userLogado.nomeCad,
      user: userLogado.userCad,
      senha: userLogado.senhaCad,
      saldo: userLogado.saldoCad,
      PerfilIMG: userLogado.PerfilIMG,
      Token: userLogado.token,
      UserBGCad: userLogado.UserBGCad,
      admin: userLogado.admin
    };
    const dataUserJson = JSON.stringify(dataUser);
    localStorage.setItem("dataUser", dataUserJson);

    setTimeout(redirect("user"), 7000);
  }
}
function redirect(type) {
  if (type == "user") {
    window.location.href = "/user";
  } else {
    window.location.href = "/admin";
  }
}

function errosLogin(error) {
  console.debug(error);
  msgError.setAttribute("style", "display: block");
  msgError.innerHTML = "Usuário ou Senha Incorretos";
  msgSuccess.setAttribute("style", "display: none");
}
