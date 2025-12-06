const confrontos = [
    { casa: "Arsenal", fora: "Chelsea", data: "30/11" },
    { casa: "Liverpool", fora: "Manchester City", data: "30/11" },
    { casa: "Tottenham", fora: "Newcastle", data: "01/12" },
    { casa: "Manchester United", fora: "Everton", data: "01/12" },
    { casa: "Aston Villa", fora: "Brighton", data: "01/12" },
    { casa: "West Ham", fora: "Brentford", data: "02/12" },
    { casa: "Fulham", fora: "Crystal Palace", data: "02/12" },
    { casa: "Wolves", fora: "Bournemouth", data: "02/12" },
    { casa: "Leicester", fora: "Southampton", data: "03/12" },
    { casa: "Nottingham Forest", fora: "Ipswich Town", data: "03/12" },
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

    confrontos.forEach(jogo => {

        /* Linha de probabilidades */
        const probs = gerarProbabilidadesFake();
        const trProbs = document.createElement("tr");
        trProbs.className = "confrontos-rodada__probabilidades";

        trProbs.innerHTML = `
            <td colspan="4">
                +0.5 gols: ${probs.p05} | 
                +1.5 gols: ${probs.p15} | 
                +2.5 gols: ${probs.p25}
            </td>
        `;

        /* Linha principal do confronto */
        const tr = document.createElement("tr");
        tr.className = "confrontos-rodada__linha";

        tr.innerHTML = `
            <td>${jogo.casa}</td>
            <td>x</td>
            <td>${jogo.fora}</td>
            <td>${jogo.data}</td>
        `;

        corpo.appendChild(trProbs);
        corpo.appendChild(tr);
    });
}

carregarConfrontosRodada();
