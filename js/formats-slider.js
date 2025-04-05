const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1280: {
      slidesPerView: 3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button.next",
    prevEl: ".slider-button.prev",
  },
});
