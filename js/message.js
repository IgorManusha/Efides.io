const form = document.querySelector(".modal-form");
const backdropHidden = document.querySelector(".backdrop");
const messageSuccess = document.querySelector(".form-message__container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Igor Manusha Middle Frontend Developer");
  messageSuccess.classList.add("form-message__container--show");
  backdropHidden.classList.add("backdrop-hidden");

  setTimeout(() => {
    messageSuccess.classList.remove("form-message__container--show");
  }, 1800);
});
