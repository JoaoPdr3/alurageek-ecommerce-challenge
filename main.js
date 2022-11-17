const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  breakpoints: {
    500: {
      slidesPerView: 3,

    },
  }
});

// Fuctions Menu Expanded
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}