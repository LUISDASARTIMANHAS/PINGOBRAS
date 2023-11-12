const tabela = document.querySelector("tbody");
const url = "https://pingobras-sg.glitch.me/api/thegame/hackers/invasions";
const options = {
    method: "GET",
    mode: "cors",
    headers: {
        "content-type": "application/json;charset=utf-8",
        Authorization: "snve072509ç$",
    }
};

fetch(url, options)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return response.text();
        }
    })
    .then((data) => {
        console.log("DATA RESPONSE: ");
        console.log(data);
        criarTabela(data);
    })
    .catch((error) => errosLogin(error));


function errosLogin(error) {
    console.debug(error);
}


function criarTabela(database) {
    for (let i = 0; i < database.length; i++) {
        const invasion = database[i];
        const base = invasion.base;
        const bitcoins = invasion.bitcoins;
        const money = invasion.money;
        const reputacao = invasion.reputacao;
        const pais = invasion.pais;
        const replayLink = invasion.replayLink;

            var trLine = document.createElement("tr");
            var aElement = document.createElement("a");
            var tdElementBase = document.createElement("td");
            var tdElementBiticoins = document.createElement("td");
            var tdElementMoney = document.createElement("td");
            var tdElementReputacao = document.createElement("td");
            var tdElementPais = document.createElement("td");
            var tdElementAcoes = document.createElement("td");

            aElement.innerHTML = "View Replay";
            aElement.href = replayLink;

            tdElementBase.innerHTML = base;
            tdElementBiticoins.innerHTML = bitcoins;
            tdElementMoney.innerHTML = money;
            tdElementReputacao.innerHTML = reputacao;
            tdElementPais.innerHTML = pais;
            tdElementAcoes.classList.add("acoes");
            tdElementAcoes.appendChild(aElement);

            trLine.appendChild(tdElementBase);
            trLine.appendChild(tdElementBiticoins);
            trLine.appendChild(tdElementMoney);
            trLine.appendChild(tdElementReputacao);
            trLine.appendChild(tdElementPais);
            trLine.appendChild(tdElementAcoes);

            tabela.appendChild(trLine);
    }
}