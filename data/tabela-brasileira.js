const tabelaBrasileirao = [
    { pos: 1, time: "Palmeiras",       P: 30, J: 12, V: 9, E: 3, D: 0, GP: 22, GC: 8 },
    { pos: 2, time: "Flamengo",        P: 28, J: 12, V: 8, E: 4, D: 0, GP: 24, GC: 10 },
    { pos: 3, time: "Botafogo",        P: 25, J: 12, V: 7, E: 4, D: 1, GP: 20, GC: 11 },
    { pos: 4, time: "Bahia",           P: 22, J: 12, V: 6, E: 4, D: 2, GP: 17, GC: 12 },
    { pos: 5, time: "Red Bull Bragantino",P: 20,J:12,V:5,E:5,D:2,GP:16,GC:12 },
    { pos: 6, time: "Grêmio",          P: 19, J: 12, V: 5, E: 4, D: 3, GP: 14, GC: 13 },
    { pos: 7, time: "Atlético-MG",     P: 18, J: 12, V: 5, E: 3, D: 4, GP: 15, GC: 14 },
    { pos: 8, time: "Cruzeiro",        P: 16, J: 12, V: 4, E: 4, D: 4, GP: 14, GC: 15 },
    { pos: 9, time: "São Paulo",       P: 14, J: 12, V: 4, E: 2, D: 6, GP: 12, GC: 15 },
    { pos: 10, time: "Internacional",  P: 14, J: 12, V: 4, E: 2, D: 6, GP: 11, GC: 14 },

    { pos: 11, time: "Fortaleza",      P: 13, J: 12, V: 3, E: 4, D: 5, GP: 12, GC: 15 },
    { pos: 12, time: "Vasco",          P: 12, J: 12, V: 3, E: 3, D: 6, GP: 13, GC: 18 },
    { pos: 13, time: "Criciúma",       P: 12, J: 12, V: 2, E: 6, D: 4, GP: 10, GC: 14 },
    { pos: 14, time: "Juventude",      P: 10, J: 12, V: 2, E: 4, D: 6, GP: 9,  GC: 14 },
    { pos: 15, time: "Corinthians",    P: 10, J: 12, V: 2, E: 4, D: 6, GP: 8,  GC: 15 },
    { pos: 16, time: "Fluminense",     P: 9,  J: 12, V: 2, E: 3, D: 7, GP: 10, GC: 21 },
    { pos: 17, time: "Athletico-PR",   P: 8,  J: 12, V: 2, E: 2, D: 8, GP: 7,  GC: 19 },
    { pos: 18, time: "EC Vitória",     P: 7,  J: 12, V: 1, E: 4, D: 7, GP: 8,  GC: 20 },
    { pos: 19, time: "Atlético-GO",    P: 6,  J: 12, V: 1, E: 3, D: 8, GP: 6,  GC: 21 },
    { pos: 20, time: "Cuiabá",         P: 5,  J: 12, V: 1, E: 2, D: 9, GP: 5,  GC: 20 },
];

// adiciona saldo de gols dinamicamente
tabelaBrasileirao.forEach(t => {
    t.SG = t.GP - t.GC;
});

function carregarTabelaCampeonato() {
    const corpo = document.getElementById("tabela-campeonato__corpo");

    tabelaBrasileirao.forEach(item => {
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

