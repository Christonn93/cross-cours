import {  apiFetch } from "../api/cmsapi.js"

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

  // The code after her it will display information 
  // const queryString = document.location.search;
  // const params = new URLSearchParams(queryString);
  // const id = params.get("id");
// 
  // const data = await apiFetch(id);
// 
  // const title = document.querySelector(".game-title");
  // title.innerText = `${data.name}`
  // 
  // const main_image = document.getElementById("main_image");
  // main_image.innerHTML = `<img src="${data.cover_image}"  alt="Main image of the game" class="main-image"/>`
// 
// const description = document.getElementById("details")
// const descriptionHeader = document.createElement("h3");
// descriptionHeader.innerText = "Game description";
// description.append(descriptionHeader);
// description.innerHTML = `<p>${data.description}</p>`
// 
// const purchase = document.getElementById("purchase");
// const addToChart = document.createElement("a");
// addToChart.innerText = "Add to chart"
// addToChart.classList.add("cta")
// addToChart.id = "addToChart"
// addToChart.href = "#"
// document.addEventListener("click", (e) => {
  // if(!e.target){
    // e.target === document.querySelector("#addToChart")
    // const num = document.getElementById("addedToChart");
    // num.classList.remove("hidden");
  // }
// })
// 
// purchase.append(addToChart)


/*  === Querystring params === */
function getId() {
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
return id;
}

const gameId = getId();
console.log("gameId =", gameId)

/*  === Fetching data ===  */
const data = await apiFetch();

console.log(data)

/*  === Query selectors */
const title = document.querySelector(".game-title");
const main_image = document.getElementById("main_image");

/*  === Display on page === */
data.forEach(e => {
  title.innerHTML = `${e.name}`
  
});
