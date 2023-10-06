const tabelaCorpo = document.getElementById("tabelaCorpo");
const tabelaTitle = document.getElementById("tabelaTitle");
const txtTitle = [
  "Matéria",
  "1 Período",
  "2 Período",
  "3 Período",
  "4 Período",
  "5 Período",
  "6 Período",
  "7 Período",
  "8 Período",
];

const materia = [
  "Metodologia da Pesquisa BSI", 
  "Programação I", 
  "Lógica", 
  "Organização e Arquitetura de Computadores ", 
  "Fundamentos de Sistemas de Informação", 
  "Comunicação Empresarial",
];

const DPeriodo = ["0/100", "0/100", "0/100", "0/100", "0/100", "0/100", "0/100", "0/100"];

function criarTabelaTitulo(title) {
  const trTitle = document.createElement("tr");

  tabelaTitle.appendChild(trTitle);
  for (let i = 0; i < title.length; i++) {
    var th = document.createElement("th");

    th.innerHTML = title[i];
    trTitle.appendChild(th);
  }
}

function criarTablelaCorpo(txtCorpo, linha) {
  const trCorpo = document.createElement("tr");
  var labelMateria = document.createElement("td");

  trCorpo.appendChild(labelMateria);
  labelMateria.innerHTML = materia[linha-1];
  tabelaCorpo.appendChild(trCorpo);

  for (let i = 0; i < txtCorpo.length; i++) {
    let coluna = i+1
    let id = "coluna-" + coluna + "-" + "linha-" + linha;
    var td = document.createElement("td");

    td.innerHTML = txtCorpo[i];
    td.id = id;
    trCorpo.appendChild(td);
  }
}

criarTabelaTitulo(txtTitle);
criarTablelaCorpo(DPeriodo, "1");
criarTablelaCorpo(DPeriodo, "2");
criarTablelaCorpo(DPeriodo, "3");
criarTablelaCorpo(DPeriodo, "4");
criarTablelaCorpo(DPeriodo, "5");
criarTablelaCorpo(DPeriodo, "6");
