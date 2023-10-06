setInterval(loaderUserData, 5000);

function loaderUserData() {
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const bodyLoad = document.querySelector("body");
  const labelSaldo = document.getElementById("saldo");
  const labelSonhos = document.getElementById("sonhos");
  const labelCoins = document.getElementById("coins");
  const labelPerfilIcon = document.getElementById("perfilIcon");
  const labellogado = document.getElementById("logado");
  const labelAdmin = document.getElementById("labelAdmin");
  const labelNavegador = document.getElementById("navegador");
  var elements = document.querySelectorAll("[admin]");

  // banco de dados
  const nomeLoad = dataUser.nomeCad;
  const userLoad = dataUser.user;
  const senhaLoad = dataUser.senhaCad;
  const saldoLoad = dataUser.saldo;
  const coinsLoad = dataUser.coinsVR;
  const sonhosLoad = dataUser.sonhos;
  const imgLoad = dataUser.PerfilIMG;
  const backgroundLoad = dataUser.UserBGCad;
  const tokenLoad = dataUser.Token;
  const admin = dataUser.admin;
  const adminLoad = conversorSimEnao(admin);
  const navg = navigator.appCodeName;

  console.log("Carregando dados....");
  //account Setings
  if (labelSaldo) {
    labelSaldo.innerHTML = saldoLoad + ",00";
  }
  if (labelCoins) {
    labelCoins.innerHTML = coinsLoad + " (Conversão p/ sonhos: " + coinsLoad/1.6 +")";;
  }
  if (labelSonhos) {
    labelSonhos.innerHTML = sonhosLoad||0
  }
  if (labellogado) {
    labellogado.innerHTML = userLoad + " Bem Vindo de Volta!";
  }
  if (labelAdmin) {
    labelAdmin.innerHTML = adminLoad;
  }
  if (backgroundLoad) {
    bodyLoad.style.background = backgroundLoad;
  } else {
    bodyLoad.style.background = "#333333";
  }
  if (imgLoad) {
    labelPerfilIcon.src = imgLoad;
  } else {
    labelPerfilIcon.src =
      "https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png";
  }
  if (labelNavegador) {
    labelNavegador.innerHTML = navg;
  }
  elements.forEach(function (elemento) {ativarElementosAdm(elemento)});
  function ativarElementosAdm(elemento) {
    if (admin == true) {
      elemento.style.display = "";
      elemento.hidden = false
      console.log("ativando elementos do administrador!");
    } else {
      elemento.hidden = true
    }
  }
}
loaderUserData();

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("dataUser");
  window.location.href = "https://pingobras.glitch.me";
  alert("Usuario Desconectado!");
}
function conversorSimEnao(value) {
  if (value) {
    return "✔Esta conta esta autorizada como administrador";
  }
  return "⚠Esta conta não tem acessoa administrativo!";
}
