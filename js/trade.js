const Trade = document.querySelector(".backdrop");
const TradeBtnOpen = document.querySelector(".trade-section__button");
const TradeBtnClose = document.querySelector(".modal-form__close");

const tradeModalTrade = () => Trade.classList.toggle("backdrop-hidden");

TradeBtnOpen.addEventListener("click", tradeModalTrade);
TradeBtnClose.addEventListener("click", tradeModalTrade);
