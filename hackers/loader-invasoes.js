

function getData() {
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
                throw new Error("Erro na solicitação, URL inválida ou fetch inválido");
                return response.text();
            }
        })
        .then((data) => {
            console.log("DATA RESPONSE: ");
            console.log(data);
        })
        .catch((error) => errosLogin(error));
}

function errosLogin(error) {
    console.debug(error);
    alert(error);
}