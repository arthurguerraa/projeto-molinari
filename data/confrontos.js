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



/*
    {
    "operation": "Competition.GetCompetition",
    "code": 200,
    "message": "Competição encontrada com sucesso.",
    "data": {
        "id": 1,
        "name": "Premier League",
        "code": "PL",
        "type": "LEAGUE",
        "emblem": "https://crests.football-data.org/PL.png",
        "currentMatchDay": 14,
        "count": 10,
        "startDate": "2025-08-15",
        "endDate": "2025-08-18"
    },
    "timestamp": "2025-12-02T16:07:14.9713346",
    "fieldErrors": null,
    "actions": null
}

{
    "operation": "Competition.Matches.GetMatches",
    "code": 200,
    "message": "Partidas encontradas com sucesso.",
    "data": {
        "matches": [
            {
                "id": 291,
                "home": {
                    "id": 2,
                    "name": "Bournemouth",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/bournemouth.png"
                },
                "away": {
                    "id": 20,
                    "name": "Everton",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/62.png"
                },
                "date": "2025-12-02T19:30:00"
            },
            {
                "id": 292,
                "home": {
                    "id": 6,
                    "name": "Fulham",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/63.png"
                },
                "away": {
                    "id": 12,
                    "name": "Man City",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/65.png"
                },
                "date": "2025-12-02T19:30:00"
            },
            {
                "id": 293,
                "home": {
                    "id": 4,
                    "name": "Newcastle",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/67.png"
                },
                "away": {
                    "id": 9,
                    "name": "Tottenham",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/73.png"
                },
                "date": "2025-12-02T20:15:00"
            },
            {
                "id": 294,
                "home": {
                    "id": 5,
                    "name": "Brighton Hove",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/397.png"
                },
                "away": {
                    "id": 3,
                    "name": "Aston Villa",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/58.png"
                },
                "date": "2025-12-03T19:30:00"
            },
            {
                "id": 295,
                "home": {
                    "id": 18,
                    "name": "Arsenal",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/57.png"
                },
                "away": {
                    "id": 14,
                    "name": "Brentford",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/402.png"
                },
                "date": "2025-12-03T19:30:00"
            },
            {
                "id": 296,
                "home": {
                    "id": 10,
                    "name": "Burnley",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/328.png"
                },
                "away": {
                    "id": 16,
                    "name": "Crystal Palace",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/354.png"
                },
                "date": "2025-12-03T19:30:00"
            },
            {
                "id": 297,
                "home": {
                    "id": 11,
                    "name": "Wolverhampton",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/76.png"
                },
                "away": {
                    "id": 13,
                    "name": "Nottingham",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/351.png"
                },
                "date": "2025-12-03T19:30:00"
            },
            {
                "id": 298,
                "home": {
                    "id": 1,
                    "name": "Liverpool",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/64.png"
                },
                "away": {
                    "id": 7,
                    "name": "Sunderland",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/71.png"
                },
                "date": "2025-12-03T20:15:00"
            },
            {
                "id": 299,
                "home": {
                    "id": 19,
                    "name": "Leeds United",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/341.png"
                },
                "away": {
                    "id": 15,
                    "name": "Chelsea",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/61.png"
                },
                "date": "2025-12-03T20:15:00"
            },
            {
                "id": 300,
                "home": {
                    "id": 17,
                    "name": "Man United",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/66.png"
                },
                "away": {
                    "id": 8,
                    "name": "West Ham",
                    "goals": null,
                    "emblem": "https://crests.football-data.org/563.png"
                },
                "date": "2025-12-04T20:00:00"
            }
        ]
    },
    "timestamp": "2025-12-02T16:07:10.1345183",
    "fieldErrors": null,
    "actions": null
}


*/