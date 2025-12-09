const tabelaLigue1 = [
    { pos: 1, time: "Paris Saint-Germain",P: 29,J:12,V:9,E:2,D:1,GP:30,GC:12 },
    { pos: 2, time: "Nice",             P: 24, J: 12, V: 7, E: 3, D: 2, GP: 18, GC: 11 },
    { pos: 3, time: "Monaco",           P: 23, J: 12, V: 7, E: 2, D: 3, GP: 22, GC: 16 },
    { pos: 4, time: "Lille",            P: 20, J: 12, V: 5, E: 5, D: 2, GP: 16, GC: 12 },
    { pos: 5, time: "Reims",            P: 19, J: 12, V: 5, E: 4, D: 3, GP: 15, GC: 14 },
    { pos: 6, time: "Lens",             P: 18, J: 12, V: 5, E: 3, D: 4, GP: 14, GC: 13 },
    { pos: 7, time: "Marseille",        P: 17, J: 12, V: 4, E: 5, D: 3, GP: 13, GC: 12 },
    { pos: 8, time: "Strasbourg",       P: 15, J: 12, V: 4, E: 3, D: 5, GP: 12, GC: 15 },
    { pos: 9, time: "Rennes",           P: 13, J: 12, V: 3, E: 4, D: 5, GP: 14, GC: 18 },
    { pos: 10, time: "Brest",           P: 13, J: 12, V: 3, E: 4, D: 5, GP: 10, GC: 15 },

    { pos: 11, time: "Montpellier",     P: 12, J: 12, V: 3, E: 3, D: 6, GP: 12, GC: 18 },
    { pos: 12, time: "Toulouse",        P: 11, J: 12, V: 2, E: 5, D: 5, GP: 11, GC: 17 },
    { pos: 13, time: "Metz",            P: 10, J: 12, V: 2, E: 4, D: 6, GP: 9,  GC: 17 },
    { pos: 14, time: "Le Havre",        P: 9,  J: 12, V: 2, E: 3, D: 7, GP: 8,  GC: 18 },
    { pos: 15, time: "Lorient",         P: 8,  J: 12, V: 1, E: 5, D: 6, GP: 10, GC: 20 },
    { pos: 16, time: "Clermont",        P: 7,  J: 12, V: 1, E: 4, D: 7, GP: 7,  GC: 19 },
    { pos: 17, time: "Nantes",          P: 7,  J: 12, V: 1, E: 4, D: 7, GP: 8,  GC: 22 },
    { pos: 18, time: "Saint-Étienne",   P: 6,  J: 12, V: 1, E: 3, D: 8, GP: 6,  GC: 22 },
];

// adiciona saldo de gols dinamicamente
tabelaLigue1.forEach(t => {
    t.SG = t.GP - t.GC;
});

function carregarTabelaCampeonato() {
    const corpo = document.getElementById("tabela-campeonato__corpo");

    tabelaLigue1.forEach(item => {
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

