const atualizarRelogioLoop = setInterval(atualizarRelogio, 1000);
const relogio = document.getElementById("relogio");

function atualizarRelogio() {
  const time = new Date();
  const Gethours = time.getHours();
  const Getminutes = time.getMinutes();
  const Getseconds = time.getSeconds();
  const hours = formatarRelogio(Gethours);
  const minutes = formatarRelogio(Getminutes);
  const seconds = formatarRelogio(Getseconds);
  const horario = hours + ":" + minutes + ":" + seconds;

  if(relogio){
  relogio.innerHTML = horario;
  }
}

function formatarRelogio(time) {
  var timeFormatado;

  if (time < 10) {
    timeFormatado = "0" + time;
  } else {
    timeFormatado = time;
  }

  return timeFormatado;
}
