/**
 * Shared actions for game category pages.
 */
function sair() {
    if (window.confirm('Tem certeza que deseja sair?')) {
        window.location.href = '/login';
    }
}
