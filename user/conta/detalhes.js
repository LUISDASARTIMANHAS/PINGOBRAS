function renderizarDetalhes() {
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const tela = document.querySelector("tela");
  const userDetalhesElement = document.createElement("user-detalhes");
  const imgElement = document.createElement("img");
  const divElement = document.createElement("div");
  const pElementUser = document.createElement("p");
  const pElementNome = document.createElement("p");
  const pElementNavgator = document.createElement("p");
  const pElementSaldo = document.createElement("p");
  const pElementSonhos = document.createElement("p");
  const pElementCoins = document.createElement("p");
  const pElementAdmin = document.createElement("p");
  const jsElementUser = document.createElement("js");
  const jsElementNome = document.createElement("js");
  const jsElementSaldo = document.createElement("js");
  const jsElementSonhos = document.createElement("js");
  const jsElementCoins = document.createElement("js");
  const jsElementAdmin = document.createElement("js");

  // banco de dados
  console.log("Carregando dados....");
  const nomeLoad = dataUser.nome;
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


  // img presets
  imgElement.alt = "Foto de Perfil";
  if (imgLoad) {
    imgElement.src = imgLoad;
  } else {
    imgElement.src =
    "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/icon-4399701_960_720.png?v=1687048218541";
  }
  

  // js presets
  jsElementNome.textContent = nomeLoad;
  jsElementUser.textContent = userLoad;
  jsElementSaldo.textContent = saldoLoad;
  jsElementCoins.textContent = coinsLoad + " (Conversão p/ sonhos: " + coinsLoad / 1.6 + ")";;
  jsElementSonhos.textContent = sonhosLoad || 0;
  jsElementAdmin.textContent = adminLoad;
  
  // P presets
  pElementNome.innerHTML = "Nome Completo: ";
  pElementNome.appendChild(jsElementNome);
  pElementUser.innerHTML = "Usuário: ";
  pElementUser.appendChild(jsElementUser);
  pElementNavgator.innerHTML = "Navegador: " + navigator.appCodeName;
  pElementSaldo.innerHTML = "Saldo: R$ ";
  pElementSaldo.appendChild(jsElementSaldo);
  pElementCoins.innerHTML = "VirtualCoins(Moedas Virtuais): ";
  pElementCoins.appendChild(jsElementCoins);
  pElementSonhos.innerHTML = "Sonhos: ";
  pElementSonhos.appendChild(jsElementSonhos);
  pElementAdmin.innerHTML = "Conta De Adiministrador: ";
  pElementAdmin.appendChild(jsElementAdmin);

  divElement.appendChild(pElementNome);
  divElement.appendChild(pElementUser);
  divElement.appendChild(pElementNavgator);
  divElement.appendChild(pElementSaldo);
  divElement.appendChild(pElementSonhos);
  divElement.appendChild(pElementCoins);
  divElement.appendChild(pElementAdmin);

  userDetalhesElement.appendChild(imgElement);
  userDetalhesElement.appendChild(divElement);

  tela.appendChild(userDetalhesElement);
}
renderizarDetalhes();

function conversorSimEnao(value) {
  if (value) {
    return "✔Esta conta esta autorizada como administrador";
  }
  return "⚠Esta conta não tem acessoa administrativo!";
}