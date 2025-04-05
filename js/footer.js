const footer = document.querySelector(".backdrop");
const footerBtnOpen = document.querySelector(".footer-section__button");
const footerBtnClose = document.querySelector(".modal-form__close");

const footerModal = () => footer.classList.toggle("backdrop-hidden");

footerBtnOpen.addEventListener("click", footerModal);
footerBtnClose.addEventListener("click", footerModal);
