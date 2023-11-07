const baseName = document.getElementById("baseName");
const bitcoins = document.getElementById("bitcoins");
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
    const bitcoinsValue = bitcoins.value;
    const moneyValue = money.value;
    const urlReplayValue = urlReplay.value;

    if (baseNameValue && bitcoinsValue && moneyValue && urlReplayValue) {
        postData(baseNameValue, bitcoinsValue, moneyValue, urlReplayValue);
        console.log("Enviando dados...")
    } else {
        alert("Dados Incompletos!");
    }
}

function postData(base, bitcoins, money, replayLink) {
    const url = "https://pingobras-sg.glitch.me/api/thegame/hackers/invasions"
    const payload = {
        "base": base,
        "bitcoins": bitcoins,
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
                return response.text();
            } else {
                // throw new Error("Erro na solicitação, URL inválida ou fetch inválido");
                return response.text();
            }
        })
        .then((data) => {
            console.log("DATA RESPONSE: ");
            console.log(data);
            alert(data);
            window.location.href = ""
        })
        .catch((error) => errosEnviar(error));
}

function errosEnviar(error) {
    console.debug(error);
    alert(error);
}