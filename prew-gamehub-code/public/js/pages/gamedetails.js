import {  detailsFetch } from "../api/api.js"
import {  getScreenshots } from "../api/api.js"

// Importing components for the page
import { displayMessage } from "../components/messages.js";
import { createHeader, createFooter, } from "../components/pageLayout.js";
import { imageResizeUp, imageResizeDown } from "../components/imageResize.js";
createHeader();
createFooter();
displayMessage();

// Navigation function for mobile and tablet view
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = `<i class="fas fa-bars"></i>`;
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);


// For modal images if i get time
const imgResizeUp = await imageResizeUp();
const imgResizeDown = await imageResizeDown();

// Getting the page HTML
const main = document.querySelector("main");

// Creating new HTML elements
function htmlElements(tagName = "div", classNames = [], children = []) {
    const tag = document.createElement(tagName);
    tag.classList.add(...classNames);
    tag.append(...children);
    return tag;
  }

  // The code after her it will display information 
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const gameId = params.get("id");
  const id = gameId;

  const details = await detailsFetch(id, gameId);
  const screenShots = await getScreenshots(id)
  console.log(details);
  console.log(screenShots);

  const container = document.querySelector(".container");
  const title = document.querySelector(".game-title");
  title.innerText = `${details.name}`
  
  const main_image = document.getElementById("main_image");
  main_image.innerHTML = `<img src="${details.background_image}"  alt="Main image of the game" class="main-image"/>`
  for(let i = 0; i <screenShots.length; i++){
    const image = screenShots[i].image
    const screenShots_img = document.getElementById("screenshots");
  screenShots_img.innerHTML += `<img src="${image}" alt="Game screenshots" onMouseOver="${imgResizeUp}" onMouseOut="${imgResizeDown}" class="small-image"/>`
}

const description = document.getElementById("details")
const descriptionHeader = document.createElement("h3");
descriptionHeader.innerText = "Game description";
description.append(descriptionHeader);
description.innerHTML = `<p>${details.description_raw}</p>`

const dev = document.getElementById("dev-info");
dev.innerHTML = `<ul>
<li>Developed by: ${details.developers[0].name}</li>
<li>Published by: ${details.publishers[0].name}</li>
</ul>`

const purchase = document.getElementById("purchase");
const addToChart = document.createElement("a");
addToChart.innerText = "Add to chart"
addToChart.classList.add("cta")
addToChart.id = "addToChart"
addToChart.href = "#"
document.addEventListener("click", (e) => {
  if(!e.target){
    e.target === document.querySelector("#addToChart")
    const num = document.getElementById("addedToChart");
    num.classList.remove("hidden");
  }
})

purchase.append(addToChart)