/* scripts/confrontos-rodada.js
   - Mantém camelCase em variáveis JS (ok segundo seu pedido)
   - PT-BR nos nomes de classes/ids no HTML/CSS
*/

const fakeRounds = [
  {
    rodada: 1,
    jogos: [
      { casa: "Inter", fora: "Fiorentina", data: "10/08", placar: "2-0" },
      { casa: "Juventus", fora: "Lazio", data: "10/08", placar: "1-1" },
      { casa: "Milan", fora: "Roma", data: "11/08", placar: "2-2" },
      { casa: "Napoli", fora: "Atalanta", data: "11/08", placar: "1-0" },
      { casa: "Bologna", fora: "Torino", data: "11/08", placar: "0-0" },
      { casa: "Genoa", fora: "Udinese", data: "12/08", placar: "1-1" },
      { casa: "Hellas Verona", fora: "Monza", data: "12/08", placar: "0-1" },
      { casa: "Lecce", fora: "Empoli", data: "12/08", placar: "2-1" },
      { casa: "Cagliari", fora: "Parma", data: "12/08", placar: "1-0" },
      { casa: "Sassuolo", fora: "Salernitana", data: "12/08", placar: "3-1" }
    ]
  },

  {
    rodada: 2,
    jogos: [
      { casa: "Fiorentina", fora: "Juventus", data: "17/08", placar: null },
      { casa: "Lazio", fora: "Inter", data: "17/08", placar: null },
      { casa: "Roma", fora: "Napoli", data: "18/08", placar: null },
      { casa: "Atalanta", fora: "Milan", data: "18/08", placar: null },
      { casa: "Torino", fora: "Genoa", data: "18/08", placar: null },
      { casa: "Udinese", fora: "Hellas Verona", data: "19/08", placar: null },
      { casa: "Monza", fora: "Lecce", data: "19/08", placar: null },
      { casa: "Empoli", fora: "Cagliari", data: "19/08", placar: null },
      { casa: "Parma", fora: "Sassuolo", data: "19/08", placar: null },
      { casa: "Salernitana", fora: "Bologna", data: "19/08", placar: null }
    ]
  },

  {
    rodada: 3,
    jogos: [
      { casa: "Inter", fora: "Napoli", data: "24/08", placar: null },
      { casa: "Juventus", fora: "Milan", data: "24/08", placar: null },
      { casa: "Roma", fora: "Fiorentina", data: "25/08", placar: null },
      { casa: "Atalanta", fora: "Lazio", data: "25/08", placar: null },
      { casa: "Torino", fora: "Monza", data: "25/08", placar: null },
      { casa: "Genoa", fora: "Empoli", data: "26/08", placar: null },
      { casa: "Hellas Verona", fora: "Parma", data: "26/08", placar: null },
      { casa: "Lecce", fora: "Salernitana", data: "26/08", placar: null },
      { casa: "Cagliari", fora: "Bologna", data: "26/08", placar: null },
      { casa: "Sassuolo", fora: "Udinese", data: "26/08", placar: null }
    ]
  },

  {
    rodada: 4,
    jogos: [
      { casa: "Napoli", fora: "Juventus", data: "31/08", placar: null },
      { casa: "Milan", fora: "Inter", data: "31/08", placar: null },
      { casa: "Fiorentina", fora: "Atalanta", data: "01/09", placar: null },
      { casa: "Lazio", fora: "Roma", data: "01/09", placar: null },
      { casa: "Monza", fora: "Genoa", data: "01/09", placar: null },
      { casa: "Empoli", fora: "Sassuolo", data: "02/09", placar: null },
      { casa: "Parma", fora: "Cagliari", data: "02/09", placar: null },
      { casa: "Udinese", fora: "Torino", data: "02/09", placar: null },
      { casa: "Bologna", fora: "Lecce", data: "02/09", placar: null },
      { casa: "Salernitana", fora: "Hellas Verona", data: "02/09", placar: null }
    ]
  },

  {
    rodada: 5,
    jogos: [
      { casa: "Inter", fora: "Roma", data: "07/09", placar: null },
      { casa: "Juventus", fora: "Atalanta", data: "07/09", placar: null },
      { casa: "Napoli", fora: "Fiorentina", data: "08/09", placar: null },
      { casa: "Milan", fora: "Lazio", data: "08/09", placar: null },
      { casa: "Genoa", fora: "Sassuolo", data: "08/09", placar: null },
      { casa: "Hellas Verona", fora: "Bologna", data: "09/09", placar: null },
      { casa: "Lecce", fora: "Torino", data: "09/09", placar: null },
      { casa: "Cagliari", fora: "Udinese", data: "09/09", placar: null },
      { casa: "Parma", fora: "Empoli", data: "09/09", placar: null },
      { casa: "Salernitana", fora: "Monza", data: "09/09", placar: null }
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
