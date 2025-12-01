const tabelaPremier = [
    { pos: 1, time: "Manchester City",  P: 28, J: 12, V: 9, E: 1, D: 2, GP: 29, GC: 10 },
    { pos: 2, time: "Arsenal",          P: 26, J: 12, V: 8, E: 2, D: 2, GP: 24, GC: 9 },
    { pos: 3, time: "Liverpool",        P: 24, J: 12, V: 7, E: 3, D: 2, GP: 22, GC: 12 },
    { pos: 4, time: "Chelsea",          P: 22, J: 12, V: 6, E: 4, D: 2, GP: 21, GC: 14 },
    { pos: 5, time: "Tottenham",        P: 21, J: 12, V: 6, E: 3, D: 3, GP: 23, GC: 18 },
    { pos: 6, time: "Manchester United",P: 19, J: 12, V: 5, E: 4, D: 3, GP: 18, GC: 17 },
    { pos: 7, time: "Newcastle",        P: 18, J: 12, V: 5, E: 3, D: 4, GP: 20, GC: 19 },
    { pos: 8, time: "Brighton",         P: 17, J: 12, V: 4, E: 5, D: 3, GP: 19, GC: 17 },
    { pos: 9, time: "West Ham",         P: 16, J: 12, V: 4, E: 4, D: 4, GP: 15, GC: 15 },
    { pos: 10, time: "Aston Villa",     P: 15, J: 12, V: 4, E: 3, D: 5, GP: 17, GC: 20 },

    { pos: 11, time: "Crystal Palace",  P: 14, J: 12, V: 3, E: 5, D: 4, GP: 14, GC: 16 },
    { pos: 12, time: "Bournemouth",     P: 13, J: 12, V: 3, E: 4, D: 5, GP: 16, GC: 22 },
    { pos: 13, time: "Fulham",          P: 13, J: 12, V: 3, E: 4, D: 5, GP: 12, GC: 18 },
    { pos: 14, time: "Brentford",       P: 12, J: 12, V: 3, E: 3, D: 6, GP: 13, GC: 19 },
    { pos: 15, time: "Wolverhampton",   P: 11, J: 12, V: 3, E: 2, D: 7, GP: 14, GC: 23 },
    { pos: 16, time: "Nottingham Forest",P: 10, J: 12, V: 2, E: 4, D: 6, GP: 11, GC: 20 },
    { pos: 17, time: "Everton",         P: 9,  J: 12, V: 2, E: 3, D: 7, GP: 9,  GC: 18 },
    { pos: 18, time: "Southampton",     P: 8,  J: 12, V: 2, E: 2, D: 8, GP: 10, GC: 23 },
    { pos: 19, time: "Ipswich Town",    P: 7,  J: 12, V: 1, E: 4, D: 7, GP: 8,  GC: 21 },
    { pos: 20, time: "Leicester City",  P: 6,  J: 12, V: 1, E: 3, D: 8, GP: 7,  GC: 22 },
];

// adiciona saldo de gols dinamicamente
tabelaPremier.forEach(t => {
    t.SG = t.GP - t.GC;
});

function carregarTabelaCampeonato() {
    const corpo = document.getElementById("tabela-campeonato__corpo");

    tabelaPremier.forEach(item => {
        const tr = document.createElement("tr");
        tr.className = "tabela-campeonato__linha";

        tr.innerHTML = `
            <td>${item.pos}</td>
            <td>${item.time}</td>
            <td>${item.P}</td>
            <td>${item.J}</td>
            <td>${item.V}</td>
            <td>${item.E}</td>
            <td>${item.D}</td>
            <td>${item.GP}</td>
            <td>${item.GC}</td>
            <td>${item.SG}</td>
        `;

        corpo.appendChild(tr);
    });
}

carregarTabelaCampeonato();

