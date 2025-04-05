const swiperCurva = new Swiper(".swiperCurva", {
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
    nextEl: ".slider-buttonCurva.nextCurva",
    prevEl: ".slider-buttonCurva.prevCurva",
  },
});
