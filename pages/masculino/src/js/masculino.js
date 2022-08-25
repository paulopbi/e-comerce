const elements = {
  dragonBallBtn: document.querySelector(".products-card-dragonball__button"),
  buyModal: document.querySelector(".buy-modal"),
  buyModalClose: document.querySelector(".buy-modal-close__btn"),
  copyRightYear: document.querySelector(".date"),
  buyNowBtn: document.querySelector(".buy-modal__btn"),

  handleModalClick: (event) => {
    //?add / remove the classlist 'show' then add display block / none on css.
    event.preventDefault();
    elements.buyModal.classList.add("show");
  },

  closeBtnClick: (event) => {
    //?remove the classlist 'show' then it will be display 'none' on css.
    event.preventDefault();
    elements.buyModal.classList.remove("show");
  },

  alertMsg: () =>
    //?return the alert with a 'thank you' message.
    window.alert("MUITO OBRIGADO POR TESTAR O MEU SITE!!"),

  copyRight: () =>
    //?copyRight - return the year and fill it on footer innerHTML.
    (elements.copyRightYear.innerHTML = new Date().getFullYear() + "."),
};

elements.dragonBallBtn.addEventListener("click", elements.handleModalClick);
elements.buyModalClose.addEventListener("click", elements.handleModalClick);
elements.buyNowBtn.addEventListener("click", elements.alertMsg);
elements.copyRight();
