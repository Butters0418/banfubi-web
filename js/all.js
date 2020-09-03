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



  // scroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    let target = $(this).attr('href');
    let targetTop = $(target).offset().top - 100;
    $('html, body').stop().animate({
      scrollTop: targetTop
    }, 300);
  });


  if ($(window).width() < 768) {
    $('#website__footer .collapse').removeClass('show');
  }
  $('#website__footer .collapse').on('show.bs.collapse', function () {
    $(this).prev().find('.footer__title--arrow').addClass('rotate')
  })
  $('#website__footer .collapse').on('hide.bs.collapse', function () {
    $(this).prev().find('.footer__title--arrow').removeClass('rotate')
  })

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

// $('.page-content').append('<section class="website__section section5" id="website__footer"></section>')