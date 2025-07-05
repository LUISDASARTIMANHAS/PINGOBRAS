const scriptsHost = document.querySelector("host");
const srcsHost = [
  "https://pingobras-host-bots.onrender.com/",
  "https://pingobras-sg.onrender.com/"
]

for(let i = 0; i < srcsHost.length; i++){
var newScriptHost = document.createElement('script');
  
newScriptHost.setAttribute('src',srcsHost[i]);
scriptsHost.appendChild(newScriptHost)
  
console.log(`%c [SISTEMA]: Novo host: ${srcsHost[i]}`,"color: #00ccff")
}
