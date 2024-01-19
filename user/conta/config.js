const form = document.getElementById("form");
const dataUserConfig = JSON.parse(localStorage.getItem("dataUser"));
const novaSenha = document.getElementById("senha");
const novoUsuario = document.getElementById("user");
const novaImgPerfil = document.getElementById("avatar");
const novoBgColor = document.getElementById("userBG");
const previewBG = document.getElementById("previewBG");
const pixKey = document.getElementById("pixKey");
const pixType = document.getElementById("pixType");

form.addEventListener("submit", stopDefAction);
novoBgColor.addEventListener("keyup", preview);

// banco de dados
var userLoad = dataUserConfig.user;
var senhaLoad = dataUserConfig.senha;
var imgLoad = dataUserConfig.PerfilIMG;
var backgroundLoad = dataUserConfig.UserBGCad;
var pix = dataUserConfig.pix;
var services = dataUserConfig.services;
var editaisServices = services[0];
var analyticsServices = services[1];

novaSenha.value = senhaLoad;
novoUsuario.value = userLoad;
novaImgPerfil.value = imgLoad;
novoBgColor.value = backgroundLoad;
previewBG.style.background = backgroundLoad;
pixKey.value = pix

function preview() {
  previewBG.style.background = novoBgColor.value;
}

function atualizar() {
  const url = "https://pingobras-sg.glitch.me/alterar=dados";
  const novaSenha = document.getElementById("senha");
  const novoUsuario = document.getElementById("user");
  const novaImgPerfil = document.getElementById("avatar");
  const novoBgColor = document.getElementById("userBG");
  const pixKey = document.getElementById("pixKey");
  const pixType = document.getElementById("pixType");
  const payloadAtualizar = {
    usuario: userLoad,
    senha: senhaLoad,
    novoUsuario: novoUsuario.value,
    novaSenha: novaSenha.value,
    PerfilIMG: novaImgPerfil.value,
    UserBGCad: novoBgColor.value,
    pixKey: pixKey.value,
    pixType: pixType.value
  };
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: "snve072509ç$",
    },
    body: JSON.stringify(payloadAtualizar),
  };

  fetch(url, options)
    .then((response) => {
      return response.text(); 
    })
    .then((mensagem) => {
      alert(mensagem);
      localStorage.removeItem("token");
      localStorage.removeItem("dataUser");
      alert("Usuario Desconectado! Deve atualizar a seção para aplicar as novas configurações!");
      window.location.href = "https://pingobras.glitch.me/login";
    })
    .catch((error) => errosLogin(error));
}

function errosLogin(error) {
  console.debug(error);
  alert(error);
}

function stopDefAction(evt) {
  evt.preventDefault();
  atualizar();
}