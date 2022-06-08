const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");
const visible = "visible";


export function modalActions(){
for (const e of openModal) {
  e.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(visible);
  });
}

for (const e of closeModal) {
  e.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(visible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal.visible")) {
    document.querySelector(".modal.visible").classList.remove(visible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && document.querySelector(".modal.visible")) {
    document.querySelector(".modal.visible").classList.remove(visible);
  }
});

}