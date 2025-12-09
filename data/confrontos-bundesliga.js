/* scripts/confrontos-rodada.js
   - Mantém camelCase em variáveis JS (ok segundo seu pedido)
   - PT-BR nos nomes de classes/ids no HTML/CSS
*/

const fakeRounds = [
  {
    rodada: 1,
    jogos: [
      { casa: "Bayern de Munique", fora: "Werder Bremen", data: "16/08", placar: "3-1" },
      { casa: "Borussia Dortmund", fora: "Bayer Leverkusen", data: "16/08", placar: "2-2" },
      { casa: "RB Leipzig", fora: "Stuttgart", data: "17/08", placar: "1-0" },
      { casa: "Eintracht Frankfurt", fora: "SC Freiburg", data: "17/08", placar: "1-1" },
      { casa: "Wolfsburg", fora: "Hoffenheim", data: "17/08", placar: "0-0" },
      { casa: "Union Berlin", fora: "Mainz 05", data: "18/08", placar: "2-1" },
      { casa: "Borussia Mönchengladbach", fora: "Augsburg", data: "18/08", placar: "1-0" },
      { casa: "Colônia", fora: "Heidenheim", data: "18/08", placar: "0-1" },
      { casa: "Bochum", fora: "Darmstadt", data: "18/08", placar: "1-1" }
    ]
  },

  {
    rodada: 2,
    jogos: [
      { casa: "Werder Bremen", fora: "Borussia Dortmund", data: "23/08", placar: null },
      { casa: "Bayer Leverkusen", fora: "RB Leipzig", data: "23/08", placar: null },
      { casa: "Stuttgart", fora: "Bayern de Munique", data: "24/08", placar: null },
      { casa: "SC Freiburg", fora: "Wolfsburg", data: "24/08", placar: null },
      { casa: "Hoffenheim", fora: "Union Berlin", data: "24/08", placar: null },
      { casa: "Mainz 05", fora: "Borussia Mönchengladbach", data: "25/08", placar: null },
      { casa: "Augsburg", fora: "Colônia", data: "25/08", placar: null },
      { casa: "Heidenheim", fora: "Bochum", data: "25/08", placar: null },
      { casa: "Darmstadt", fora: "Eintracht Frankfurt", data: "25/08", placar: null }
    ]
  },

  {
    rodada: 3,
    jogos: [
      { casa: "Borussia Dortmund", fora: "Stuttgart", data: "30/08", placar: null },
      { casa: "RB Leipzig", fora: "Werder Bremen", data: "30/08", placar: null },
      { casa: "Bayern de Munique", fora: "Bayer Leverkusen", data: "31/08", placar: null },
      { casa: "Wolfsburg", fora: "Hoffenheim", data: "31/08", placar: null },
      { casa: "Union Berlin", fora: "SC Freiburg", data: "31/08", placar: null },
      { casa: "Borussia Mönchengladbach", fora: "Heidenheim", data: "01/09", placar: null },
      { casa: "Colônia", fora: "Mainz 05", data: "01/09", placar: null },
      { casa: "Bochum", fora: "Augsburg", data: "01/09", placar: null },
      { casa: "Eintracht Frankfurt", fora: "Darmstadt", data: "01/09", placar: null }
    ]
  },

  {
    rodada: 4,
    jogos: [
      { casa: "Stuttgart", fora: "RB Leipzig", data: "06/09", placar: null },
      { casa: "Werder Bremen", fora: "Bayern de Munique", data: "06/09", placar: null },
      { casa: "Bayer Leverkusen", fora: "Union Berlin", data: "07/09", placar: null },
      { casa: "SC Freiburg", fora: "Borussia Dortmund", data: "07/09", placar: null },
      { casa: "Hoffenheim", fora: "Colônia", data: "07/09", placar: null },
      { casa: "Mainz 05", fora: "Bochum", data: "08/09", placar: null },
      { casa: "Augsburg", fora: "Eintracht Frankfurt", data: "08/09", placar: null },
      { casa: "Heidenheim", fora: "Wolfsburg", data: "08/09", placar: null },
      { casa: "Darmstadt", fora: "Borussia Mönchengladbach", data: "08/09", placar: null }
    ]
  },

  {
    rodada: 5,
    jogos: [
      { casa: "Bayern de Munique", fora: "RB Leipzig", data: "13/09", placar: null },
      { casa: "Borussia Dortmund", fora: "Hoffenheim", data: "13/09", placar: null },
      { casa: "Bayer Leverkusen", fora: "SC Freiburg", data: "14/09", placar: null },
      { casa: "Union Berlin", fora: "Augsburg", data: "14/09", placar: null },
      { casa: "Wolfsburg", fora: "Mainz 05", data: "14/09", placar: null },
      { casa: "Colônia", fora: "Stuttgart", data: "15/09", placar: null },
      { casa: "Bochum", fora: "Heidenheim", data: "15/09", placar: null },
      { casa: "Eintracht Frankfurt", fora: "Borussia Mönchengladbach", data: "15/09", placar: null },
      { casa: "Darmstadt", fora: "Werder Bremen", data: "15/09", placar: null }
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
