$(function () {
  // img loading
  let imgs = document.images,
    len = imgs.length,
    counter = 0;
  [].forEach.call(imgs, function (img) {
    if (img.complete)
      incrementCounter();
    else
      img.addEventListener('load', incrementCounter, false);
  });
  function incrementCounter() {
    counter++;
    if (counter === len) {
      console.log('All img load')
    }
  }
  let loadingtime = 1000;
  function countDown() {
    console.log(loadingtime)
    loadingtime -= 200
    if (loadingtime < 0 || counter === len) {
      clearInterval(timer);
      $('.loading_mask').fadeOut(300);
    }
  }
  let timer = setInterval(countDown, 200);

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

  // [品牌故事 story] 
  let rate = $(window).width() > 768 ? 1 : 0.6;
  window.sr = ScrollReveal({ viewOffset: { bottom: 150 * rate }, });
  // [品牌故事 story] 自定義動畫集合
  sr.reveal('.story--fadeup', { origin: 'bottom', distance: '10px', duration: 500, delay: 100, reset: true, beforeReveal: countData });
  sr.reveal('.story--ani', { origin: 'bottom', distance: 0, afterReveal: storyAni })
  let storyData = [
    {
      val: 7,
      unit: 1
    },
    {
      val: 500,
      unit: 25,
    },
    {
      val: 35000,
      unit: 1400,
    }
  ]
  //[品牌故事 story] 計數器
  function countData() {
    $('.val').each(function (index) {
      [val, unit, item] = [storyData[index].val, storyData[index].unit, $(this)]
      startCount(val, unit, item);
    })
  }
  function startCount(val, unit, item) {
    let time = 0;
    function countDown() {
      item.text(time)

      if (time === val) {
        clearInterval(timer)
      }
      time += unit;
    }
    let timer = setInterval(countDown, 60);
  }
  //[品牌故事 story] 動畫
  let $storyLogo = $('.website__story--ani .story-logo'),
    $storyCircle = $('.website__story--ani .circle'),
    $text = $('.website__story--ani .text'),
    $triangle = $('.website__story--ani .triangle'),
    $slogan = $('.website__story--slogan p')
  function storyAni() {
    let tl = gsap.timeline();
    tl.to($storyCircle, { duration: 0.5, scale: 1 })
      .to($storyLogo, { duration: 0.5, opacity: 1, onComplete: startTriangleAni }, 0.3)
      .to($text, { duration: 0.5, opacity: 1, y: 0 }, 1.6)
      .to($slogan, { duration: 0.5, y: 0, opacity: 1 }, 1.8)
  }
  function startTriangleAni() {
    $triangle.addClass('triangle-ani')
  }




















  // scroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    let target = $(this).attr('href');
    let targetTop = $(target).offset().top - 100;
    $('html, body').stop().animate({
      scrollTop: targetTop
    }, 300);
  });





});


//1shop 自訂



// $(window).on('scroll', function () {
//   navAlpha();
// })
// function navAlpha() {
//   let $windowTop = $(window).scrollTop();
//   if ($windowTop > 50) {
//     $('.navbar').addClass('bg_white-alpha')
//     $('.website__top-bar').addClass('bg_main-alpha')
//   } else {
//     $('.navbar').removeClass('bg_white-alpha')
//     $('.website__top-bar').removeClass('bg_main-alpha')
//   }
// }



// body最上方
/* <script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js'></script> */

// body最下方
// <script>
//   $(window).on('scroll', function () {
//     navAlpha();
//   })
//   function navAlpha() {
//     let $windowTop = $(window).scrollTop();
//     if ($windowTop > 80) {
//     $('.navbar').addClass('bg_white-alpha')
//       $('.website__top-bar').addClass('bg_main-alpha')
//     } else {
//     $('.navbar').removeClass('bg_white-alpha')
//       $('.website__top-bar').removeClass('bg_main-alpha')
//     }
//   }
// </script>