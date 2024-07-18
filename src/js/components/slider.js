
import Swiper from 'swiper';
import 'swiper/css';
export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    sliderPerView: 'auto',
    spaceBetween: 32,
    loop: false,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      }
    }
  });
}