const baseName = document.getElementById("baseName");
const biticoins = document.getElementById("biticoins");
const money = document.getElementById("money");
const urlReplay = document.getElementById("url");
const form = document.querySelector('form');


form.addEventListener('submit', event => {
    event.preventDefault();
    // actual logic, e.g. validate the form
    console.log('Validando dados...');
    validar();
});

function validar() {
    const baseNameValue = baseName.value;
    const biticoinsValue = biticoins.value;
    const moneyValue = money.value;
    const urlReplayValue = urlReplay.value;

    if (baseNameValue && biticoinsValue && moneyValue && urlReplayValue) {
        postData(baseNameValue, biticoinsValue, moneyValue, urlReplayValue);
        console.log("Enviando dados...")
    } else {
        alert("Dados Incompletos!");
    }
}

function postData(base, biticoins, money, replayLink) {
    const url = "https://pingobras-sg.glitch.me/api/thegame/hackers/invasions"
    const payload = {
        "base": base,
        "biticoins": biticoins,
        "money": money,
        "replayLink": replayLink
    }
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8",
            Authorization: "snve072509ç$",
        },
        body: JSON.stringify(payload)
    };

    fetch(url, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                // throw new Error("Erro na solicitação, URL inválida ou fetch inválido");
                return response.text()
            }
        })
        .then((data) => {
            console.log("DATA RESPONSE: ");
            console.log(data);
        })
        .catch((error) => errosEnviar(error));
}

function errosEnviar(error) {
    console.debug(error);
}