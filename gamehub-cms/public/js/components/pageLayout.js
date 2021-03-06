// Importing base script for api
import { apiFetch } from "../api/cmsapi.js";

// Importing banner jason
import { banner } from "../json/banner.js"

/* =================== THIS IS FOR PAGE LOADER =================== */ 

// Page header and navigation
export function createHeader() {
 const headerElement = document.querySelector("header");
 headerElement.innerHTML = `
 <nav class="navigation" id="navigation" role="navigation">
 <a href="#main" class="skip-nav">Skip navigation</a>
 <ul class="logo">
   <li id="logo"><a href="/gamehub-cms/cmsindex.html"><div class="ratio-box"><img src="/gamehub-cms/public/assets/logo/GameHub_Logo4.png" class="image"/></div></a></li>
   </ul>
   <ul class="menu">
   <li class="nav-li"><a href="/gamehub-cms/cmsindex.html"  class="cta"><i class="fa-solid fa-house"></i>Home</a></li>
   <li class="nav-li"><a href="/gamehub-cms/public/pages/list_details.html"  class="cta"><i class="fa-solid fa-gamepad"></i>Our Games</a></li>
   <li class="nav-top"><a href="/gamehub-cms/public/pages/userSetup.html" class="cta"><i class="fa-solid fa-house-user"></i>Log in / Sign up</a></li>
   <li class="toggle"><a href="#" class="cta"><i class="fas fa-bars"></i></a></li>
   <li class="nav-li" id="chart"><a href="/gamehub-cms/public/pages/checkout.html"  class="cta"><i class="fa-solid fa-cart-shopping"></i></a><i class="fa-solid fa-1 hidden" id="addedToChart"></i></li>
 </ul>
 </nav>`;  
}

// top section Index
export function createIndexInfo() {
 // Top section
 const section_1 = document.querySelector("#section_1");
 section_1.innerHTML = `<div class="text-box">
                             <h1>Welcome to GameHub, The universe of games.</h1>
                                 <p>You want a old or new game? A super good deal or a pre-release game?</p> 
                                 <p>Maybe you want to sell a old game you have dusting in the corner? You came to the right place!</p>
                                 <p> Thanks for choosing GameHub for your place to get your games or to clear space in your shelf</p>
                         </div>`;
}

// Page footer
export function createFooter() {
 const footerElement = document.querySelector("footer");

 footerElement.innerHTML += `<ul>
                                <li><a href="/gamehub-cms/cmsindex.html" class="cta">Home</a></li>
                                <li><a href="/gamehub-cms/public/pages/contact.html" class="cta">Contact</a></li>
                              </ul>                              
                              <label><i class="fa-solid fa-copyright"></i> Copyright Christopher T??nnesland 2022</label>`;
}


// Search function 
export function searchSlideOut(){
const slideOutDiv = document.querySelector("#slide-out");
slideOutDiv.classList.add("slide-out");
slideOutDiv.innerHTML = `<div class="search">
                          <label name="searchField" class="search-label">Look up any game you want</label>
                          <input type="text" placeholder="Look up games" name="searchField" class="search-input" />
                        </div>
                        <button type="submit" class="cta"><i class="fa-solid fa-magnifying-glass"></i></button>`
}

// Page banners
export function CreateBanner() {
 const banner1 = document.querySelector("#banner");
//  const banner2 = document.querySelector("#banner_2");
//  const banner3 = document.querySelector("#banner_3");

 banner1.innerHTML = `<div class="banner-header">
                        <h3>${banner.cm_header}</h3>
                      </div>
                      <div class="banner-body">
                        <img src="${banner.image1}" />
                        <div class="banner-content">
                          <p>${banner.cm_banner_content}</p>
                          <p class="slogan">${banner.cm_slogan}</p>
                          <a href="${banner.cm_link}" class="cta">Visit our sponsor here</a>
                        </div>
                       </div>`;
// 
//  banner2.innerHTML = `<div class="banner-header">
                      //  <h3>${banner.razer_header}</h3>
                      //  </div>
                      //  <div class="banner-body">
                        //  <img src="${banner.image2}" />
                        //  <div class="banner-content">
                          //  <p>${banner.razer_banner_content}</p>
                          //  <p class="slogan">${banner.razer_slogan}</p>
                          //  <a href="${banner.razer_link}" class="cta">Visit our sponsor here</a>
                        //  </div>
                      // </div>`;
// 
//  banner3.innerHTML = `<div class="banner-header">
                      //  <h3>${banner.newsletter_header}</h3>
                      //  </div>
                      //  <div class="banner-body">
                        //  <img src="${banner.image3}" />
                        //  <div class="banner-content">
                          //  <p>${banner.newsletter_content}</p>
                          //  <p class="slogan">${banner.gamehub_slogan}</p>
                        //  </div>
                      // </div>`;
}

// Section factory
function contentFactory(tagName = "div", classNames = [], children = []) {
 const tag = document.createElement(tagName);
 tag.classList.add(...classNames);
 tag.append(...children);
 return tag;
}

// Creating random price and condition
function getCondition() {
 const conditionArray = ["New", "Used", "Original box"];
 const randomCondition = conditionArray[Math.floor(Math.random() * conditionArray.length)];
 return randomCondition;
}

function getPrice() {
 const priceArray = [250, 350, 65, 1500, 899, 599, 459, 35, 29.99];
 const randomPrice = priceArray[Math.floor(Math.random() * priceArray.length)];
 return randomPrice;
}


/* =================== THIS IS FOR INDEX PAGE =================== */ 

// QuerySelector Factory
function querySelectorFactory(tagName, genre, title) {
  const container = document.querySelector(tagName);
  const header = document.createElement("h2");
  header.classList.add("genre-title");
  header.innerText = title;
  const viewMore = document.createElement("a");
  viewMore.innerText = `View more games`;
  viewMore.classList.add("cta");
  container.append(header);
 
  genre.forEach((data) => {
   container.innerHTML += `
   <div class="card" style="background-image: url(${data.images[0].src}); background-size: cover; 
  background-repeat: no-repeat;">
  <div class="card-content">
  <h2 class="card-title">${data.name}</h2>
  <p class="card-body">${data.price} ,-</p>
  <a href="../pages/game_details.html?id=${data.id}" class="cta">See more info</a>
  </div>
  </div>`;
  });
  
 }

// Game Gallery display
export async function createGameGallery() {
  let games = await apiFetch();
  // Game mapping Shooter
  querySelectorFactory("#game_section_1", games, "Games");
 }

/* =================== THIS IS FOR GAME DETAILS LIST =================== */ 

// QuerySelector Factory Two (for list view)
function querySelectorFactoryTwo(tagName, genre, title) {

  const container = document.querySelector(tagName);
  const header = document.createElement("h2");
  header.classList.add("genre-title");
  header.innerText = title;
  container.append(header);
 
  genre.forEach((game) => {
   container.innerHTML += `<div class="card" style="background-image: url(${game.background_image}); background-size: cover; 
     background-repeat: no-repeat;">
     <div class="card-content">
     <h2 class="card-title">${game.name}</h2>
     <p class="card-body">Condition: ${getCondition()}</p>
     <p class="card-body">Price: ${getPrice()}</p>
     <a href="game_details.html?id=${game.id}" class="cta">See more info</a>
     </div>
     </div>`;
  });
 
  const onlyNames = [];
  genre.forEach((gameGenre) => {
   const genre = gameGenre.genres[0].name;
   onlyNames.push(genre);
  });
 
  return container;
 }

// Game Gallery display
export async function createGameGalleryList() {
    let games = await apiFetch();
    // Game mapping Shooter
    querySelectorFactory("#game_section_1", games, "Games");
   }

// Page loader
export function pageLoader() {
 // Setting up the html
 const loading = document.querySelector("");
 loading.innerHTML = `
  <div class="loading">
  <svg viewBox="-2000 -1000 4000 2000">
  <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
  <use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use></svg>
  </div>`;
}

// Changing page title when
export function pageTitle() {
 const pageTitle = document.title;
 const attentionMessage = "*Come Back!";
 const blinkEvent = null;

 document.addEventListener("visibilitychange", function (e) {
  const isPageActive = !document.hidden;

  if (!isPageActive) {
   blink();
  } else {
   document.title = pageTitle;
   clearInterval(blinkEvent);
  }
 });

 function blink() {
  blinkEvent = setInterval(function () {
   if (document.title === attentionMessage) {
    document.title = pageTitle;
   } else {
    document.title = attentionMessage;
   }
  }, 100);
 }
}
