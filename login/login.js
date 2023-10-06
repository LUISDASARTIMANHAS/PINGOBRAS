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

  msgError.setAttribute("style", "display: none");
    msgSuccess.innerHTML = "Aguardando Servidor....";
    msgSuccess.setAttribute("style", "display: block")
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
  
    msgError.setAttribute("style", "display: none");
    msgSuccess.innerHTML = "Validando acesso...";
    msgSuccess.setAttribute("style", "display: block");
    const dataUser = {
      nome: userLogado.nomeCad,
      user: userLogado.userCad,
      senha: userLogado.senhaCad,
      saldo: userLogado.saldoCad,
      coinsVR: userLogado.coinsVirtuais,
      sonhos: userLogado.sonhos,
      PerfilIMG: userLogado.PerfilIMG,
      Token: userLogado.token,
      UserBGCad: userLogado.UserBGCad,
      admin: userLogado.admin
    };
    const dataUserJson = JSON.stringify(dataUser);
    localStorage.setItem("dataUser", dataUserJson);

    setTimeout(window.location.href = "/user", 7000);
}


function errosLogin(error) {
  console.debug(error);
  msgError.setAttribute("style", "display: block");
  msgError.innerHTML = "Usuário ou Senha Incorretos";
  msgSuccess.setAttribute("style", "display: none");
}
