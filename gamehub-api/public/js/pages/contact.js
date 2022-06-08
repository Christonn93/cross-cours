// Importing components for the page
import { displayMessage } from "../components/messages.js";
import { createHeader, createFooter } from "../components/pageLayout.js";

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

// Setting the page title
document.title = "Contact us";

// Selecting HTML elements
const form = document.getElementById("c-form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

// Event listener
form.addEventListener("submit", e => {
 e.preventDefault();

 validateUserInput();
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector(".form-error");
   
    displayError.innerText = message;
    inputControl.classList.add("form-error");
    inputControl.classList.remove("form-success");
   };

const setSuccess = element => {
 const inputControl = element.parentElement;
 const displayError = inputControl.querySelector(".form-error");

 displayError.innerText = "";
 inputControl.classList.add("form-success");
 inputControl.classList.remove("form-error");
};

// Function to validate email input in contact form
const emailValidation = email => {
 const regEx = /\S+@\S+\.\S+/;
 const emailPattern = regEx.test(email);
 return emailPattern;
};

const validateUserInput = () => {
 const firstNameValue = firstName.value.trim();
 const lastNameValue = lastName.value.trim();
 const emailValue = email.value.trim();
 const phoneValue = phone.value.trim();
 const messageValue = message.value.trim();

 if (firstNameValue === "" ) {
  setError(firstName, "First name is required");
 } else {
  setSuccess(firstName);
 }

 if (lastNameValue === "" ) {
  setError(lastName, "Last name is required");
 } else {
  setSuccess(lastName);
 }

 if (phoneValue === "" ) {
  setError(phone, "Phone number is required");
 } else {
  setSuccess(phone);
 }

 if (emailValue === "" ) {
  setError(email, "Email is required");
 } else if (!emailValidation(emailValue)) {
  setError(email, "Please make sure your email is correct format");
 } else {
  setSuccess(email);
 }

 if (messageValue === "" ) {
  setError(message, "Message is required");
 } else {
  setSuccess(message);
 }
};

// Function to create a case number
function caseNumber(length) {
 const randomNumLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 let result = "";

 for (let i = 0; i < length; i++) {
  result += randomNumLet.charAt(Math.floor(Math.random() * randomNumLet.length));
 }

 return result;
}
