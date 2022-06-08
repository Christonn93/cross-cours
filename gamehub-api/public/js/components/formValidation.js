export function validatingForm(){
// Setting the page title
document.title = "Contact us";

// Selecting HTML elements
const form = document.querySelector("#c-form");
const popUp = document.querySelector("#popup");
const fName = document.querySelector("#fName");
const lName = document.querySelector("#lName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");

// Error div display
const fNameErr = document.querySelector(".fname")
const lNameErr = document.querySelector(".lname")
const emailErr = document.querySelector(".email")
const phoneErr = document.querySelector(".phone")
const messageErr = document.querySelector(".message")

const missing = document.querySelector(".active-alert");

// Function to validate email input in contact form
function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailPattern = regEx.test(email);
  return emailPattern;
}

// Function to create a case number
function caseNumber(length) {
  const randomNumLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += randomNumLet.charAt(Math.floor(Math.random() * randomNumLet.length));
  }

  return result;
}

// Function to validate the contact form
function formValidation(event) {
  event.preventDefault();

  missing.innerHTML = "* Please fill inn your First name"


  if(!fName === ""){
    missing.innerHTML = "";
    fName.focus();
    return false;
  }

  try {
  
    
  } catch (err) {
    
  }
  
  }
}