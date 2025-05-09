window.addEventListener("load", () => {
  const url = `https://pingobras-sg.glitch.me/api/host/bots/status`;
  const date = new Date();
  const id = Math.floor(Math.random() * 20242002);
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      key: date.getUTCHours() * date.getFullYear() * id,
      id: id,
      authorization: getAuthorizationHeader(),
      "x-disable-cache": true,
    },
  };
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.text().then((errorText) => {
          const errorMessage = `Statuscode: ${response.status} - ${errorText}`;
          throw new Error(errorMessage);
        });
      }
    })
    .then((data) => {
      console.log("DATA RESPONSE: ");
      console.log(data);
      carregarStatus(data);
    })
    .catch((error) => {
      console.error(error);
      alert(error);
    });

  async function carregarStatus(data) {
    const container = document.getElementById("statusContainer");

    try {
      if (!data || data.length === 0) {
        container.innerHTML = `<div class="no-bots">Nenhum bot está hospedado no momento.</div>`;
        return;
      }

      let html = `<div class="bot-status">`;
      data.forEach((bot) => {
        html += `
            <div class="bot-card">
              <h3>${bot.nome}</h3>
              <div class="usage">
                <span><strong>Status:</strong> ${bot.status}</span>
                <span><strong>RAM:</strong> ${bot.ram} MB</span>
                <span><strong>CPU:</strong> ${bot.cpu} %</span>
                <span><strong>Disco:</strong> ${bot.disk} MB</span>
              </div>
            </div>
          `;
      });
      html += `</div>`;
      container.innerHTML = html;
    } catch (e) {
      container.innerHTML = `<div class="no-bots">Erro ao carregar os dados de status.</div>`;
    }
  }
});

function getAuthorizationHeader() {
  const combined = "SE9TUEVEQUdFTQ==:S0hEQVlUU0FhaHc=";
  const doubleEncoded = btoa(btoa(combined));
  return `Basic ${doubleEncoded}`;
}
