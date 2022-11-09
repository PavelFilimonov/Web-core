import Swiper, { Pagination } from 'swiper';

Swiper.use(Pagination);

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 768) {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      slidesPerView: 1.3,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
});
