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

function carregarConfrontosRodada() {
    const corpo = document.getElementById("confrontos-rodada__corpo");

    confrontos.forEach(jogo => {
        const tr = document.createElement("tr");
        tr.className = "confrontos-rodada__linha";

        tr.innerHTML = `
            <td>${jogo.casa}</td>
            <td>x</td>
            <td>${jogo.fora}</td>
            <td>${jogo.data}</td>
        `;

        corpo.appendChild(tr);
    });
}

carregarConfrontosRodada();

