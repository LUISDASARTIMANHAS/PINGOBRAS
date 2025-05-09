window.addEventListener("load", () => {
  const form = document.getElementById("formHospedagem");
  const ramInput = document.getElementById("ram");
  const ramDisplay = document.getElementById("ramDisplay");
  const btnSubmit = document.getElementById("sendBot");
  const statusSend = document.getElementById("statusSend");
  const maxSizeMb = 128;

  // Atualiza visualmente o valor da RAM
  ramInput.addEventListener("input", () => {
    ramDisplay.textContent = `${ramInput.value} MB`;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarDados();
  });

  function validarDados() {
    const token = form.token.value.trim();
    const appid = form.appid.value.trim();
    const webhookLogs = form.webhookLogs.value.trim();
    const ram = form.ram.value;
    const fileStart = form.fileStart.value;
    const arquivo = document.getElementById("arquivo").files[0];

    // Validações
    if (!token || !appid || !arquivo || !ram || !fileStart || webhookLogs) {
      return alert("Preencha todos os campos e selecione o arquivo.");
    }

    if (ram > 100) {
      return alert("A ram não pode ultrapassar 100mb.");
    }

    if (arquivo.size > 1024 * 1024 * maxSizeMb) {
      return alert("O arquivo não pode ultrapassar 512mb.");
    }

    // Adicionando os dados ao FormData
    const formData = new FormData();
    formData.append("token", token);
    formData.append("appid", appid);
    formData.append("webhookLogs", webhookLogs);
    formData.append("ram", ram);
    formData.append("fileStart", fileStart);
    formData.append("file", arquivo);

    // Envia os dados usando a função sendData
    sendData(formData);
  }

  async function sendData(formData) {
    const url = `https://pingobras-sg.glitch.me/api/host/bots/files`;
    const date = new Date();
    const id = Math.floor(Math.random() * 20242002);

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        key: date.getUTCHours() * date.getFullYear() * id,
        id: id,
        authorization: getAuthorizationHeader(),
        "x-disable-cache": true,
      },
      body: formData, // Aqui usamos o FormData diretamente
    };

    toggleHidden(btnSubmit);
    toggleHidden(statusSend);
    await fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.text(); // Alterei para .text() pois não estamos enviando JSON
        } else {
          return response.text().then((errorText) => {
            const errorMessage = `Statuscode: ${response.status} - ${errorText}`;
            throw new Error(errorMessage);
          });
        }
      })
      .then((resultText) => {
        console.log("Resposta do servidor:", resultText);
        alert("Bot enviado com sucesso!");
        window.location.href = "/host/bots/status";
      })
      .catch((error) => {
        console.error(error);
        alert("Erro na requisição: " + error.message);
        toggleHidden(btnSubmit);
        toggleHidden(statusSend);
      });
  }

  function toggleHidden(element) {
    if (element.hidden) {
      element.hidden = false;
    } else {
      element.hidden = true;
    }
  }

  // Mantém o getAuthorizationHeader inalterado
  function getAuthorizationHeader() {
    const combined = "SE9TUEVEQUdFTQ==:S0hEQVlUU0FhaHc=";
    const doubleEncoded = btoa(btoa(combined));
    return `Basic ${doubleEncoded}`;
  }
});
