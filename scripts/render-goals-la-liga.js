 const mediaGolsLaLiga = [
  { time: "Real Madrid", mediaCasaPro: 2.00, mediaCasaContra: 0.60, mediaForaPro: 1.60, mediaForaContra: 0.90 },
  { time: "Barcelona", mediaCasaPro: 1.90, mediaCasaContra: 0.80, mediaForaPro: 1.50, mediaForaContra: 1.10 },
  { time: "Atlético de Madrid", mediaCasaPro: 1.80, mediaCasaContra: 0.70, mediaForaPro: 1.40, mediaForaContra: 1.00 },
  { time: "Girona", mediaCasaPro: 1.70, mediaCasaContra: 1.10, mediaForaPro: 1.40, mediaForaContra: 1.40 },
  { time: "Athletic Bilbao", mediaCasaPro: 1.60, mediaCasaContra: 0.90, mediaForaPro: 1.30, mediaForaContra: 1.20 },
  { time: "Real Sociedad", mediaCasaPro: 1.40, mediaCasaContra: 0.90, mediaForaPro: 1.20, mediaForaContra: 1.20 },
  { time: "Villarreal", mediaCasaPro: 1.60, mediaCasaContra: 1.20, mediaForaPro: 1.40, mediaForaContra: 1.70 },
  { time: "Real Betis", mediaCasaPro: 1.40, mediaCasaContra: 1.00, mediaForaPro: 1.10, mediaForaContra: 1.30 },
  { time: "Valencia", mediaCasaPro: 1.30, mediaCasaContra: 1.00, mediaForaPro: 1.00, mediaForaContra: 1.40 },
  { time: "Las Palmas", mediaCasaPro: 1.10, mediaCasaContra: 0.90, mediaForaPro: 0.90, mediaForaContra: 1.20 },
  { time: "Osasuna", mediaCasaPro: 1.20, mediaCasaContra: 1.10, mediaForaPro: 1.00, mediaForaContra: 1.50 },
  { time: "Sevilla", mediaCasaPro: 1.40, mediaCasaContra: 1.40, mediaForaPro: 1.20, mediaForaContra: 1.80 },
  { time: "Rayo Vallecano", mediaCasaPro: 1.10, mediaCasaContra: 1.30, mediaForaPro: 0.90, mediaForaContra: 1.60 },
  { time: "Celta", mediaCasaPro: 1.20, mediaCasaContra: 1.30, mediaForaPro: 0.90, mediaForaContra: 1.70 },
  { time: "Getafe", mediaCasaPro: 1.20, mediaCasaContra: 1.20, mediaForaPro: 1.00, mediaForaContra: 1.60 },
  { time: "Mallorca", mediaCasaPro: 1.00, mediaCasaContra: 1.20, mediaForaPro: 0.80, mediaForaContra: 1.50 },
  { time: "Alavés", mediaCasaPro: 1.00, mediaCasaContra: 1.30, mediaForaPro: 0.80, mediaForaContra: 1.70 },
  { time: "Valladolid", mediaCasaPro: 1.10, mediaCasaContra: 1.40, mediaForaPro: 0.90, mediaForaContra: 1.80 },
  { time: "Leganés", mediaCasaPro: 0.90, mediaCasaContra: 1.40, mediaForaPro: 0.80, mediaForaContra: 1.90 },
  { time: "Espanyol", mediaCasaPro: 1.10, mediaCasaContra: 1.50, mediaForaPro: 0.90, mediaForaContra: 2.00 }
];



function carregarMediaGols() {
    const corpo = document.querySelector(".media-gols__corpo");
    corpo.innerHTML = "";

    mediaGolsLaLiga.forEach(time => {
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
