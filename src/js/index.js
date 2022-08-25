const elements = {
  womanCategory: document.querySelector(".category-card-woman h3 a"),
  kidCategory: document.querySelector(".category-card-kid h3 a"),
  closeModalBtn: document.querySelector(".out-modal__close"),
  outModalContainer: document.querySelector(".out-modal-container"),
  copyRightYear: document.querySelector(".date"),

  handleModalClick: (event) => {
    event.preventDefault();
    elements.outModalContainer.classList.toggle("show");
  },

  copyRight: () =>
    (elements.copyRightYear.innerHTML = new Date().getFullYear() + "."),
};

elements.womanCategory.addEventListener("click", elements.handleModalClick);
elements.kidCategory.addEventListener("click", elements.handleModalClick);
elements.closeModalBtn.addEventListener("click", elements.handleModalClick);
elements.copyRight();
