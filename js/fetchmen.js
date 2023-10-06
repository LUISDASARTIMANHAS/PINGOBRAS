const statusLabel = document.getElementById("status");
const errorLabel = document.getElementById("error");
const Results = document.getElementById("Results");
const input = document.getElementById("inputTerminal");
const basePrompt = "C:\\WINDOWS\\system32>";
const options = {
  method: "GET",
  mode: "cors",
  headers: {
    "content-type": "application/json;charset=utf-8",
  },
};
const pingobrasSG = {
  method: "GET",
  mode: "cors",
  headers: {
    "content-type": "application/json;charset=utf-8",
    "Authorization": "snve072509ç$"
  },
};

printTerminal("Terminal simulado. Digite o link para obter e pressione Enter.");
printTerminal("Exemplo: 198.168.1.1");
printTerminal("Auto Request: pingobras-sg.glitch.me/postagens");
autoFetch("pingobras-sg.glitch.me/postagens", pingobrasSG);
printTerminal("Auto Request: pingobras-sg.glitch.me/comentarios");
autoFetch("pingobras-sg.glitch.me/comentarios", pingobrasSG);

function Requisitar() {
  const url = "https://" + input.value;
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        statusLabel.innerHTML = "Status: " + response.status;
        errorLabel.innerHTML = response.ok;
        return response.json();
      } else {
        if (response.status == 0) {
          throw new Error(
            "Erro de CORS: Não foi possível realizar a solicitação. Verifique se o servidor permite solicitações de outros domínios."
          );
        } else {
          throw new Error(
            "Erro na solicitação, URL invalido ou fetch invalido"
          );
        }
        return response.text()
      }
    })
    .then((data) => {
      console.log("DATA RESPONSE: ");
      console.log(data);
      resposta(data);
    })
    .catch((error) => erros(error));
}
function autoFetch(url, options) {
  fetch("https://" + url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro na solicitação, URL invalido ou fetch invalido");
      }
    })
    .then((data) => {
      resposta(data);
    })
    .catch((error) => console.error(error));
}
function resposta(res) {
  const data = JSON.stringify(res, null, 2);
  console.log(data);
  printTerminal(data);
}

function erros(error) {
  console.log(error);
  printTerminal("Um erro ocorreu durante a transferência do arquivo.");
  statusLabel.innerHTML = "blocked by CORS policy";
  errorLabel.innerHTML = error;
}

function printTerminal(text) {
  Results.innerHTML += basePrompt + text + "\n";
  Results.scrollTop = Results.scrollHeight;
}

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const command = input.value;
    printTerminal(command);
    Requisitar();
    input.value = "";
  }
});
