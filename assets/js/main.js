(function($) {
  "use strict";
  
  // owlCarousel
  $(".hero").owlCarousel({
    loop: true,  
    items:1, 
    autoplay: true,
    smartSpeed: 1000,
    autoplaySpeed: 1000,
    navText: [
      '<i class="far fa-angle-left"></i>',
      '<i class="far fa-angle-right"></i>'
    ],
    nav: true,
    dots: false, 
    responsive: {
      0: {
        items: 1,  
      },
      767: {
        items: 1
      },
      992: {
        items: 1
      }
    },
  });
  $(".m_slider").owlCarousel({
    loop: true,
    rtl:true,
    margin: 10,    
    navText: [
      '<i class="far fa-angle-left"></i>',
      '<i class="far fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 2, 
        stagePadding: 5,
      },
      767: {
        items: 3
      },
      992: {
        items: 3
      }
    }
  });
  $(".blm_slider").owlCarousel({
    loop: true, 
    items: 1, 
    autoplay: true,
    smartSpeed: 1000,
    autoplaySpeed: 1000,
    navText: [
      '<i class="far fa-angle-left"></i>',
      '<i class="far fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  });
 
  // monile menu
  $(".menu-icon").click(function(){
    $(".mobile-menu").toggleClass('manu_active');
  });
 
  // nicenumber js
  $('input[type="number"]').niceNumber();
  
  // Nice-select
  $('select').niceSelect();


  // AOS animation
  AOS.init({ 
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 500, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  // preloader 
  $(window).on("load", function (){
    $('#loading').fadeOut(500);
  });

  // type js
  var typed4 = new Typed('#formElement', {
    strings: ['Search Products', 'Type here...',],
    typeSpeed: 100,
    backSpeed: 30,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true
  });
    
   

})(jQuery);
