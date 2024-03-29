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
      return response.text()
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
  for (let i = 0; i < data.length; i++) {
    const edital = data[i];
    const editais = edital.edital;
    const descricao = edital.descricao;
    const dataDeInicio = edital.dataDeInicio;
    const dataDeTermino = edital.dataDeTermino;
    const status = edital.status;
    const linkFechado = edital.link;

    if (status == "Fechado" ||status == "Concluido") {
      var trLine = document.createElement("tr");
      var aElement = document.createElement("a");
      var tdElementEditais = document.createElement("td");
      var tdElementDescricao = document.createElement("td");
      var tdElementDataIni = document.createElement("td");
      var tdElementDataTerm = document.createElement("td");
      var tdElementStatus = document.createElement("td");
      var tdElementAcoes = document.createElement("td");

      aElement.innerHTML = "Ver";
      aElement.href = linkFechado;

      tdElementEditais.innerHTML = editais;
      tdElementDescricao.innerHTML = descricao;
      tdElementDataIni.innerHTML = dataDeInicio;
      tdElementDataTerm.innerHTML = dataDeTermino;
      tdElementStatus.innerHTML = status;
      tdElementAcoes.classList.add("acoes");
      tdElementAcoes.appendChild(aElement);

      trLine.appendChild(tdElementEditais);
      trLine.appendChild(tdElementDescricao);
      trLine.appendChild(tdElementDataIni);
      trLine.appendChild(tdElementDataTerm);
      trLine.appendChild(tdElementStatus);
      trLine.appendChild(tdElementAcoes);

      tabela.appendChild(trLine);
    }
  }
}
