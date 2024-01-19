const tabela = document.querySelector("tbody");
const url = "https://pingobras-sg.glitch.me/edital";
const options = {
  method: "GET",
  mode: "cors",
  headers: {
    "content-type": "application/json;charset=utf-8",
    Authorization: "snve072509ç$",
  },
};

fetch(url, options)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Erro na solicitação, URL inválida ou fetch inválido");
      return response.text();
    }
  })
  .then((data) => {
    console.log("DATA RESPONSE: ");
    console.log(data);
    criarTabelaEdital(data);
  })
  .catch((error) => errosLogin(error));

function errosLogin(error) {
  console.debug(error);
}

function criarTabelaEdital(data) {
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const userLoad = dataUser.user;
  for (let i = 0; i < data.length; i++) {
    const edital = data[i];
    const editais = edital.edital;
    const descricao = edital.descricao;
    const dataDeInicio = edital.dataDeInicio;
    const dataDeTermino = edital.dataDeTermino;
    const status = edital.status;
    const inscritos = edital.inscritos;
    const inscrito = pesqInscrito(inscritos,userLoad)
    console.log(inscritos);

    if (status == "Aberto" || status == "Fechado") {
      var trLine = document.createElement("tr");
      var aElement = document.createElement("a");
      var tdElementEditais = document.createElement("td");
      var tdElementDescricao = document.createElement("td");
      var tdElementDataIni = document.createElement("td");
      var tdElementDataTerm = document.createElement("td");
      var tdElementStatus = document.createElement("td");
      var tdElementInscricoes = document.createElement("td");
      var tdElementAcoes = document.createElement("td");

      if ((status == "Aberto" )&& (inscrito == -1)) {
        aElement.innerHTML = "Inscrever Se";
        aElement.setAttribute("onclick", `inscreverSe("${editais}")`);
        aElement.href = "#";
      }else if(inscrito){
        aElement.innerHTML = "Já Inscrito";
        aElement.href = "#";
      } else {
        aElement.innerHTML = "Ver";
        aElement.href = "edital/results.html";
      }
      tdElementEditais.innerHTML = editais;
      tdElementDescricao.innerHTML = descricao;
      tdElementDescricao.classList.add("info");
      tdElementDataIni.innerHTML = dataDeInicio;
      tdElementDataTerm.innerHTML = dataDeTermino;
      tdElementStatus.innerHTML = status;
      tdElementInscricoes.innerHTML = `[${inscritos.length}]`;
      tdElementAcoes.classList.add("acoes");
      tdElementAcoes.appendChild(aElement);

      trLine.appendChild(tdElementEditais);
      trLine.appendChild(tdElementDescricao);
      trLine.appendChild(tdElementDataIni);
      trLine.appendChild(tdElementDataTerm);
      trLine.appendChild(tdElementStatus);
      trLine.appendChild(tdElementInscricoes);
      trLine.appendChild(tdElementAcoes);

      tabela.appendChild(trLine);
    }
  }
}

function pesqInscrito(data, user) {
  for (let i = 0; i < data.length; i++) {
    const inscrito = data[i];

    if (inscrito == user) {
      return inscrito;
    }
  }
  return -1
}
