export default function modal() {
  //!variables
  const womanCategory = document.querySelector(".category-card-woman h3 a");
  const kidCategory = document.querySelector(".category-card-kid h3 a");
  const closeModalBtn = document.querySelector(".out-modal__close");
  const outModalContainer = document.querySelector(".out-modal-container");

  //!if this variables exist, it will invoke function modal.
  if (womanCategory && kidCategory && outModalContainer) {
    function showModal(event) {
      event.preventDefault();
      outModalContainer.classList.toggle("show");
    }

    //!event listeners
    womanCategory.addEventListener("click", showModal);
    kidCategory.addEventListener("click", showModal);
    closeModalBtn.addEventListener("click", showModal);
  }
}
