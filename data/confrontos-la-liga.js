/* scripts/confrontos-rodada.js
   - Mantém camelCase em variáveis JS (ok segundo seu pedido)
   - PT-BR nos nomes de classes/ids no HTML/CSS
*/

const fakeRounds = [
  {
    rodada: 1,
    jogos: [
      { casa: "Real Madrid", fora: "Sevilla", data: "10/08", placar: "2-0" },
      { casa: "Barcelona", fora: "Real Sociedad", data: "10/08", placar: "3-1" },
      { casa: "Atlético de Madrid", fora: "Valencia", data: "11/08", placar: "1-0" },
      { casa: "Villarreal", fora: "Betis", data: "11/08", placar: "1-1" },
      { casa: "Athletic Bilbao", fora: "Osasuna", data: "11/08", placar: "2-2" },
      { casa: "Getafe", fora: "Rayo Vallecano", data: "12/08", placar: "0-0" },
      { casa: "Mallorca", fora: "Girona", data: "12/08", placar: "1-0" },
      { casa: "Las Palmas", fora: "Celta de Vigo", data: "12/08", placar: "2-1" },
      { casa: "Alavés", fora: "Levante", data: "12/08", placar: "1-1" },
      { casa: "Granada", fora: "Espanyol", data: "12/08", placar: "0-2" }
    ]
  },

  {
    rodada: 2,
    jogos: [
      { casa: "Sevilla", fora: "Barcelona", data: "17/08", placar: null },
      { casa: "Real Sociedad", fora: "Real Madrid", data: "17/08", placar: null },
      { casa: "Valencia", fora: "Villarreal", data: "18/08", placar: null },
      { casa: "Betis", fora: "Atlético de Madrid", data: "18/08", placar: null },
      { casa: "Osasuna", fora: "Getafe", data: "18/08", placar: null },
      { casa: "Girona", fora: "Mallorca", data: "19/08", placar: null },
      { casa: "Celta de Vigo", fora: "Athletic Bilbao", data: "19/08", placar: null },
      { casa: "Rayo Vallecano", fora: "Alavés", data: "19/08", placar: null },
      { casa: "Levante", fora: "Granada", data: "19/08", placar: null },
      { casa: "Espanyol", fora: "Las Palmas", data: "19/08", placar: null }
    ]
  },

  {
    rodada: 3,
    jogos: [
      { casa: "Real Madrid", fora: "Valencia", data: "24/08", placar: null },
      { casa: "Barcelona", fora: "Sevilla", data: "24/08", placar: null },
      { casa: "Atlético de Madrid", fora: "Real Sociedad", data: "25/08", placar: null },
      { casa: "Villarreal", fora: "Osasuna", data: "25/08", placar: null },
      { casa: "Athletic Bilbao", fora: "Betis", data: "25/08", placar: null },
      { casa: "Getafe", fora: "Granada", data: "26/08", placar: null },
      { casa: "Mallorca", fora: "Las Palmas", data: "26/08", placar: null },
      { casa: "Celta de Vigo", fora: "Espanyol", data: "26/08", placar: null },
      { casa: "Alavés", fora: "Girona", data: "26/08", placar: null },
      { casa: "Levante", fora: "Rayo Vallecano", data: "26/08", placar: null }
    ]
  },

  {
    rodada: 4,
    jogos: [
      { casa: "Valencia", fora: "Barcelona", data: "31/08", placar: null },
      { casa: "Sevilla", fora: "Atlético de Madrid", data: "31/08", placar: null },
      { casa: "Real Sociedad", fora: "Villarreal", data: "01/09", placar: null },
      { casa: "Betis", fora: "Real Madrid", data: "01/09", placar: null },
      { casa: "Osasuna", fora: "Athletic Bilbao", data: "01/09", placar: null },
      { casa: "Las Palmas", fora: "Getafe", data: "02/09", placar: null },
      { casa: "Granada", fora: "Alavés", data: "02/09", placar: null },
      { casa: "Espanyol", fora: "Mallorca", data: "02/09", placar: null },
      { casa: "Rayo Vallecano", fora: "Celta de Vigo", data: "02/09", placar: null },
      { casa: "Girona", fora: "Levante", data: "02/09", placar: null }
    ]
  },

  {
    rodada: 5,
    jogos: [
      { casa: "Barcelona", fora: "Atlético de Madrid", data: "07/09", placar: null },
      { casa: "Real Madrid", fora: "Villarreal", data: "07/09", placar: null },
      { casa: "Athletic Bilbao", fora: "Sevilla", data: "08/09", placar: null },
      { casa: "Valencia", fora: "Betis", data: "08/09", placar: null },
      { casa: "Real Sociedad", fora: "Granada", data: "08/09", placar: null },
      { casa: "Mallorca", fora: "Alavés", data: "09/09", placar: null },
      { casa: "Las Palmas", fora: "Rayo Vallecano", data: "09/09", placar: null },
      { casa: "Celta de Vigo", fora: "Girona", data: "09/09", placar: null },
      { casa: "Levante", fora: "Espanyol", data: "09/09", placar: null },
      { casa: "Getafe", fora: "Osasuna", data: "09/09", placar: null }
    ]
  }
];


let rodadaAtualIndex = 0; // índice em fakeRounds

function gerarProbabilidadesFake() {
  // retorna objeto com strings (ex.: "73.2%")
  const p05 = (Math.random() * 40 + 60).toFixed(1) + "%";
  const p15 = (Math.random() * 40 + 30).toFixed(1) + "%";
  const p25 = (Math.random() * 40 + 10).toFixed(1) + "%";
  return { p05, p15, p25 };
}

function renderRodada(index) {
  const rodada = fakeRounds[index];
  const corpo = document.getElementById("confrontos-rodada__corpo");
  const numero = document.getElementById("confrontos-rodada__numero");
  const btnAnterior = document.getElementById("btn-rodada-anterior");
  const btnProxima = document.getElementById("btn-rodada-proxima");

  if (!corpo || !rodada || !numero || !btnAnterior || !btnProxima) return;

  // atualiza número
  numero.textContent = rodada.rodada;

  // limpa tabela
  corpo.innerHTML = "";

  rodada.jogos.forEach(jogo => {
    // probabilidades (geradas na hora)
    const probs = gerarProbabilidadesFake();
    const trProbs = document.createElement("tr");
    trProbs.className = "confrontos-rodada__probabilidades";
    trProbs.innerHTML = `
      <td colspan="4">
        +0.5 gols: ${probs.p05} &nbsp;|&nbsp;
        +1.5 gols: ${probs.p15} &nbsp;|&nbsp;
        +2.5 gols: ${probs.p25}
      </td>
    `;

    // linha principal do confronto (placar exibido ou '-')
    const placarExibicao = jogo.placar !== null && jogo.placar !== undefined ? jogo.placar : "-";
    const tr = document.createElement("tr");
    tr.className = "confrontos-rodada__linha";
    tr.innerHTML = `
      <td>${jogo.casa}</td>
      <td class="confrontos-rodada__placar">${placarExibicao}</td>
      <td>${jogo.fora}</td>
      <td>${jogo.data}</td>
    `;

    corpo.appendChild(trProbs);
    corpo.appendChild(tr);
  });

  // desabilita/ativa botões
  btnAnterior.disabled = index <= 0;
  btnProxima.disabled = index >= fakeRounds.length - 1;
}

function irParaProximaRodada() {
  if (rodadaAtualIndex < fakeRounds.length - 1) {
    rodadaAtualIndex++;
    renderRodada(rodadaAtualIndex);
  }
}

function irParaRodadaAnterior() {
  if (rodadaAtualIndex > 0) {
    rodadaAtualIndex--;
    renderRodada(rodadaAtualIndex);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // botões
  const btnAnterior = document.getElementById("btn-rodada-anterior");
  const btnProxima = document.getElementById("btn-rodada-proxima");

  if (btnAnterior) btnAnterior.addEventListener("click", irParaRodadaAnterior);
  if (btnProxima) btnProxima.addEventListener("click", irParaProximaRodada);

  // render primeira rodada
  renderRodada(rodadaAtualIndex);
});
