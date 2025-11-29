import { premierLeagueGoals } from "../data/fake-goals-premier.js";

function renderGoalsTable() {
  const tableBody = document.querySelector(".goals-table tbody");

  tableBody.innerHTML = ""; // limpa conteúdo original

  premierLeagueGoals.forEach(team => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${team.team}</td>
      <td>${team.homeFor.toFixed(2)}</td>
      <td>${team.homeAgainst.toFixed(2)}</td>
      <td>${team.awayFor.toFixed(2)}</td>
      <td>${team.awayAgainst.toFixed(2)}</td>
    `;

    tableBody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", renderGoalsTable);
