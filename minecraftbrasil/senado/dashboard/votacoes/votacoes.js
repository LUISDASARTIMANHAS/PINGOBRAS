document.addEventListener('DOMContentLoaded', function() {
    const userRole = 'Administrador'; // Exemplo: Mudar para 'Senador' ou 'Membro' conforme o login
    const resolucoesList = document.getElementById('resolucoes-list');
    const userActions = document.getElementById('user-actions');

    // Exemplo de resoluções fictícias
    const resolucoes = [
        { id: 1, descricao: 'Resolução 1 - Aprovada', grupo: 'Grupo A', estado: 'votada' },
        { id: 2, descricao: 'Resolução 2 - Em Andamento', grupo: 'Grupo B', estado: 'não votada' },
        { id: 3, descricao: 'Resolução 3 - Pendente', grupo: 'Grupo C', estado: 'não votada' }
    ];

    // Exibindo resoluções na lista
    resolucoes.forEach(resolucao => {
        const li = document.createElement('li');
        li.textContent = `${resolucao.descricao} (Grupo: ${resolucao.grupo}) - Estado: ${resolucao.estado}`;
        resolucoesList.appendChild(li);
    });

    // Ações permitidas para Administrador
    if (userRole === 'Administrador') {
        const addResolutionBtn = document.createElement('button');
        addResolutionBtn.textContent = 'Adicionar Resolução';
        addResolutionBtn.addEventListener('click', () => {
            alert('Formulário para adicionar resolução');
        });

        const removeResolutionBtn = document.createElement('button');
        removeResolutionBtn.textContent = 'Remover Resolução';
        removeResolutionBtn.addEventListener('click', () => {
            alert('Selecione uma resolução para remover');
        });

        const addToVoteBtn = document.createElement('button');
        addToVoteBtn.textContent = 'Adicionar Resolução para Votação';
        addToVoteBtn.addEventListener('click', () => {
            alert('Escolha uma resolução para adicionar à votação');
        });

        userActions.appendChild(addResolutionBtn);
        userActions.appendChild(removeResolutionBtn);
        userActions.appendChild(addToVoteBtn);
    }

    // Ações permitidas para Senador
    if (userRole === 'Senador') {
        const addResolutionBtn = document.createElement('button');
        addResolutionBtn.textContent = 'Adicionar Resolução';
        addResolutionBtn.addEventListener('click', () => {
            alert('Formulário para adicionar resolução no seu grupo');
        });

        const removeGroupResolutionBtn = document.createElement('button');
        removeGroupResolutionBtn.textContent = 'Remover Resolução do Seu Grupo';
        removeGroupResolutionBtn.addEventListener('click', () => {
            alert('Selecione uma resolução para remover do seu grupo');
        });

        userActions.appendChild(addResolutionBtn);
        userActions.appendChild(removeGroupResolutionBtn);
    }

    // Ações permitidas para Membro
    if (userRole === 'Membro') {
        const addResolutionBtn = document.createElement('button');
        addResolutionBtn.textContent = 'Adicionar Resolução no seu Grupo';
        addResolutionBtn.addEventListener('click', () => {
            alert('Formulário para adicionar resolução no seu grupo');
        });

        userActions.appendChild(addResolutionBtn);
    }
});
