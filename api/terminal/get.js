function terminalGetData() {
  const url = "https://" + document.getElementById("url").value;
  const terminal = document.getElementById("output");
  var keyAuth = null;
  
  if (!keyAuth || keyAuth == "") {
    keyAuth = "*";
  }
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json; charset=UTF-8",
      Authorization: keyAuth,
    },
  };

  terminal.textContent += `GET ${url} \n`;
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.text();
      }else{
        return response.text().then((errorText) => {
          throw new Error("Erro ao Obter dados: " + errorText);
        });
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => onError(error));

  function onError(error) {
    terminal.textContent += `${error}\n`
  }

  function onSuccess(resposta) {
    terminal.textContent += "DATA RESPONSE: \n";
    terminal.textContent += `${resposta} \n`;
  }
}
