const mediaGolsSerieA = [
  { time: "Inter", mediaCasaPro: 1.90, mediaCasaContra: 0.70, mediaForaPro: 1.50, mediaForaContra: 0.90 },
  { time: "Juventus", mediaCasaPro: 1.50, mediaCasaContra: 0.60, mediaForaPro: 1.20, mediaForaContra: 0.90 },
  { time: "Milan", mediaCasaPro: 1.70, mediaCasaContra: 0.90, mediaForaPro: 1.40, mediaForaContra: 1.20 },
  { time: "Napoli", mediaCasaPro: 1.80, mediaCasaContra: 1.00, mediaForaPro: 1.50, mediaForaContra: 1.30 },
  { time: "Roma", mediaCasaPro: 1.60, mediaCasaContra: 1.00, mediaForaPro: 1.30, mediaForaContra: 1.40 },
  { time: "Lazio", mediaCasaPro: 1.40, mediaCasaContra: 0.90, mediaForaPro: 1.20, mediaForaContra: 1.20 },
  { time: "Atalanta", mediaCasaPro: 1.80, mediaCasaContra: 1.20, mediaForaPro: 1.40, mediaForaContra: 1.50 },
  { time: "Fiorentina", mediaCasaPro: 1.50, mediaCasaContra: 1.20, mediaForaPro: 1.20, mediaForaContra: 1.50 },
  { time: "Bologna", mediaCasaPro: 1.30, mediaCasaContra: 0.90, mediaForaPro: 1.10, mediaForaContra: 1.20 },
  { time: "Torino", mediaCasaPro: 1.10, mediaCasaContra: 0.90, mediaForaPro: 0.90, mediaForaContra: 1.20 },
  { time: "Monza", mediaCasaPro: 1.20, mediaCasaContra: 1.10, mediaForaPro: 1.00, mediaForaContra: 1.40 },
  { time: "Udinese", mediaCasaPro: 1.10, mediaCasaContra: 1.20, mediaForaPro: 0.90, mediaForaContra: 1.50 },
  { time: "Genoa", mediaCasaPro: 1.20, mediaCasaContra: 1.30, mediaForaPro: 1.00, mediaForaContra: 1.60 },
  { time: "Sassuolo", mediaCasaPro: 1.40, mediaCasaContra: 1.50, mediaForaPro: 1.20, mediaForaContra: 1.80 },
  { time: "Cagliari", mediaCasaPro: 1.10, mediaCasaContra: 1.40, mediaForaPro: 0.90, mediaForaContra: 1.90 },
  { time: "Empoli", mediaCasaPro: 1.00, mediaCasaContra: 1.30, mediaForaPro: 0.80, mediaForaContra: 1.70 },
  { time: "Verona", mediaCasaPro: 1.10, mediaCasaContra: 1.40, mediaForaPro: 0.90, mediaForaContra: 1.80 },
  { time: "Lecce", mediaCasaPro: 1.10, mediaCasaContra: 1.50, mediaForaPro: 0.90, mediaForaContra: 1.90 },
  { time: "Salernitana", mediaCasaPro: 1.00, mediaCasaContra: 1.70, mediaForaPro: 0.80, mediaForaContra: 2.10 },
  { time: "Frosinone", mediaCasaPro: 1.10, mediaCasaContra: 1.60, mediaForaPro: 0.90, mediaForaContra: 2.00 }
];


function carregarMediaGols() {
    const corpo = document.querySelector(".media-gols__corpo");
    corpo.innerHTML = "";

    mediaGolsSerieA.forEach(time => {
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
