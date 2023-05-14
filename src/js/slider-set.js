
import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import fondsInfo from './api/fonds-info.js';

Swiper.use([Navigation]);

function generateSlides() {
  // const slidesPerView = 3; // Количество слайдов, видимых одновременно
  // const initialSlides = fondsInfo.slice(0, 8);

 

  const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 25,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // freeMode: true
  });

   fondsInfo.forEach((slide, index) => {
     const slideHTML = `
      <div class="swiper-slide">
        <div class="slide-number">${index + 1}</div>
        <a href="${slide.url}">
          <img src="${slide.img.imageUrl.href}" alt="${slide.title}">
        </a>
      </div>
    `;
     document
       .querySelector('.swiper-wrapper')
       .insertAdjacentHTML('beforeend', slideHTML);
   });
  
  // const nextButton = document.querySelector('.swiper-button-next');
  // const prevButton = document.querySelector('.swiper-button-prev');

  // nextButton.addEventListener('click', () => {
  //   swiper.slideNext();
  // });

  // prevButton.addEventListener('click', () => {
  //   swiper.slidePrev();
  // });

  swiper.update();
}
// generateSlides();

document.addEventListener('DOMContentLoaded', generateSlides);
