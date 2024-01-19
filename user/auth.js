setInterval(refreshDesconect, 2000);
const bodyAuth = document.querySelector("body");
const tokenAuth = localStorage.getItem("token");
const headAuth = document.querySelector("nav");
refreshDesconect();

function refreshDesconect() {
  if (tokenAuth && tokenAuth.length >= 20 ) {
    console.log("Sincronizando dados do usuario!");
    console.log("Usuario permanece logado via servidor");
  } else {
    localStorage.removeItem("token");
    console.warn("Usuario deslogado ou tokenAuth não disponivel");
    bodyAuth.style.display = "none";
    headAuth.style.display = "none";
    window.location.href = "https://pingobras.glitch.me/user/forbidden.html";
  }
} //Fim do Refresh desconectar

