/**
 * Handles actions shared by the games lobby.
 */
function sair() {
    if (window.confirm('Tem certeza que deseja sair?')) {
        window.location.href = '/login';
    }
}
