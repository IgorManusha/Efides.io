const contact = document.querySelector(".backdrop");
const contactBtnOpen = document.querySelector(".still-section__button");
const contactBtnClose = document.querySelector(".modal-form__close");

const contactModal = () => contact.classList.toggle("backdrop-hidden");

contactBtnOpen.addEventListener("click", contactModal);
contactBtnClose.addEventListener("click", contactModal);
