document.addEventListener("DOMContentLoaded", function () {
  const applyButton = document.querySelector(".apply-button");
  const appealButton = document.querySelector(".appeal-button");

  // Defina aqui se os formulários estão abertos ou fechados
  const isApplicationOpen = false; // true para aberto, false para fechado
  const isAppealOpen = false; // true para aberto, false para fechado

  function updateButtonState(button, isOpen, message) {
    if (!isOpen) {
      button.disabled = true;
      button.style.backgroundColor = "#555555";
      button.style.cursor = "not-allowed";
      button.addEventListener("click", function (event) {
        event.preventDefault();
        alert(message);
      });
    } else {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Você será redirecionado!");
        window.location.href = button.getAttribute("href");
      });
    }
  }

  updateButtonState(
    applyButton,
    isApplicationOpen,
    "As candidaturas estão fechadas no momento. Fique atento ao cronograma!"
  );
  updateButtonState(
    appealButton,
    isAppealOpen,
    "Os pedidos de recurso estão fechados no momento. Verifique as datas disponíveis!"
  );
});
