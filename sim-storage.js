setInterval(atualizarSim,1000)

function atualizarSim() {
  const DB = document.getElementById("capacidade");
  const capRestante = document.getElementById("capacidadeRestante");
  const ocupado = document.getElementById("ocupado");
  const cap = 10000 // Capacidade total
  const restante = cap - armazenado; // Capacidade restante

  // Calcula a porcentagem de capacidade total, capacidade restante e armazenamento ocupado
  const porcentagemRestante = (restante / cap) * 100;
  const porcentagemArmazenado = (armazenado / cap) * 100;

  // Define o texto nos elementos do DOM com as porcentagens calculadas
  DB.textContent = cap / 1000;
  capRestante.textContent = porcentagemRestante.toFixed();
  ocupado.textContent = porcentagemArmazenado.toFixed();
}
