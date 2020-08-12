$(function () {

  // [首頁] blog text
  let textLength = $(window).width() > 768 ? 155 : 110;
  $('.blog__footer p').each(function (item, index) {
    let newText = $(this).text().slice(0, textLength) + '...';
    $(this).html(newText);
  })

  // [首頁] banner 輪播
  let websiteBannerSwiper = new Swiper('.website__banner .swiper-container', {
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // [首頁] pd-box1
  let pd1Swiper = new Swiper('#pd-box1 .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 40,
    simulateTouch: false,
    breakpoints: {
      767: {
        slidesPerView: 2,
        simulateTouch: true,
        spaceBetween: 8,
        navigation: {
          nextEl: '#pd-box1 .swiper-next',
          prevEl: '#pd-box1 .swiper-prev',
        },
      }
    }
  });
  // [首頁] pd-box2
  let pd2Swiper = new Swiper('#pd-box2 .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 40,
    simulateTouch: false,
    breakpoints: {
      767: {
        slidesPerView: 2,
        simulateTouch: true,
        spaceBetween: 8,
        navigation: {
          nextEl: '#pd-box2 .swiper-next',
          prevEl: '#pd-box2 .swiper-prev',
        },
      }
    }
  });
  // [首頁] pd-box3
  let pd3Swiper = new Swiper('#pd-box3 .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 40,
    simulateTouch: false,
    breakpoints: {
      767: {
        slidesPerView: 2,
        simulateTouch: true,
        spaceBetween: 8,
        navigation: {
          nextEl: '#pd-box3 .swiper-next',
          prevEl: '#pd-box3 .swiper-prev',
        },
      }
    }
  });
  // [首頁] blog 輪播
  let blogSlider = new Swiper('.blog__slider .swiper-container', {
    slidesPerView: 1,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.blog__slider .swiper-next',
      prevEl: '.blog__slider .swiper-prev',
    },
  });
});
