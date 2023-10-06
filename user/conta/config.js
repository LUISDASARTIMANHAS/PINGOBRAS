const form = document.getElementById("form");
const dataUserConfig = JSON.parse(localStorage.getItem("dataUser"));
const novaSenha = document.getElementById("senha");
const novoUsuario = document.getElementById("user");
const novaImgPerfil = document.getElementById("avatar");
const novoBgColor = document.getElementById("userBG");
const previewBG = document.getElementById("previewBG");

form.addEventListener("click", stopDefAction, false);
novoBgColor.addEventListener("keyup", preview);

function stopDefAction(evt) {
  evt.preventDefault();
}
// banco de dados
var userLoad = dataUserConfig.user;
var senhaLoad = dataUserConfig.senha;
var imgLoad = dataUserConfig.PerfilIMG;
var backgroundLoad = dataUserConfig.UserBGCad;

novaSenha.value = senhaLoad;
novoUsuario.value = userLoad;
novaImgPerfil.value = imgLoad;
novoBgColor.value = backgroundLoad;
previewBG.style.background = backgroundLoad;

function preview() {
  previewBG.style.background = novoBgColor.value;
}

function atualizar() {
  const url = "https://pingobras-sg.glitch.me/alterar=dados";
  const novaSenha = document.getElementById("senha");
  const novoUsuario = document.getElementById("user");
  const novaImgPerfil = document.getElementById("avatar");
  const novoBgColor = document.getElementById("userBG");
  const payloadAtualizar = {
    usuario: userLoad,
    senha: senhaLoad,
    novoUsuario: novoUsuario.value,
    novaSenha: novaSenha.value,
    PerfilIMG: novaImgPerfil.value,
    UserBGCad: novoBgColor.value,
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
