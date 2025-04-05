const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".hero-section__button");
const modalBtnClose = document.querySelector(".modal-form__close");

const toggleModal = () => modal.classList.toggle("backdrop-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
