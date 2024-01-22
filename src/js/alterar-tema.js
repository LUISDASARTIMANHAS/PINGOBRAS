const btnAltTema = document.getElementById("botaoAlterarTema");
const body = document.querySelector("body");
const temaImg = document.getElementById("tema-Img");
const d = new Date();
const horas = d.getHours();
if(btnAltTema){
btnAltTema.addEventListener("click", alterarTema);
}

if(horas > 18 ||horas < 6 ){
  alterarTema()
}


function alterarTema() {
    const modoEscuroAtv = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");

    if (modoEscuroAtv) {
        temaImg.src = "https://cdn.glitch.global/50c5a511-f2d0-484d-abe3-da8e0dab7a8e/sun.png?v=1683680957822";
    } else {
        temaImg.src = "https://cdn.glitch.global/50c5a511-f2d0-484d-abe3-da8e0dab7a8e/moon.png?v=1683680964166";
    }
}