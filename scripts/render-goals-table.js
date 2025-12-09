 const mediaGolsPremier = [
  { time: "Arsenal", mediaCasaPro: 1.90, mediaCasaContra: 0.80, mediaForaPro: 1.60, mediaForaContra: 1.10 },
  { time: "Manchester City", mediaCasaPro: 2.10, mediaCasaContra: 0.70, mediaForaPro: 1.80, mediaForaContra: 1.00 },
  { time: "Liverpool", mediaCasaPro: 2.00, mediaCasaContra: 0.90, mediaForaPro: 1.70, mediaForaContra: 1.20 },
  { time: "Aston Villa", mediaCasaPro: 1.80, mediaCasaContra: 1.00, mediaForaPro: 1.40, mediaForaContra: 1.30 },
  { time: "Tottenham", mediaCasaPro: 1.90, mediaCasaContra: 1.20, mediaForaPro: 1.50, mediaForaContra: 1.40 },
  { time: "Newcastle", mediaCasaPro: 1.70, mediaCasaContra: 1.10, mediaForaPro: 1.30, mediaForaContra: 1.20 },
  { time: "Manchester United", mediaCasaPro: 1.60, mediaCasaContra: 1.30, mediaForaPro: 1.40, mediaForaContra: 1.50 },
  { time: "Brighton", mediaCasaPro: 1.70, mediaCasaContra: 1.40, mediaForaPro: 1.50, mediaForaContra: 1.60 },
  { time: "West Ham", mediaCasaPro: 1.50, mediaCasaContra: 1.20, mediaForaPro: 1.30, mediaForaContra: 1.70 },
  { time: "Chelsea", mediaCasaPro: 1.60, mediaCasaContra: 1.10, mediaForaPro: 1.40, mediaForaContra: 1.30 },
  { time: "Crystal Palace", mediaCasaPro: 1.20, mediaCasaContra: 1.10, mediaForaPro: 1.00, mediaForaContra: 1.40 },
  { time: "Brentford", mediaCasaPro: 1.30, mediaCasaContra: 1.20, mediaForaPro: 1.10, mediaForaContra: 1.50 },
  { time: "Fulham", mediaCasaPro: 1.40, mediaCasaContra: 1.30, mediaForaPro: 1.10, mediaForaContra: 1.60 },
  { time: "Everton", mediaCasaPro: 1.10, mediaCasaContra: 1.10, mediaForaPro: 0.90, mediaForaContra: 1.40 },
  { time: "Nottingham Forest", mediaCasaPro: 1.20, mediaCasaContra: 1.40, mediaForaPro: 1.00, mediaForaContra: 1.80 },
  { time: "Wolves", mediaCasaPro: 1.20, mediaCasaContra: 1.30, mediaForaPro: 1.10, mediaForaContra: 1.60 },
  { time: "Bournemouth", mediaCasaPro: 1.30, mediaCasaContra: 1.50, mediaForaPro: 1.10, mediaForaContra: 1.90 },
  { time: "Southampton", mediaCasaPro: 1.10, mediaCasaContra: 1.60, mediaForaPro: 0.90, mediaForaContra: 2.00 },
  { time: "Leicester", mediaCasaPro: 1.40, mediaCasaContra: 1.50, mediaForaPro: 1.20, mediaForaContra: 1.70 },
  { time: "Ipswich Town", mediaCasaPro: 1.00, mediaCasaContra: 1.70, mediaForaPro: 0.90, mediaForaContra: 2.10 }
];


function carregarMediaGols() {
    const corpo = document.querySelector(".media-gols__corpo");
    corpo.innerHTML = "";

    mediaGolsPremier.forEach(time => {
        const tr = document.createElement("tr");
        tr.className = "media-gols__linha";

        tr.innerHTML = `
            <td>${time.time}</td>
            <td>${time.mediaCasaPro.toFixed(2)}</td>
            <td>${time.mediaCasaContra.toFixed(2)}</td>
            <td>${time.mediaForaPro.toFixed(2)}</td>
            <td>${time.mediaForaContra.toFixed(2)}</td>
        `;

        corpo.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", carregarMediaGols);
