$(function () {
  setTimeout(() => {
    $('.loading_mask').addClass('fadeOut');
  }, 300);

  let textLength = $(window).width() > 768 ? 155 : 110;
  $('.blog__footer p').each(function (item, index) {
    let newText = $(this).text().slice(0, textLength) + '...';
    $(this).html(newText);
  })
  //banner 輪播
  var websiteBannerSwiper = new Swiper('.website__banner .swiper-container', {
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

  // pd-box1
  var pd1Swiper = new Swiper('.pd-box1 .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 40,
    simulateTouch: false,
    breakpoints: {
      767: {
        slidesPerView: 2,
        simulateTouch: true,
        spaceBetween: 8,
        navigation: {
          nextEl: '.pd-box1 .swiper-next',
          prevEl: '.pd-box1 .swiper-prev',
        },
      }
    }
  });
  // pd-box2
  var pd2Swiper = new Swiper('.pd-box2 .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 40,
    simulateTouch: false,
    breakpoints: {
      767: {
        slidesPerView: 2,
        simulateTouch: true,
        spaceBetween: 8,
        navigation: {
          nextEl: '.pd-box2 .swiper-next',
          prevEl: '.pd-box2 .swiper-prev',
        },
      }
    }
  });
  // pd-box3
  var pd3Swiper = new Swiper('.pd-box3 .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 40,
    simulateTouch: false,
    breakpoints: {
      767: {
        slidesPerView: 2,
        simulateTouch: true,
        spaceBetween: 8,
        navigation: {
          nextEl: '.pd-box3 .swiper-next',
          prevEl: '.pd-box3 .swiper-prev',
        },
      }
    }
  });
  // blog
  var blogSlider = new Swiper('.blog__slider .swiper-container', {
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
  // scroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    let target = $(this).attr('href');
    let targetTop = $(target).offset().top - 100;
    $('html, body').stop().animate({
      scrollTop: targetTop
    }, 300);
  });
})