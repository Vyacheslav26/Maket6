import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function slider() {
  return new Swiper('.swiper-primary', {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 7,
      clickable: true
    },

    breakpoints: {
      320: {
        enabled: true,
        loop: true,
        spaceBetween: 16,
        slidesPerView: 1.2
      },

      576: {
        enabled: true,
        loop: true,
        spaceBetween: 16,
        slidesPerView: 2
      },

      768: {
        enabled: false,
        loop: false,
        spaceBetween: 0,
        slidesPerView: 'auto'
      }
    }
  })
}

export { slider }
