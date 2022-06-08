import { createHeader, createFooter} from "../components/pageLayout.js";
import { selectPayment } from "../components/payment.js";
createHeader();
createFooter();
selectPayment();

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