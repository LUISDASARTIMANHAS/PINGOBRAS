const navgationInfo = document.querySelector("nav");
const userInfoElement = document.createElement("user-info");
const imgElement = document.createElement("img");
const divElement = document.createElement("div");
const pElementUser = document.createElement("p");
const pElementSaldo = document.createElement("p");
const pElementSonhos = document.createElement("p");
const pElementCoins = document.createElement("p");
const jsElementUser = document.createElement("js");
const jsElementSaldo = document.createElement("js");
const jsElementSonhos = document.createElement("js");
const jsElementCoins = document.createElement("js");
const jsElementAdmin = document.createElement("js");


// img presets
imgElement.alt = "Foto de Perfil"
imgElement.id = "perfilIcon"
imgElement.src = "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/icon-4399701_960_720.png?v=1687048218541"

// js presets
jsElementUser.id = "logado"
jsElementSaldo.id = "saldo"
jsElementCoins.id = "coins"
jsElementSonhos.id = "sonhos"
jsElementAdmin.id = "labelAdmin"

// P presets
pElementUser.innerHTML = "Usuário: "
pElementUser.appendChild(jsElementUser)
pElementSaldo.innerHTML = "Saldo: R$ "
pElementSaldo.appendChild(jsElementSaldo)
pElementCoins.innerHTML = "VirtualCoins(Moedas Virtuais): "
pElementCoins.appendChild(jsElementCoins)
pElementSonhos.innerHTML = "Sonhos: "
pElementSonhos.appendChild(jsElementSonhos)


divElement.appendChild(pElementUser)
divElement.appendChild(pElementSaldo)
divElement.appendChild(pElementSonhos)
divElement.appendChild(pElementCoins)

userInfoElement.appendChild(imgElement)
userInfoElement.appendChild(divElement)

navgationInfo.appendChild(userInfoElement);