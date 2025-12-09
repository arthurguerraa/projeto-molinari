 const mediaGolsLigue1 = [
  { time: "PSG", mediaCasaPro: 2.20, mediaCasaContra: 0.70, mediaForaPro: 1.80, mediaForaContra: 1.00 },
  { time: "Monaco", mediaCasaPro: 1.90, mediaCasaContra: 1.10, mediaForaPro: 1.60, mediaForaContra: 1.40 },
  { time: "Lille", mediaCasaPro: 1.70, mediaCasaContra: 0.90, mediaForaPro: 1.40, mediaForaContra: 1.20 },
  { time: "Lyon", mediaCasaPro: 1.60, mediaCasaContra: 1.10, mediaForaPro: 1.30, mediaForaContra: 1.50 },
  { time: "Marseille", mediaCasaPro: 1.70, mediaCasaContra: 1.20, mediaForaPro: 1.40, mediaForaContra: 1.70 },
  { time: "Nice", mediaCasaPro: 1.40, mediaCasaContra: 0.70, mediaForaPro: 1.10, mediaForaContra: 1.00 },
  { time: "Rennes", mediaCasaPro: 1.60, mediaCasaContra: 1.30, mediaForaPro: 1.30, mediaForaContra: 1.60 },
  { time: "Lens", mediaCasaPro: 1.50, mediaCasaContra: 1.00, mediaForaPro: 1.30, mediaForaContra: 1.40 },
  { time: "Reims", mediaCasaPro: 1.30, mediaCasaContra: 1.20, mediaForaPro: 1.10, mediaForaContra: 1.60 },
  { time: "Montpellier", mediaCasaPro: 1.40, mediaCasaContra: 1.40, mediaForaPro: 1.10, mediaForaContra: 1.80 },
  { time: "Brest", mediaCasaPro: 1.20, mediaCasaContra: 1.00, mediaForaPro: 1.00, mediaForaContra: 1.40 },
  { time: "Strasbourg", mediaCasaPro: 1.20, mediaCasaContra: 1.30, mediaForaPro: 1.00, mediaForaContra: 1.70 },
  { time: "Nantes", mediaCasaPro: 1.30, mediaCasaContra: 1.40, mediaForaPro: 1.10, mediaForaContra: 1.90 },
  { time: "Toulouse", mediaCasaPro: 1.20, mediaCasaContra: 1.40, mediaForaPro: 1.00, mediaForaContra: 1.80 },
  { time: "Le Havre", mediaCasaPro: 1.10, mediaCasaContra: 1.20, mediaForaPro: 0.90, mediaForaContra: 1.60 },
  { time: "Metz", mediaCasaPro: 1.00, mediaCasaContra: 1.50, mediaForaPro: 0.80, mediaForaContra: 1.90 },
  { time: "Lorient", mediaCasaPro: 1.20, mediaCasaContra: 1.60, mediaForaPro: 1.00, mediaForaContra: 2.00 },
  { time: "Clermont", mediaCasaPro: 1.00, mediaCasaContra: 1.70, mediaForaPro: 0.80, mediaForaContra: 2.20 }
];


function carregarMediaGols() {
    const corpo = document.querySelector(".media-gols__corpo");
    corpo.innerHTML = "";

    mediaGolsLigue1.forEach(time => {
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
