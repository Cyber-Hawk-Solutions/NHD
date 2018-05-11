$(function(){

  // Initializing the swiper plugin for the slider.
  // Read more here: http://idangero.us/swiper/api/
  
  var mySwiper = new Swiper ('.swiper-container', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    paginationClickable: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
    
});