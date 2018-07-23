// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

window.onload = function() {
  Particles.init({
    selector: '.particles',
    color: '#fff',
    maxParticles: 200,
    sizeVariations: 2,
    connectParticles: false,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 100
        }
      }, {
        breakpoint: 375,
        options: {
          maxParticles: 80
        }
      }
    ]
  });
};

// var grid = $('.captive-portal').masonry({
//   columnWidth: 0,
//   itemSelector: '.grid-item',
//   percentPosition: true,
// });

var $grid = $('.captive-portal').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
});

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayHoverPause: false
  });
