document.getElementById('fetchStatsBtn').addEventListener('click', function() {
    const channelId = document.getElementById('channelId').value;

    if (!channelId) {
        alert("Por favor, insira um ID de canal.");
        return;
    }

    const url = `https://pingobras-sg.glitch.me/api/youtube/search?id=${channelId}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'authorization': 'APIKey20231603'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.items && data.items.length > 0) {
            const channel = data.items[0];
            const stats = channel.statistics;
            const snippet = channel.snippet;
            const title = snippet.title || "Nome não disponível";
            const description = snippet.description || "Descrição não disponível";
            const customUrl = snippet.customUrl || "URL personalizada não disponível";
            const publishedAt = new Date(snippet.publishedAt).toLocaleDateString() || "Data não disponível";
            const thumbnails = snippet.thumbnails.high.url || "";

            document.getElementById('result').innerHTML = `
                <div class="info">
                    <img src="${thumbnails}" alt="Thumbnail do Canal" class="thumbnail">
                </div>
                <h2>${title}</h2>
                <p><strong>ID do Canal:</strong> ${channelId}</p>
                <p><strong>Descrição:</strong> ${description}</p>
                <p><strong>URL Personalizada:</strong> <a href="https://www.youtube.com/${customUrl}" target="_blank">${customUrl}</a></p>
                <p><strong>Data de Criação:</strong> ${publishedAt}</p>
                <p><strong>Visualizações:</strong> ${stats.viewCount}</p>
                <p><strong>Inscritos:</strong> ${stats.subscriberCount}</p>
                <p><strong>Total de Vídeos:</strong> ${stats.videoCount}</p>
            `;
        } else {
            document.getElementById('result').innerHTML = "<p>Nenhum canal encontrado para este ID.</p>";
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('result').innerHTML = "<p>Ocorreu um erro ao buscar as estatísticas.</p>";
    });
});

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    console.log('This page was restored from the bfcache.');
  } else {
    console.log('This page was loaded normally.');
  }
});
window.addEventListener('pagehide', (event) => {
  if (event.persisted) {
    console.log('This page *might* be entering the bfcache.');
  } else {
    console.log('This page will unload normally and be discarded.');
  }
});