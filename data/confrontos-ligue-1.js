/* scripts/confrontos-rodada.js
   - Mantém camelCase em variáveis JS (ok segundo seu pedido)
   - PT-BR nos nomes de classes/ids no HTML/CSS
*/

const fakeRounds = [
  {
    rodada: 1,
    jogos: [
      { casa: "PSG", fora: "Saint-Étienne", data: "10/08", placar: "3-1" },
      { casa: "Marseille", fora: "Monaco", data: "10/08", placar: "1-2" },
      { casa: "Lille", fora: "Lens", data: "11/08", placar: "0-0" },
      { casa: "Nice", fora: "Rennes", data: "11/08", placar: "2-1" },
      { casa: "Strasbourg", fora: "Toulouse", data: "11/08", placar: "1-1" },
      { casa: "Nantes", fora: "Reims", data: "12/08", placar: "0-1" },
      { casa: "Montpellier", fora: "Brest", data: "12/08", placar: "2-2" },
      { casa: "Le Havre", fora: "Metz", data: "12/08", placar: "1-0" },
      { casa: "Lorient", fora: "Clermont", data: "12/08", placar: "2-1" }
    ]
  },

  {
    rodada: 2,
    jogos: [
      { casa: "Saint-Étienne", fora: "Marseille", data: "17/08", placar: null },
      { casa: "Monaco", fora: "PSG", data: "17/08", placar: null },
      { casa: "Lens", fora: "Nice", data: "18/08", placar: null },
      { casa: "Rennes", fora: "Lille", data: "18/08", placar: null },
      { casa: "Toulouse", fora: "Nantes", data: "18/08", placar: null },
      { casa: "Reims", fora: "Strasbourg", data: "19/08", placar: null },
      { casa: "Brest", fora: "Le Havre", data: "19/08", placar: null },
      { casa: "Metz", fora: "Montpellier", data: "19/08", placar: null },
      { casa: "Clermont", fora: "Lorient", data: "19/08", placar: null }
    ]
  },

  {
    rodada: 3,
    jogos: [
      { casa: "PSG", fora: "Nice", data: "24/08", placar: null },
      { casa: "Marseille", fora: "Lille", data: "24/08", placar: null },
      { casa: "Monaco", fora: "Saint-Étienne", data: "25/08", placar: null },
      { casa: "Rennes", fora: "Lens", data: "25/08", placar: null },
      { casa: "Strasbourg", fora: "Brest", data: "25/08", placar: null },
      { casa: "Nantes", fora: "Montpellier", data: "26/08", placar: null },
      { casa: "Toulouse", fora: "Clermont", data: "26/08", placar: null },
      { casa: "Le Havre", fora: "Lorient", data: "26/08", placar: null },
      { casa: "Metz", fora: "Reims", data: "26/08", placar: null }
    ]
  },

  {
    rodada: 4,
    jogos: [
      { casa: "Saint-Étienne", fora: "PSG", data: "31/08", placar: null },
      { casa: "Lille", fora: "Monaco", data: "31/08", placar: null },
      { casa: "Nice", fora: "Marseille", data: "01/09", placar: null },
      { casa: "Lens", fora: "Strasbourg", data: "01/09", placar: null },
      { casa: "Montpellier", fora: "Rennes", data: "01/09", placar: null },
      { casa: "Brest", fora: "Nantes", data: "02/09", placar: null },
      { casa: "Reims", fora: "Le Havre", data: "02/09", placar: null },
      { casa: "Lorient", fora: "Metz", data: "02/09", placar: null },
      { casa: "Clermont", fora: "Toulouse", data: "02/09", placar: null }
    ]
  },

  {
    rodada: 5,
    jogos: [
      { casa: "PSG", fora: "Lille", data: "07/09", placar: null },
      { casa: "Marseille", fora: "Rennes", data: "07/09", placar: null },
      { casa: "Monaco", fora: "Nice", data: "08/09", placar: null },
      { casa: "Strasbourg", fora: "Saint-Étienne", data: "08/09", placar: null },
      { casa: "Nantes", fora: "Toulouse", data: "08/09", placar: null },
      { casa: "Montpellier", fora: "Reims", data: "09/09", placar: null },
      { casa: "Le Havre", fora: "Clermont", data: "09/09", placar: null },
      { casa: "Brest", fora: "Lorient", data: "09/09", placar: null },
      { casa: "Metz", fora: "Lens", data: "09/09", placar: null }
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
