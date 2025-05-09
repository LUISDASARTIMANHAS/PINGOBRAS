document.getElementById("solicitacao-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const canal = document.getElementById("canal").value;
    const inscritos = parseInt(document.getElementById("inscritos").value);
    const visualizacoes = parseInt(document.getElementById("visualizacoes").value);
    const idade = parseFloat(document.getElementById("idade").value);
    const mensagem = document.getElementById("mensagem");

    if (!canal.includes("youtube.com")) {
        mensagem.innerText = "❌ Insira um link válido do YouTube!";
        return;
    }

    if (inscritos < 1000 || visualizacoes < 400 || idade < 1.5) {
        mensagem.innerText = "❌ Você não atende aos requisitos mínimos!";
    } else {
        mensagem.innerText = "✅ Solicitação enviada! Aguarde a equipe revisar.";
    }
});
