$(function () {
  activeTag = location.hash ? location.hash.split("#")[1] : 'order'
  console.log(activeTag);

  $(`[data-tag="${activeTag}"]`).addClass('active').siblings().removeClass('active');
  $('.website__qa--select select').val(activeTag)

  // pc click
  $('.website__qa--tag').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    activeTag = $(this).data('tag');
    location.hash = `#${activeTag}`
    slideQuestions();
  })

  // mobile select
  $('.website__qa--select select').on('change', function () {
    activeTag = $(this).val();
    location.hash = `#${activeTag}`;
    changeIcon();
    slideQuestions();
  })

  function changeIcon() {
    switch (activeTag) {
      case 'order':
        $('.select-icon i').attr('class', 'fas fa-paste')
        break;
      case 'pay':
        $('.select-icon i').attr('class', 'fas fa-wallet')
        break;
      case 'shipping':
        $('.select-icon i').attr('class', 'fas fa-truck')
        break;
      case 'try':
        $('.select-icon i').attr('class', 'fas fa-box-open')
        break;
      case 'invoice':
        $('.select-icon i').attr('class', 'fas fa-receipt')
        break;
    }
    // END switch
  }


  // slidequestions
  function slideQuestions() {
    let currentQuestions = $('.website__qa--question').filter(function () {
      return $(this).data('value') === activeTag;
    })
    $('.website__qa--question').addClass('d-none').find('.collapse').removeClass('show')
    $('.website__qa--question h3 i').removeClass('rotate  ')
    currentQuestions.each(function () {
      $(this).removeClass('d-none').addClass('fadeInLeft')
    })
  }


  $('.collapse').on('show.bs.collapse', function () {
    $(this).prev().find('i').addClass('rotate')
  })
  $('.collapse').on('hide.bs.collapse', function () {
    $(this).prev().find('i').removeClass('rotate')
  })

  slideQuestions();


  // setTimeout(() => {
  //   $('.qalist a').on('click', function (e) {
  //     e.preventDefault();
  //     let href = $(this).attr('href');
  //     console.log(href)
  //     location.href = href;
  //     location.reload();
  //   })
  // }, 500);
})