const myCarouselElement = document.querySelector('#section-6-carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
interval: 5000,
  touch: true,
  ride: "carousel",
})