// Importing components for the page
import { displayMessage } from "./components/messages.js";
displayMessage();

import { createHeader, createFooter, createIndexInfo, CreateBanner, createGameGallery, searchSlideOut, pageLoader  } from "./components/pageLayout.js";
createHeader();
createIndexInfo();
CreateBanner();
createGameGallery();
createFooter();

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



// const name = document.querySelector("");
// name.innerHTML += `
// <div class="loading">
// <svg viewBox="-2000 -1000 4000 2000">
// <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
// <use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use></svg>
// </div>`



