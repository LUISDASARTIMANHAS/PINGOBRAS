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


for(let i = 0; i < srcs.length; i++){
var newScript = document.createElement('script');
  
newScript.setAttribute('src',fonte+srcs[i]);
autoscripts.appendChild(newScript)
  
console.log(" Novo Script Num: " + srcs[i])
}
