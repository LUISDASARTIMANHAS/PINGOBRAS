const loginForm = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const codeInput = document.querySelector('#code');
const emailStep = document.querySelector('#email-step');
const codeStep = document.querySelector('#code-step');

function showError(inputElement, message) {
    const errorSpan = document.createElement('span');
    errorSpan.style.color = 'red';
    errorSpan.textContent = message;
    inputElement.parentElement.appendChild(errorSpan);
    inputElement.classList.add('error');

    setTimeout(() => {
        errorSpan.remove();
        inputElement.classList.remove('error');
    }, 3000); // Remove the error message after 3 seconds
}

function handleEmailSubmit(event) {
    event.preventDefault();
    const email = emailInput.value.trim();
    if (email === '') {
        showError(emailInput, 'O campo de e-mail é obrigatório.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        showError(emailInput, 'Por favor, insira um e-mail válido.');
    } else {
        emailStep.classList.add('hidden');
        codeStep.classList.remove('hidden');
        // Agora torna o campo de código obrigatório quando visível
        codeInput.setAttribute('required', 'required');
    }
}

function handleCodeSubmit(event) {
    event.preventDefault();
    const code = codeInput.value.trim();
    if (code === '') {
        showError(codeInput, 'O campo de código é obrigatório.');
    } else if (code.length !== 6 || isNaN(code)) {
        showError(codeInput, 'O código deve ser numérico e ter 6 dígitos.');
    } else {
        alert('Login realizado com sucesso!');
        loginForm.reset();
    }
}

loginForm.addEventListener('submit', (event) => {
    if (codeStep.classList.contains('hidden')) {
        handleEmailSubmit(event);
    } else {
        handleCodeSubmit(event);
    }
});
