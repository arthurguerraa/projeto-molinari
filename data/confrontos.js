/* scripts/confrontos-rodada.js
   - Mantém camelCase em variáveis JS (ok segundo seu pedido)
   - PT-BR nos nomes de classes/ids no HTML/CSS
*/

const fakeRounds = [
  // Rodada 1
  {
    rodada: 1,
    jogos: [
      { casa: "Arsenal", fora: "Chelsea", data: "30/11", placar: "2-1" },
      { casa: "Liverpool", fora: "Manchester City", data: "30/11", placar: "1-3" },
      { casa: "Tottenham", fora: "Newcastle", data: "01/12", placar: "0-0" },
      { casa: "Manchester United", fora: "Everton", data: "01/12", placar: "2-2" },
      { casa: "Aston Villa", fora: "Brighton", data: "01/12", placar: "1-0" },
      { casa: "West Ham", fora: "Wolves", data: "01/12", placar: "1-1" },
      { casa: "Crystal Palace", fora: "Fulham", data: "01/12", placar: "2-0" },
      { casa: "Bournemouth", fora: "Brentford", data: "01/12", placar: "1-3" },
      { casa: "Nottingham Forest", fora: "Southampton", data: "02/12", placar: "0-2" },
      { casa: "Leicester", fora: "Leeds", data: "02/12", placar: "2-1" }
    ]
  },

  // Rodada 2
  {
    rodada: 2,
    jogos: [
      { casa: "Chelsea", fora: "Liverpool", data: "06/12", placar: null },
      { casa: "Manchester City", fora: "Arsenal", data: "06/12", placar: null },
      { casa: "Brighton", fora: "Tottenham", data: "07/12", placar: null },
      { casa: "Newcastle", fora: "Manchester United", data: "07/12", placar: null },
      { casa: "Everton", fora: "Aston Villa", data: "07/12", placar: null },
      { casa: "Wolves", fora: "Crystal Palace", data: "07/12", placar: null },
      { casa: "Fulham", fora: "West Ham", data: "07/12", placar: null },
      { casa: "Brentford", fora: "Nottingham Forest", data: "07/12", placar: null },
      { casa: "Southampton", fora: "Bournemouth", data: "08/12", placar: null },
      { casa: "Leeds", fora: "Leicester", data: "08/12", placar: null }
    ]
  },

  // Rodada 3
  {
    rodada: 3,
    jogos: [
      { casa: "Arsenal", fora: "Liverpool", data: "13/12", placar: null },
      { casa: "Chelsea", fora: "Tottenham", data: "13/12", placar: null },
      { casa: "Manchester United", fora: "Manchester City", data: "14/12", placar: null },
      { casa: "Brighton", fora: "Newcastle", data: "14/12", placar: null },
      { casa: "Aston Villa", fora: "Everton", data: "14/12", placar: null },
      { casa: "West Ham", fora: "Bournemouth", data: "14/12", placar: null },
      { casa: "Crystal Palace", fora: "Brentford", data: "14/12", placar: null },
      { casa: "Fulham", fora: "Leeds", data: "15/12", placar: null },
      { casa: "Wolves", fora: "Southampton", data: "15/12", placar: null },
      { casa: "Nottingham Forest", fora: "Leicester", data: "15/12", placar: null }
    ]
  },

  // Rodada 4
  {
    rodada: 4,
    jogos: [
      { casa: "Liverpool", fora: "Tottenham", data: "20/12", placar: null },
      { casa: "Arsenal", fora: "Manchester United", data: "20/12", placar: null },
      { casa: "Chelsea", fora: "Brighton", data: "21/12", placar: null },
      { casa: "Manchester City", fora: "Newcastle", data: "21/12", placar: null },
      { casa: "Everton", fora: "Leicester", data: "21/12", placar: null },
      { casa: "Bournemouth", fora: "Wolves", data: "21/12", placar: null },
      { casa: "Crystal Palace", fora: "Aston Villa", data: "21/12", placar: null },
      { casa: "Brentford", fora: "Fulham", data: "22/12", placar: null },
      { casa: "Leeds", fora: "Southampton", data: "22/12", placar: null },
      { casa: "Nottingham Forest", fora: "West Ham", data: "22/12", placar: null }
    ]
  },

  // Rodada 5
  {
    rodada: 5,
    jogos: [
      { casa: "Tottenham", fora: "Arsenal", data: "27/12", placar: null },
      { casa: "Manchester United", fora: "Chelsea", data: "27/12", placar: null },
      { casa: "Brighton", fora: "Liverpool", data: "28/12", placar: null },
      { casa: "Newcastle", fora: "Aston Villa", data: "28/12", placar: null },
      { casa: "Manchester City", fora: "Everton", data: "28/12", placar: null },
      { casa: "Leicester", fora: "Crystal Palace", data: "28/12", placar: null },
      { casa: "Southampton", fora: "West Ham", data: "28/12", placar: null },
      { casa: "Wolves", fora: "Fulham", data: "29/12", placar: null },
      { casa: "Brentford", fora: "Leeds", data: "29/12", placar: null },
      { casa: "Bournemouth", fora: "Nottingham Forest", data: "29/12", placar: null }
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
