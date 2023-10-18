function importJs() {
  const autoscripts = document.querySelector("autoscripts");
  const fonte = "https://pingobras.glitch.me/"
  const srcs = [
    "js/main.js",
    "js/network.js",
    "js/copyright.js",
    "js/autentication.js",
    "js/functions.js",
    "js/time.js",
    "js/alterar-tema.js"
  ]


  for (let i = 0; i < srcs.length; i++) {
    const src = srcs[I]
    const link = fonte + src + ".js"
    var newScript = document.createElement('script');

    newScript.setAttribute('src', link);
    autoscripts.appendChild(newScript)

    console.log(" Novo Script Num: " + link)
  }
}
importJs();