const tabelaSerieA = [
    { pos: 1, time: "Inter de Milão",   P: 30, J: 12, V: 9, E: 3, D: 0, GP: 27, GC: 8 },
    { pos: 2, time: "Juventus",         P: 27, J: 12, V: 8, E: 3, D: 1, GP: 18, GC: 8 },
    { pos: 3, time: "Milan",            P: 23, J: 12, V: 7, E: 2, D: 3, GP: 19, GC: 14 },
    { pos: 4, time: "Napoli",           P: 22, J: 12, V: 6, E: 4, D: 2, GP: 21, GC: 15 },
    { pos: 5, time: "Atalanta",         P: 20, J: 12, V: 6, E: 2, D: 4, GP: 18, GC: 14 },
    { pos: 6, time: "Roma",             P: 19, J: 12, V: 5, E: 4, D: 3, GP: 17, GC: 13 },
    { pos: 7, time: "Bologna",          P: 17, J: 12, V: 4, E: 5, D: 3, GP: 14, GC: 12 },
    { pos: 8, time: "Fiorentina",       P: 16, J: 12, V: 4, E: 4, D: 4, GP: 13, GC: 14 },
    { pos: 9, time: "Lazio",            P: 15, J: 12, V: 4, E: 3, D: 5, GP: 12, GC: 15 },
    { pos: 10, time: "Torino",          P: 14, J: 12, V: 3, E: 5, D: 4, GP: 10, GC: 14 },

    { pos: 11, time: "Monza",           P: 13, J: 12, V: 3, E: 4, D: 5, GP: 11, GC: 16 },
    { pos: 12, time: "Genoa",           P: 12, J: 12, V: 3, E: 3, D: 6, GP: 10, GC: 17 },
    { pos: 13, time: "Udinese",         P: 11, J: 12, V: 2, E: 5, D: 5, GP: 9,  GC: 15 },
    { pos: 14, time: "Cagliari",        P: 10, J: 12, V: 2, E: 4, D: 6, GP: 9,  GC: 18 },
    { pos: 15, time: "Empoli",          P: 9,  J: 12, V: 2, E: 3, D: 7, GP: 7,  GC: 18 },
    { pos: 16, time: "Sassuolo",        P: 8,  J: 12, V: 2, E: 2, D: 8, GP: 10, GC: 22 },
    { pos: 17, time: "Frosinone",       P: 7,  J: 12, V: 1, E: 4, D: 7, GP: 9,  GC: 21 },
    { pos: 18, time: "Hellas Verona",   P: 6,  J: 12, V: 1, E: 3, D: 8, GP: 8,  GC: 20 },
    { pos: 19, time: "Lecce",           P: 6,  J: 12, V: 1, E: 3, D: 8, GP: 6,  GC: 19 },
    { pos: 20, time: "Salernitana",     P: 5,  J: 12, V: 1, E: 2, D: 9, GP: 7,  GC: 23 },
];


// adiciona saldo de gols dinamicamente
tabelaSerieA.forEach(t => {
    t.SG = t.GP - t.GC;
});

function carregarTabelaCampeonato() {
    const corpo = document.getElementById("tabela-campeonato__corpo");

    tabelaSerieA.forEach(item => {
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

