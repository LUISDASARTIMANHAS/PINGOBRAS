const atualizarRelogioLoop = setInterval(atualizarRelogio, 1000);
const relogio = document.getElementById("relogio");
const timer = document.getElementById("timer");
const horaSelecionado = document.getElementById("horaselect");

function atualizarRelogio() {
  const time = new Date();

  const Gethours = time.getHours();
  let hours = Gethours < 10 ? "0" + Gethours : Gethours;
  const Getminutes = time.getMinutes();
  let minutes = Getminutes < 10 ? "0" + Getminutes : Getminutes;
  const Getseconds = time.getSeconds();
  let seconds = Getseconds < 10 ? "0" + Getseconds : Getseconds;

  let horario = hours + ":" + minutes + ":" + Getseconds;

  relogio.innerHTML = horario;
  timer.innerHTML = horario;
  horaSelecionado.innerHTML = 19 + ":" + 30;
}
