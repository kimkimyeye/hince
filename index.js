// a href
$(document).ready(function () {
  $('a[href="#"]').on('click', function (event) {
    event.preventDefault();
  });
});


//  main Swiper
let mainSwiper = new Swiper(".mainSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// New Arrivals Swiper
let newArrivalsSwiper = new Swiper(".new-arrivals .swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".new-arrivals .swiper-button-next",
    prevEl: ".new-arrivals .swiper-button-prev",
  },
});

// Most Loved Swiper
let mostLovedSwiper = new Swiper(".most-loved .swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".most-loved .swiper-button-next",
    prevEl: ".most-loved .swiper-button-prev",
  },
});

//collectionSwiper
let collectionSwiper = new Swiper(".collectionSwiper", {
  direction: "vertical",
  slidesPerView: 1,
  // mousewheel: true,
  pagination: {
    el: ".collectionSwiper .swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".collectionSwiper .swiper-button-next",
    prevEl: ".collectionSwiper .swiper-button-prev",
  },
});

// 베가스 사용한 코드
  // $(document).ready(function () {
  //   $('.background1').hover(function () {
  //     $('.event-list').vegas({
  //       delay: 1500,
  //       timer: false,
  //       // firstTransition: 'fade',
  //         slides: [
  //             { src: './assets/images/image/event-img1.jpg' },
  //             { src: './assets/images/image/event-img1-2.jpg' },
  //             { src: './assets/images/image/event-img1-3.jpg' },
  //             { src: './assets/images/image/event-img1-4.jpg' }
  //         ]
  //     });
  // });
  
  // $('.background1').mouseout(function () {
  //     $('.event-list').vegas('destroy');
  // });

    
  //   $('.background2').hover(function () {
  //     $('.event-list').vegas({
  //       delay: 1500,
  //       timer: false,
  //       // firstTransition: 'fade',
  //         slides: [
  //             { src: './assets/images/image/event-img4.jpg' },
  //             { src: './assets/images/image/event-img3.jpg' },
  //             { src: './assets/images/image/event-img2.jpg' },
  //             { src: './assets/images/image/event-img1.jpg' }
  //         ]
  //     });
  // });
  
  // $('.background2').mouseout(function () {
  //     $('.event-list').vegas('destroy');
  // });

    
  //   $('.background3').hover(function () {
  //     $('.event-list').vegas({
  //       timer: false,
  //       delay: 1500,
  //       // firstTransition: 'fade',
  //         slides: [
  //             { src: './assets/images/image/event-img1.jpg' },
  //             { src: './assets/images/image/event-img2.jpg' },
  //             { src: './assets/images/image/event-img3.jpg' },
  //             { src: './assets/images/image/event-img4.jpg' }
  //         ]
  //     });
  // });
  
  // $('.background3').mouseout(function () {
  //     $('.event-list').vegas('destroy');
  // });

    
  //   $('.background4').hover(function () {
  //     $('.event-list').vegas({
  //       timer: false,
  //       delay: 1500,
  //       // firstTransition: 'fade',
  //         slides: [
  //             { src: './assets/images/image/event-img2.jpg' },
  //             { src: './assets/images/image/event-img3.jpg' },
  //             { src: './assets/images/image/event-img1.jpg' },
  //             { src: './assets/images/image/event-img2.jpg' }
  //         ]
  //     });
  // });
  
  // $('.background4').mouseout(function () {
  //     $('.event-list').vegas('destroy');
  // });
// });

  // 베가스 안쓴 코드
  $(document).ready(function () {
  $('.background1').hover(function () {
    $('.event-list').css('background-image', 'url("./assets/images/image/event-img1.jpg")');
  });

  $('.background1').mouseout(function () {
    $('.event-list').css('background-image', 'none');
  });

    $('.background2').hover(function () {
      $('.event-list').css('background-image', 'url("./assets/images/image/event-img5.jpg")');
    });

    $('.background2').mouseout(function () {
      $('.event-list').css('background-image', 'none');
    });

    $('.background3').hover(function () {
      $('.event-list').css('background-image', 'url("./assets/images/image/event-img2.jpg")');
    });

    $('.background3').mouseout(function () {
      $('.event-list').css('background-image', 'none');
    });

    $('.background4').hover(function () {
      $('.event-list').css('background-image', 'url("./assets/images/image/event-img7.jpg")');
    });

    $('.background4').mouseout(function () {
      $('.event-list').css('background-image', 'none');
    });
  });

  $(document).ready(function () {
    $('.event-list a').hover(
      function () {
        $('.event-list ul').addClass('event-hovered');
      },
      function () {
        $('.event-list ul').removeClass('event-hovered');
      }
    );
  });

  

