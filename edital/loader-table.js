const db = [
  {
    "num":"001",
    "publicacao":"11/09/2024",
    "descricao":"Contratação de Atendentes",
    "status":"aberto",
    "referencia":"2024",
    "acao":"https://forms.gle/vBc62qbwDbwLN2AE9"
  },
  {
    "num":"002",
    "publicacao":"15/09/2024",
    "descricao":"Contratação de Designers	",
    "status":"aberto",
    "referencia":"2024",
    "acao":"/https://forms.gle/FRAkLj9Hsm8mBqMg7"
  },
  {
    "num":"003",
    "publicacao":"20/09/2024",
    "descricao":"Contratação de Programador",
    "status":"fechado",
    "referencia":"2024",
    "acao":"/a.php"
  },
  {
    "num":"004",
    "publicacao":"06/09/2024",
    "descricao":"Contratação de Comunicação Empresarial	",
    "status":"fechado",
    "referencia":"2024",
    "acao":"https://docs.google.com/forms/d/e/1FAIpQLScy4ERXEVBgcYBtI3E_bL6Avg2JICePFaOfTkNdPyJz5aAuGg/viewform?embedded=true"
  },
  {
    "num":"005",
    "publicacao":"17/09/2024",
    "descricao":"Contratação de TI (Analista de Sistemas E Reparos de Servidores)	",
    "status":"fechado",
    "referencia":"2024",
    "acao":"/a.php"
  }
]

// const url = "https://pingobras-sg.glitch.me/edital";
// const options = {
//   method: "GET",
//   mode: "cors",
//   headers: {
//     "content-type": "application/json;charset=utf-8",
//     Authorization: "snve072509ç$",
//   },
// };

// fetch(url, options)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Erro na solicitação, URL inválida ou fetch inválido");
//       return response.text();
//     }
//   })
//   .then((data) => {
//     console.log("DATA RESPONSE: ");
//     console.log(data);
//     criarTabelaEdital(data);
//   })
//   .catch((error) => errosLogin(error));

function errosLogin(error) {
  console.debug(error);
}


function criarTabelaEdital(data) {
  const tabela = document.querySelector("table");
  for (let i = 0; i < data.length; i++) {
    const edital = data[i];
    const num = edital.num;
    const publicacao = edital.publicacao;
    const descricao = edital.descricao;
    const status = edital.status;
    const referencia = edital.referencia;
    const acao = edital.acao;
    
    // criação dos elementos da tabela
    const tdElementNum = document.createElement("td");
    const tdElementPublicacao = document.createElement("td");
    const tdElementDescricao = document.createElement("td");
    const tdElementStatus = document.createElement("td");
    const tdElementReferencia = document.createElement("td");
    const tdElementAcao = document.createElement("td");
    const tdElementLinkAcao = document.createElement("a");
    const line = document.createElement("tr");
    
    // configuração dos elementos da tabela
    tdElementNum.innerHTML = num;
    tdElementPublicacao.innerHTML = publicacao;
    tdElementDescricao.innerHTML = descricao;
    tdElementStatus.innerHTML = status;
    tdElementReferencia.innerHTML = referencia;
    
    // configuração do elemento de ação (ver, indisponivel, baixar)
    if(status.includes("fechado")){
      tdElementLinkAcao.innerHTML = "Indisponivel";
    tdElementLinkAcao.href = "#"
    }else{
    tdElementLinkAcao.innerHTML = "Ver";
    tdElementLinkAcao.href = acao
    }
    tdElementAcao.appendChild(tdElementLinkAcao);
    
    line.appendChild(tdElementNum);
    line.appendChild(tdElementPublicacao);
    line.appendChild(tdElementDescricao);
    line.appendChild(tdElementStatus);
    line.appendChild(tdElementReferencia);
    line.appendChild(tdElementAcao);
    tabela.appendChild(line);
  }
}

criarTabelaEdital(db);