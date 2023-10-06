const autoscriptsUser = document.querySelector("autoscriptsuser");
const fonteUser = "https://pingobras.glitch.me/user/"
const srcsUser = [
  "loader-userinfo",
  "auth",
  "script",
  "loader"
]


for(let i = 0; i < srcsUser.length; i++){
var newScriptUser = document.createElement('script');
  
newScriptUser.setAttribute('src',fonteUser+srcsUser[i]+".js");
autoscriptsUser.appendChild(newScriptUser)
  
console.log(" Novo Script Num: " + srcsUser[i])
}
