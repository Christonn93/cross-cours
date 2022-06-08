import {  apiFetch_details } from "../api/cmsapi.js"

// Importing components for the page
import { displayMessage } from "../components/messages.js";
import { createHeader, createFooter, } from "../components/pageLayout.js";
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


/*  === Fetching data ===  */
const data = await apiFetch_details();

console.log(data)

/*  === Query selectors */
const title = document.querySelector(".game-title");
const main_image = document.getElementById("main_image");
const screenShots = document.getElementById("screenshots");
const description = document.getElementById("description");
const details = document.getElementById("details");


/*  === Display on page === */
title.innerHTML = `${data.name}`
main_image.innerHTML = `<img src="${data.images[0].src}" />`

/* === Adding screenshots === */
const images = data.images;
for(let o = 0; o < images.length; o++){
  screenShots.innerHTML += `<img src="${data.images[o].src}" />`
}

/* == Adding description of the game ===  */
description.innerHTML = `${data.description}`

/* === Creating a list of categories === */
const cat = data.categories;
for(let p = 0; p < cat.length; p++){
  const listDiv = document.getElementById("categories")
  const list = document.createElement("ul");
  const listItem = document.createElement("li").innerText += `${cat[p].name}`
  list.append(listItem);
  listDiv.append(list);
  details.append(listDiv);
}

/* === Creating a list of attributes === */
const att = data.attributes;

att.forEach(el => {
  const name = el.name;
  const value = el.options.join(" - ");

  const listDiv = document.getElementById("attribute")
  const list = document.createElement("ul");
  const listItem = document.createElement("li").innerText += `${name} ${value}`
  list.append(listItem);
  listDiv.append(list);
  details.append(listDiv);
});

const price = document.getElementById("price");
price.innerHTML = `<p>${data.regular_price}</p>`