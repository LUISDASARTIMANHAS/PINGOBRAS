function login(tipo) {
    alert(`Redirecionar para login de: ${tipo}`);
    // No futuro: window.location.href = `/login-${tipo}.html`;
}

function mostrarConteudo(aba) {
    const conteudo = document.getElementById('conteudo');

    if (aba === 'resolucoes') {
        conteudo.innerHTML = `
            <h2>Resoluções</h2>
            <p>Propostas que podem alterar regras ou benefícios da comunidade.</p>
        `;
    } else if (aba === 'sancoes') {
        conteudo.innerHTML = `
            <h2>Sanções</h2>
            <p>Discussões sobre punições para membros que desrespeitarem as regras.</p>
        `;
    } else if (aba === 'debate') {
        conteudo.innerHTML = `
            <h2>Debate</h2>
            <p>Área para discussão aberta de temas e estratégias.</p>
        `;
    } else if (aba === 'analise') {
        conteudo.innerHTML = `
            <h2>Análise</h2>
            <p>Revisão de resoluções anteriores e avaliação do desempenho dos membros.</p>
        `;
    }
}
