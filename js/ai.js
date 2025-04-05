const ai = document.querySelector(".backdrop");
const aiBtnOpen = document.querySelector(".ai-section__button");
const aiBtnClose = document.querySelector(".modal-form__close");

const aiModal = () => ai.classList.toggle("backdrop-hidden");

aiBtnOpen.addEventListener("click", aiModal);
aiBtnClose.addEventListener("click", aiModal);
