const scrollUp = () => {
  const scrollUp = document.querySelector(".scrollButton");
  this.scrollY >= 700
    ? scrollUp.classList.add("scrollButtonShow")
    : scrollUp.classList.remove("scrollButtonShow");
};

window.addEventListener("scroll", scrollUp);
