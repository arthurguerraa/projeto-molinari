const tabelaBundesliga = [
    { pos: 1, time: "Bayer Leverkusen",  P: 30, J: 12, V: 9, E: 3, D: 0, GP: 32, GC: 12 },
    { pos: 2, time: "Bayern Munich",     P: 28, J: 12, V: 9, E: 1, D: 2, GP: 34, GC: 15 },
    { pos: 3, time: "Stuttgart",         P: 25, J: 12, V: 8, E: 1, D: 3, GP: 27, GC: 14 },
    { pos: 4, time: "Borussia Dortmund", P: 23, J: 12, V: 6, E: 5, D: 1, GP: 24, GC: 16 },
    { pos: 5, time: "RB Leipzig",        P: 21, J: 12, V: 6, E: 3, D: 3, GP: 22, GC: 17 },
    { pos: 6, time: "Hoffenheim",        P: 19, J: 12, V: 5, E: 4, D: 3, GP: 20, GC: 18 },
    { pos: 7, time: "Eintracht Frankfurt",P: 18, J: 12, V: 4, E: 6, D: 2, GP: 18, GC: 15 },
    { pos: 8, time: "Freiburg",          P: 16, J: 12, V: 4, E: 4, D: 4, GP: 17, GC: 19 },
    { pos: 9, time: "Augsburg",          P: 15, J: 12, V: 4, E: 3, D: 5, GP: 16, GC: 20 },
    { pos: 10, time: "Werder Bremen",    P: 14, J: 12, V: 4, E: 2, D: 6, GP: 14, GC: 19 },

    { pos: 11, time: "Wolfsburg",        P: 13, J: 12, V: 3, E: 4, D: 5, GP: 13, GC: 18 },
    { pos: 12, time: "Heidenheim",       P: 12, J: 12, V: 3, E: 3, D: 6, GP: 12, GC: 19 },
    { pos: 13, time: "Mainz 05",         P: 11, J: 12, V: 2, E: 5, D: 5, GP: 11, GC: 18 },
    { pos: 14, time: "Borussia Mönchengladbach", P: 10, J: 12, V: 2, E: 4, D: 6, GP: 12, GC: 21 },
    { pos: 15, time: "Union Berlin",     P: 9,  J: 12, V: 2, E: 3, D: 7, GP: 10, GC: 20 },
    { pos: 16, time: "Bochum",           P: 8,  J: 12, V: 1, E: 5, D: 6, GP: 9,  GC: 22 },
    { pos: 17, time: "Köln",             P: 7,  J: 12, V: 1, E: 4, D: 7, GP: 8,  GC: 21 },
    { pos: 18, time: "St. Pauli",        P: 6,  J: 12, V: 1, E: 3, D: 8, GP: 7,  GC: 23 },
];

// adiciona saldo de gols dinamicamente
tabelaBundesliga.forEach(t => {
    t.SG = t.GP - t.GC;
});

function carregarTabelaCampeonato() {
    const corpo = document.getElementById("tabela-campeonato__corpo");

    tabelaBundesliga.forEach(item => {
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
