 const mediaGolsBrasileirao = [
  { time: "Flamengo", mediaCasaPro: 1.90, mediaCasaContra: 0.90, mediaForaPro: 1.40, mediaForaContra: 1.20 },
  { time: "Palmeiras", mediaCasaPro: 1.80, mediaCasaContra: 0.70, mediaForaPro: 1.30, mediaForaContra: 1.00 },
  { time: "Botafogo", mediaCasaPro: 1.70, mediaCasaContra: 1.00, mediaForaPro: 1.20, mediaForaContra: 1.30 },
  { time: "Grêmio", mediaCasaPro: 1.60, mediaCasaContra: 1.10, mediaForaPro: 1.10, mediaForaContra: 1.40 },
  { time: "Fluminense", mediaCasaPro: 1.50, mediaCasaContra: 1.20, mediaForaPro: 1.20, mediaForaContra: 1.60 },
  { time: "São Paulo", mediaCasaPro: 1.40, mediaCasaContra: 0.90, mediaForaPro: 1.10, mediaForaContra: 1.20 },
  { time: "Corinthians", mediaCasaPro: 1.30, mediaCasaContra: 1.00, mediaForaPro: 1.00, mediaForaContra: 1.40 },
  { time: "Athletico-PR", mediaCasaPro: 1.60, mediaCasaContra: 1.10, mediaForaPro: 1.20, mediaForaContra: 1.40 },
  { time: "Internacional", mediaCasaPro: 1.40, mediaCasaContra: 0.90, mediaForaPro: 1.10, mediaForaContra: 1.20 },
  { time: "Atlético-MG", mediaCasaPro: 1.60, mediaCasaContra: 1.20, mediaForaPro: 1.20, mediaForaContra: 1.50 },
  { time: "Cruzeiro", mediaCasaPro: 1.30, mediaCasaContra: 1.10, mediaForaPro: 0.90, mediaForaContra: 1.40 },
  { time: "Vasco", mediaCasaPro: 1.20, mediaCasaContra: 1.30, mediaForaPro: 0.90, mediaForaContra: 1.80 },
  { time: "Fortaleza", mediaCasaPro: 1.40, mediaCasaContra: 1.10, mediaForaPro: 1.20, mediaForaContra: 1.60 },
  { time: "Cuiabá", mediaCasaPro: 1.10, mediaCasaContra: 1.20, mediaForaPro: 0.90, mediaForaContra: 1.60 },
  { time: "Bahia", mediaCasaPro: 1.40, mediaCasaContra: 1.20, mediaForaPro: 1.00, mediaForaContra: 1.70 },
  { time: "Red Bull Bragantino", mediaCasaPro: 1.50, mediaCasaContra: 1.30, mediaForaPro: 1.20, mediaForaContra: 1.60 },
  { time: "Athletico-GO", mediaCasaPro: 1.10, mediaCasaContra: 1.40, mediaForaPro: 0.90, mediaForaContra: 1.90 },
  { time: "Juventude", mediaCasaPro: 1.00, mediaCasaContra: 1.20, mediaForaPro: 0.80, mediaForaContra: 1.60 },
  { time: "Coritiba", mediaCasaPro: 1.10, mediaCasaContra: 1.50, mediaForaPro: 0.90, mediaForaContra: 1.90 },
  { time: "Criciúma", mediaCasaPro: 1.00, mediaCasaContra: 1.30, mediaForaPro: 0.80, mediaForaContra: 1.80 }
];



function carregarMediaGols() {
    const corpo = document.querySelector(".media-gols__corpo");
    corpo.innerHTML = "";

    mediaGolsBrasileirao.forEach(time => {
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
