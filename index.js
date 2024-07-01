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
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".new-arrivals .swiper-button-next",
    prevEl: ".new-arrivals .swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Most Loved Swiper
let mostLovedSwiper = new Swiper(".most-loved .swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".most-loved .swiper-button-next",
    prevEl: ".most-loved .swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
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

  // 베가스 안쓴 코드
  $(document).ready(function () {
  $('.background1').hover(function () {
    $('.event-list').css('background-image', 'url("./assets/images/image/event-img1.jpg")');
  });

  $('.background1').mouseout(function () {
    $('.event-list').css('background-image', 'none');
  });

    $('.background2').hover(function () {
      $('.event-list').css('background-image', 'url("./assets/images/image/event-img2.jpg")');
    });

    $('.background2').mouseout(function () {
      $('.event-list').css('background-image', 'none');
    });

    $('.background3').hover(function () {
      $('.event-list').css('background-image', 'url("./assets/images/image/event-img3.jpg")');
    });

    $('.background3').mouseout(function () {
      $('.event-list').css('background-image', 'none');
    });

    $('.background4').hover(function () {
      $('.event-list').css('background-image', 'url("./assets/images/image/event-img4.jpg")');
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

  

