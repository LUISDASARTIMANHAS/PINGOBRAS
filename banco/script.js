const perfilNome = document.getElementById("perfilNome");
const perfilSaldo = document.getElementById("perfilSaldo");
const perfilBonus = document.getElementById("perfilBonus");
const perfilJuros = document.getElementById("perfilJuros");
const perfilemitido = document.getElementById("perfilEmitido");
const perfilPayData = document.getElementById("perfilPayData");
const perfilCod = document.getElementById("perfilCod");
const perfilAtividades = document.getElementById("perfilAtividades");
const perfilImg = document.getElementById("perfilImg");
const alert = document.getElementById("alertProc");
const inputbuscar = document.getElementById("inputbuscar");
const newLine = "<br>";
let dataBase;
getData();

inputbuscar.addEventListener("keyup", procurarPerfil);

function getData() {
  const url = "https://pingobras-sg.glitch.me/dividendos";
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Authorization": "snve072509ç$"
    },
  };

  return fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro na solicitação, URL inválida ou fetch inválido. type: " + Error);
         return response.text()
      }
    })
    .then((data) => {
      console.log("DATA RESPONSE: ");
      console.log(data);
      dataBase = data;
    })
    .catch((error) => alert(error));
}

function procurarPerfil() {
  const inputbuscar = document.getElementById("inputbuscar").value;
  // Encontrar o perfil com base no nome
  var perfil = dataBase.find(validPerfil);
function validPerfil(perfil) {
  const perfilName = perfil.nome;
  const buscar = inputbuscar.toUpperCase();
  return perfilName.toUpperCase() == buscar;
}

  atualizar(perfil);
}


function atualizar(perfil) {
  if (perfil) {
    perfilNome.innerHTML = perfil.nome;
    perfilSaldo.innerHTML = perfil.saldo;
    perfilBonus.innerHTML = perfil.bonus;
    perfilJuros.innerHTML = perfil.juros;
    perfilemitido.innerHTML = perfil.emitido;
    perfilPayData.innerHTML = perfil.payData;
    perfilCod.innerHTML = perfil.codigo;
    perfilAtividades.innerHTML = perfil.atividades;
    perfilImg.src = perfil.img;
  } else {
    perfilNome.innerHTML = "Perfil não encontrado";
    perfilSaldo.innerHTML = "00.00";
    perfilBonus.innerHTML = "00.00";
    perfilJuros.innerHTML = "00.00";
    perfilemitido.innerHTML = "DD/MM/AAAA";
    perfilPayData.innerHTML = "DD/MM/AAAA";
    perfilCod.innerHTML = "000.000.000-00";
    perfilAtividades.innerHTML = "Sem Atividades Recentes.";
    perfilImg.src =
      "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/icon-4399701_960_720.png?v=1687048218541";
  }
}
