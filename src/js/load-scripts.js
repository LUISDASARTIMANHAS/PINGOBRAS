function importJs() {
  const autoscripts = document.querySelector("autoscripts");
  const fonte = "https://pingobras.glitch.me/src/js/"
  const srcs = [
    "main.js",
    "network.js",
    "copyright.js",
    "autentication.js",
    "functions.js",
    "time.js",
    "alterar-tema.js"
  ]


  for (let i = 0; i < srcs.length; i++) {
    const src = srcs[i]
    const link = fonte + src + ".js"
    var newScript = document.createElement('script');

    newScript.setAttribute('src', link);
    autoscripts.appendChild(newScript)

    console.log(" Novo Script: " + link)
  }
}
importJs();