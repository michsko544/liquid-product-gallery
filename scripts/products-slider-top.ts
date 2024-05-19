import 'swiper/css';

import '../styles/products-slider-top.scss';

import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

new Swiper('.x-products-slider-top__swiper', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 16,
  slidesPerView: 1.3,

  speed: 100,
  grabCursor: true,
  freeMode: true,

  breakpoints: {
    500: {
      slidesPerView: 2.3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3.3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3.3,
      spaceBetween: 24,
      speed: 200,
    },
    1240: {
      slidesPerView: 4.3,
      spaceBetween: 24,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
