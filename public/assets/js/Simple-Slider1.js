$(function(){

  // Initializing the swiper plugin for the slider.
  // Read more here: http://idangero.us/swiper/api/
  
  var mySwiper = new Swiper ('.swiper-container', {
    autoplay: 4000,
    loop: true,
    disableOnInteraction: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });
    
});