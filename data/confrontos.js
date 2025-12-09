const confrontos = [
    { casa: "Arsenal", fora: "Chelsea", data: "30/11", placar: "2-1" },
    { casa: "Liverpool", fora: "Manchester City", data: "30/11", placar: "1-3" },
    { casa: "Tottenham", fora: "Newcastle", data: "01/12", placar: "0-0" },
    { casa: "Manchester United", fora: "Everton", data: "01/12", placar: "2-2" },
    { casa: "Aston Villa", fora: "Brighton", data: "01/12", placar: "1-0" },
    { casa: "West Ham", fora: "Brentford", data: "02/12", placar: null }, // ainda não ocorreu
    { casa: "Fulham", fora: "Crystal Palace", data: "02/12", placar: null },
    { casa: "Wolves", fora: "Bournemouth", data: "02/12", placar: null },
    { casa: "Leicester", fora: "Southampton", data: "03/12", placar: null },
    { casa: "Nottingham Forest", fora: "Ipswich Town", data: "03/12", placar: null },
];

/* Fake data temporário (vamos substituir depois pelo cálculo real) */
function gerarProbabilidadesFake() {
    const p05 = (Math.random() * 40 + 60).toFixed(1) + "%";
    const p15 = (Math.random() * 40 + 30).toFixed(1) + "%";
    const p25 = (Math.random() * 40 + 10).toFixed(1) + "%";
    return { p05, p15, p25 };
}

function carregarConfrontosRodada() {
    const corpo = document.getElementById("confrontos-rodada__corpo");
    if (!corpo) return;

    corpo.innerHTML = ""; // limpa antes de renderizar

    confrontos.forEach(jogo => {
        // Linha de probabilidades (span por toda a largura)
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

        // Linha principal do confronto (com placa)
        const tr = document.createElement("tr");
        tr.className = "confrontos-rodada__linha";

        const placarExibicao = jogo.placar ? jogo.placar : "-";

        tr.innerHTML = `
            <td>${jogo.casa}</td>
            <td class="confrontos-rodada__placar">${placarExibicao}</td>
            <td>${jogo.fora}</td>
            <td>${jogo.data}</td>
        `;

        corpo.appendChild(trProbs);
        corpo.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", carregarConfrontosRodada);
