const formVisa = document.querySelector("#form-visa");
const formMaster = document.querySelector("#form-master");
const formPayPal = document.querySelector("#form-paypal");
const formBill = document.querySelector("#form-billing");

function contentFactory(tagName, id) {
 const container = document.querySelector(tagName);
 const form = document.createElement("form");
 container.append(form);
 form.classList.add("payment-form");
 form.id = id;
 form.action = "#";
 form.method = "post";

 return container;
}

export function selectPayment() {
 document.addEventListener("click", (e) => {
  const visa = formVisa;
  const mastercard = formMaster;
  const paypal = formPayPal;
  const billing = formBill;

  if (e.target === document.querySelector("#visa")) {
   visa.classList.remove("hidden");
   visa.innerHTML = `<form class="payment-form" id="visa-form" action="#" method="post">
   <i class="fa-brands fa-cc-visa"></i>
  <input id="name" type="text" inputmethod="text" placeholder="Cardholder's name" class="payment-input" />
  <input id="cardNumber" type="text" inputmethod="text" placeholder="Card Number" class="payment-input" />
  <div id="date">
   <input type="numeric" inputmethod="numeric" placeholder="mm" class="payment-input" id="mm" />
   <span class="space"> / </span>
   <input type="numeric" inputmethod="numeric" placeholder="yyyy" class="payment-input" id="yyyy"/>
  </div>
  <input id="cvv" type="text" inputmethod="numeric" placeholder="CVV" class="payment-input" />
 </form>
 <button id="button">Pay</button>`;

   mastercard.classList.add("hidden");
  //  paypal.classList.add("hidden");
   billing.classList.add("hidden");
  }

  if (e.target === document.querySelector("#mastercard")) {
   mastercard.classList.remove("hidden");
   mastercard.innerHTML = `<form class="payment-form" id="mastercard-form" action="#" method="post">
   <i class="fa-brands fa-cc-mastercard"></i>
   <input id="name" type="text" inputmethod="text" placeholder="Cardholder's name" class="payment-input" />
   <input id="cardNumber" type="text" inputmethod="text" placeholder="Card Number" class="payment-input" />
   <div id="date">
   <input type="numeric" inputmethod="numeric" placeholder="mm" class="payment-input" id="mm" />
   <span class="space"> / </span>
   <input type="numeric" inputmethod="numeric" placeholder="yyyy" class="payment-input" id="yyyy" />
   </div>
   <input id="cvv" type="text" inputmethod="numeric" placeholder="CVV" class="payment-input" />
  </form>
  <button id="button">Pay</button>`;
  
   visa.classList.add("hidden");
  //  paypal.classList.add("hidden");
   billing.classList.add("hidden");
  }

  if (e.target === document.querySelector("#paypal")) {
   paypal.classList.remove("hidden");
   paypal.innerHTML = `<form class="payment-form" id="paypal-form" action="#" method="post">
   <i class="fa-brands fa-cc-paypal"></i>
   <input id="name" type="text" inputmethod="text" placeholder="Cardholder's name" class="payment-input" />
   <div id="date">
    <input type="numeric" inputmethod="numeric" placeholder="mm" class="payment-input" />
    <span class="space"> / </span>
    <input type="numeric" inputmethod="numeric" placeholder="yyyy" class="payment-input" />
   </div>
   <input id="cvv" type="text" inputmethod="numeric" placeholder="CVV" class="payment-input" />
   <button id="button">Pay</button>
  </form>`;

   visa.classList.add("hidden");
   mastercard.classList.add("hidden");
   billing.classList.add("hidden");
  }

  if (e.target === document.querySelector("#bill")) {
   billing.classList.remove("hidden");
   billing.innerHTML = `<form class="payment-form" id="bil-form" action="#" method="post">
   <i class="fa-solid fa-file-invoice-dollar"></i>
   <input type="text" name="firstName" class="payment-input" inputmethod="text" placeholder="First Name" />
   <input type="text" name="lastName" class="payment-input" inputmethod="text" placeholder="Last Name" />
   <input type="text" name="adress" class="payment-input" inputmethod="text" placeholder="Adress" />
   <input type="numeric" name="zip" class="payment-input" inputmethod="numeric" placeholder="Zip-code" />
   <input type="text" name="city" class="payment-input" inputmethod="text" placeholder="City name" />
   <button id="button">Pay</button>
  </form>`;

   visa.classList.add("hidden");
   mastercard.classList.add("hidden");
  //  paypal.classList.add("hidden");
  }
 });
}
