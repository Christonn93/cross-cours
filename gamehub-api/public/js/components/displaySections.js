// Importing base script for api
import { apiFetch } from "./api/api.js";

// Importing components for the page
import { displayMessage } from "./components/messages.js";
import { createLayout } from "./components/pageLayout.js";
import { banner as banner } from "./json/banner.js"

createLayout();
displayMessage();

const gameGallery = document.querySelector(".display-games");

// Game mapping Shooter
const shooter = await apiFetch("shooter", 1);
shooter.forEach((game) => {
 const test = document.querySelector("#game_section_1");
 test.innerHTML += `<div class="card" style="background-image: url(${game.background_image}); background-size: cover; 
 background-repeat: no-repeat;">
<div class="card-content">
 <h2 class="card-title">${game.name}</h2>
 <p class="card-body">${game.updated}</p>
 <a href="./public/pages/game_details.html?id=${game.id}" class="cta">See more info</a>
</div>
</div>`;
});
console.log(shooter);

// Game mapping adventure
const adventure = await apiFetch("adventure", 5);
adventure.forEach((game) => {
 const test = document.querySelector("#game_section_2");
 test.innerHTML += `<div class="card" style="background-image: url(${game.background_image}); background-size: cover; 
 background-repeat: no-repeat;">
 <div class="card-content">
  <h2 class="card-title">${game.name}</h2>
  <p class="card-body">${game.updated}</p>
  <a href="./public/pages/game_details.html?id=${game.id}" class="cta">See more info</a>
 </div>
 </div>`;
});

// Game mapping action
const action = await apiFetch("action", 10);
action.forEach((game) => {
 const test = document.querySelector("#game_section_3");
 test.innerHTML += `<div class="card" style="background-image: url(${game.background_image}); background-size: cover; 
 background-repeat: no-repeat;">
 <div class="card-content">
  <h2 class="card-title">${game.name}</h2>
  <p class="card-body">${game.updated}</p>
  <a href="./public/pages/game_details.html?id=${game.id}" class="cta">See more info</a>
 </div>
 </div>`;
});


