(() => {
  const body = document.querySelector("body");
  const offline = true;
  const authDomain = window.location.hostname == "pingobras.glitch.me";

  if (offline && authDomain) {
    body.hidden = true;

    if (body) {
      body.style.display = "none";
    }

    setTimeout(() => {
      window.location.href = "/sys/manutencao.html";
    }, 5000);
  }
})();
