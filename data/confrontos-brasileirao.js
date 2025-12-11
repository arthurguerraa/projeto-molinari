/* scripts/confrontos-rodada.js
   - Mantém camelCase em variáveis JS (ok segundo seu pedido)
   - PT-BR nos nomes de classes/ids no HTML/CSS
*/

const fakeRounds = [
  // Rodada 1
  {
    rodada: 1,
    jogos: [
      { casa: "Flamengo", fora: "Palmeiras", data: "10/05", placar: "2-1" },
      { casa: "Corinthians", fora: "Grêmio", data: "10/05", placar: "1-1" },
      { casa: "São Paulo", fora: "Atlético-MG", data: "11/05", placar: "0-2" },
      { casa: "Vasco", fora: "EC Vitória", data: "11/05", placar: "2-0" },
      { casa: "Fluminense", fora: "Botafogo", data: "11/05", placar: "3-2" },
      { casa: "Athletico-PR", fora: "Bragantino", data: "12/05", placar: "1-0" },
      { casa: "Internacional", fora: "Bahia", data: "12/05", placar: "1-1" },
      { casa: "Cruzeiro", fora: "Criciúma", data: "12/05", placar: "0-0" },
      { casa: "Fortaleza", fora: "Cuiabá", data: "12/05", placar: "2-1" },
      { casa: "Atlético-GO", fora: "Juventude", data: "12/05", placar: "1-0" }
    ]
  },

  // Rodada 2
  {
    rodada: 2,
    jogos: [
      { casa: "Palmeiras", fora: "Corinthians", data: "17/05", placar: null },
      { casa: "Grêmio", fora: "São Paulo", data: "17/05", placar: null },
      { casa: "Atlético-MG", fora: "Vasco", data: "18/05", placar: null },
      { casa: "EC Vitória", fora: "Flamengo", data: "18/05", placar: null },
      { casa: "Botafogo", fora: "Athletico-PR", data: "18/05", placar: null },
      { casa: "Bragantino", fora: "Internacional", data: "19/05", placar: null },
      { casa: "Bahia", fora: "Fortaleza", data: "19/05", placar: null },
      { casa: "Cruzeiro", fora: "Fluminense", data: "19/05", placar: null },
      { casa: "Cuiabá", fora: "Criciúma", data: "19/05", placar: null },
      { casa: "Juventude", fora: "Atlético-GO", data: "19/05", placar: null }
    ]
  },

  // Rodada 3
  {
    rodada: 3,
    jogos: [
      { casa: "Corinthians", fora: "Flamengo", data: "24/05", placar: null },
      { casa: "São Paulo", fora: "Palmeiras", data: "24/05", placar: null },
      { casa: "Vasco", fora: "Grêmio", data: "25/05", placar: null },
      { casa: "Fluminense", fora: "Atlético-MG", data: "25/05", placar: null },
      { casa: "EC Vitória", fora: "Botafogo", data: "25/05", placar: null },
      { casa: "Athletico-PR", fora: "Cruzeiro", data: "26/05", placar: null },
      { casa: "Internacional", fora: "Bahia", data: "26/05", placar: null },
      { casa: "Fortaleza", fora: "Bragantino", data: "26/05", placar: null },
      { casa: "Criciúma", fora: "Juventude", data: "26/05", placar: null },
      { casa: "Atlético-GO", fora: "Cuiabá", data: "26/05", placar: null }
    ]
  },

  // Rodada 4
  {
    rodada: 4,
    jogos: [
      { casa: "Flamengo", fora: "São Paulo", data: "31/05", placar: null },
      { casa: "Palmeiras", fora: "Vasco", data: "31/05", placar: null },
      { casa: "Grêmio", fora: "Fluminense", data: "01/06", placar: null },
      { casa: "Atlético-MG", fora: "EC Vitória", data: "01/06", placar: null },
      { casa: "Botafogo", fora: "Corinthians", data: "01/06", placar: null },
      { casa: "Cruzeiro", fora: "Internacional", data: "02/06", placar: null },
      { casa: "Bahia", fora: "Athletico-PR", data: "02/06", placar: null },
      { casa: "Bragantino", fora: "Atlético-GO", data: "02/06", placar: null },
      { casa: "Juventude", fora: "Fortaleza", data: "02/06", placar: null },
      { casa: "Cuiabá", fora: "Criciúma", data: "02/06", placar: null }
    ]
  },

  // Rodada 5
  {
    rodada: 5,
    jogos: [
      { casa: "Flamengo", fora: "Vasco", data: "07/06", placar: null },
      { casa: "Palmeiras", fora: "Grêmio", data: "07/06", placar: null },
      { casa: "Botafogo", fora: "EC Vitória", data: "08/06", placar: null },
      { casa: "Bahia", fora: "Cruzeiro", data: "08/06", placar: null },
      { casa: "Bragantino", fora: "Fluminense", data: "08/06", placar: null },
      { casa: "Atlético-MG", fora: "Fortaleza", data: "09/06", placar: null },
      { casa: "São Paulo", fora: "Criciúma", data: "09/06", placar: null },
      { casa: "Internacional", fora: "Corinthians", data: "09/06", placar: null },
      { casa: "Juventude", fora: "Cuiabá", data: "09/06", placar: null },
      { casa: "Athletico-PR", fora: "Atlético-GO", data: "09/06", placar: null }
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
