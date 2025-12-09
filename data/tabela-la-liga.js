const tabelaLaLiga = [
    { pos: 1, time: "Real Madrid",      P: 30, J: 12, V: 9, E: 3, D: 0, GP: 28, GC: 10 },
    { pos: 2, time: "Girona",           P: 27, J: 12, V: 8, E: 3, D: 1, GP: 24, GC: 12 },
    { pos: 3, time: "Barcelona",        P: 25, J: 12, V: 7, E: 4, D: 1, GP: 23, GC: 14 },
    { pos: 4, time: "Atlético de Madrid",P: 24, J: 12, V: 7, E: 3, D: 2, GP: 21, GC: 11 },
    { pos: 5, time: "Athletic Bilbao",  P: 21, J: 12, V: 6, E: 3, D: 3, GP: 19, GC: 15 },
    { pos: 6, time: "Real Sociedad",    P: 19, J: 12, V: 5, E: 4, D: 3, GP: 17, GC: 15 },
    { pos: 7, time: "Valencia",         P: 17, J: 12, V: 5, E: 2, D: 5, GP: 14, GC: 15 },
    { pos: 8, time: "Real Betis",       P: 16, J: 12, V: 4, E: 4, D: 4, GP: 13, GC: 14 },
    { pos: 9, time: "Las Palmas",       P: 14, J: 12, V: 4, E: 2, D: 6, GP: 12, GC: 18 },
    { pos: 10, time: "Villarreal",      P: 13, J: 12, V: 3, E: 4, D: 5, GP: 15, GC: 21 },

    { pos: 11, time: "Osasuna",         P: 12, J: 12, V: 3, E: 3, D: 6, GP: 13, GC: 18 },
    { pos: 12, time: "Sevilla",         P: 11, J: 12, V: 2, E: 5, D: 5, GP: 14, GC: 20 },
    { pos: 13, time: "Mallorca",        P: 10, J: 12, V: 2, E: 4, D: 6, GP: 10, GC: 18 },
    { pos: 14, time: "Rayo Vallecano",  P: 10, J: 12, V: 2, E: 4, D: 6, GP: 9,  GC: 17 },
    { pos: 15, time: "Getafe",          P: 9,  J: 12, V: 2, E: 3, D: 7, GP: 8,  GC: 17 },
    { pos: 16, time: "Celta de Vigo",   P: 8,  J: 12, V: 1, E: 5, D: 6, GP: 9,  GC: 20 },
    { pos: 17, time: "Alavés",          P: 7,  J: 12, V: 1, E: 4, D: 7, GP: 7,  GC: 19 },
    { pos: 18, time: "Cádiz",           P: 6,  J: 12, V: 1, E: 3, D: 8, GP: 6,  GC: 18 },
    { pos: 19, time: "Granada",         P: 5,  J: 12, V: 1, E: 2, D: 9, GP: 8,  GC: 25 },
    { pos: 20, time: "Almería",         P: 4,  J: 12, V: 0, E: 4, D: 8, GP: 7,  GC: 22 },
];

// adiciona saldo de gols dinamicamente
tabelaLaLiga.forEach(t => {
    t.SG = t.GP - t.GC;
});

function carregarTabelaCampeonato() {
    const corpo = document.getElementById("tabela-campeonato__corpo");

    tabelaLaLiga.forEach(item => {
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

