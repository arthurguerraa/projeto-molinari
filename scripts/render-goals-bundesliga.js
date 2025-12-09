const mediaGolsBundesliga = [
  { time: "Bayern Munich", mediaCasaPro: 2.70, mediaCasaContra: 1.10, mediaForaPro: 2.10, mediaForaContra: 1.20 },
  { time: "Borussia Dortmund", mediaCasaPro: 2.10, mediaCasaContra: 1.20, mediaForaPro: 1.80, mediaForaContra: 1.40 },
  { time: "RB Leipzig", mediaCasaPro: 2.00, mediaCasaContra: 1.00, mediaForaPro: 1.70, mediaForaContra: 1.30 },
  { time: "Bayer Leverkusen", mediaCasaPro: 2.30, mediaCasaContra: 1.00, mediaForaPro: 1.90, mediaForaContra: 1.20 },
  { time: "Eintracht Frankfurt", mediaCasaPro: 1.70, mediaCasaContra: 1.30, mediaForaPro: 1.40, mediaForaContra: 1.50 },
  { time: "VfL Wolfsburg", mediaCasaPro: 1.50, mediaCasaContra: 1.20, mediaForaPro: 1.20, mediaForaContra: 1.50 },
  { time: "SC Freiburg", mediaCasaPro: 1.60, mediaCasaContra: 1.30, mediaForaPro: 1.20, mediaForaContra: 1.70 },
  { time: "VfB Stuttgart", mediaCasaPro: 1.80, mediaCasaContra: 1.20, mediaForaPro: 1.40, mediaForaContra: 1.60 },
  { time: "Werder Bremen", mediaCasaPro: 1.40, mediaCasaContra: 1.40, mediaForaPro: 1.10, mediaForaContra: 1.70 },
  { time: "Mainz 05", mediaCasaPro: 1.20, mediaCasaContra: 1.40, mediaForaPro: 1.00, mediaForaContra: 1.80 },
  { time: "Augsburg", mediaCasaPro: 1.40, mediaCasaContra: 1.50, mediaForaPro: 1.10, mediaForaContra: 1.90 },
  { time: "Hoffenheim", mediaCasaPro: 1.60, mediaCasaContra: 1.60, mediaForaPro: 1.40, mediaForaContra: 2.00 },
  { time: "Bochum", mediaCasaPro: 1.20, mediaCasaContra: 1.70, mediaForaPro: 1.00, mediaForaContra: 2.20 },
  { time: "Union Berlin", mediaCasaPro: 1.10, mediaCasaContra: 1.40, mediaForaPro: 0.90, mediaForaContra: 1.80 },
  { time: "Heidenheim", mediaCasaPro: 1.30, mediaCasaContra: 1.60, mediaForaPro: 1.10, mediaForaContra: 2.00 },
  { time: "St. Pauli", mediaCasaPro: 1.10, mediaCasaContra: 1.50, mediaForaPro: 0.90, mediaForaContra: 2.10 },
  { time: "Darmstadt", mediaCasaPro: 1.00, mediaCasaContra: 1.80, mediaForaPro: 0.80, mediaForaContra: 2.30 },
  { time: "Köln", mediaCasaPro: 1.10, mediaCasaContra: 1.70, mediaForaPro: 0.90, mediaForaContra: 2.00 }
];



function carregarMediaGols() {
    const corpo = document.querySelector(".media-gols__corpo");
    corpo.innerHTML = "";

    mediaGolsBundesliga.forEach(time => {
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
