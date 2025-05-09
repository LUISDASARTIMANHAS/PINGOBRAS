document.addEventListener('DOMContentLoaded', function() {
    const userRole = 'Administrador'; // Exemplo: Mudar para 'Senador' ou 'Membro' conforme o login
    const usuariosLink = document.getElementById('usuarios-link');
    const userRoleSpan = document.getElementById('user-role');
    const usuariosSection = document.getElementById('usuarios-section');
    const addUserButton = document.getElementById('add-user-btn');

    // Verifica se o elemento de usuários existe antes de manipular
    if (usuariosLink && userRoleSpan) {
        // Altera o texto e visibilidade da seção de Usuários
        if (userRole === 'Administrador') {
            userRoleSpan.textContent = 'Administrador';
            usuariosLink.style.display = 'block'; // Mostra a seção de usuários para administradores
            addUserButton.addEventListener('click', function() {
                alert('Formulário para adicionar um novo usuário');
            });
        } else if (userRole === 'Senador') {
            userRoleSpan.textContent = 'Senador';
            usuariosLink.style.display = 'block'; // Mostra a seção de usuários para senadores
            addUserButton.addEventListener('click', function() {
                alert('Formulário para adicionar um membro');
            });
        } else if (userRole === 'Membro') {
            userRoleSpan.textContent = 'Membro';
            if (usuariosLink) {
                usuariosLink.style.display = 'none'; // Esconde a seção de usuários para membros
            }
        }
    }

    // Exemplo de como os dados de usuários podem ser carregados (com um array fictício)
    const usuariosList = document.getElementById('usuarios-list');
    const usuarios = [
        { nome: 'Senador A', cargo: 'Senador' },
        { nome: 'Membro B', cargo: 'Membro' },
        { nome: 'Administrador C', cargo: 'Administrador' }
    ];

    if (usuariosList) {
        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `${usuario.nome} - ${usuario.cargo}`;
            usuariosList.appendChild(li);
        });
    }
});
