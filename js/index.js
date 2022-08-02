const year = document.querySelector(".date");
const modalContainer = document.querySelector(".out-modal-container");
const womanCard = document.querySelector(".products-card-woman");
const kidCard = document.querySelector(".products-card-kid");
const modalCloseBtn = document.querySelector(".out-modal__close");

// !copyRightFunction - select the date class and fill the innerHTML with the current year in the copyright footer.
function copyRightYear() {
  return year.innerHTML = new Date().getFullYear() + ".";
}

copyRightYear();

// !openModal - open the modal, add click event listener and when you click in the link/div it will open the 'out of stock' message.
function openModal(event) {
  event.preventDefault();
  modalContainer.classList.add("show");
}

womanCard.addEventListener("click", openModal);
kidCard.addEventListener("click", openModal);

// !closeModal - it will close the modal when you click on modal btn 'fechar/close'.
function closeModal(event) {
  event.preventDefault();
  modalContainer.classList.remove("show");
}

modalCloseBtn.addEventListener("click", closeModal);
