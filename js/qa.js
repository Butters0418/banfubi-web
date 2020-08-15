$(function () {

  let activeTag = 'order';

  $(".website__qa--question:not([data-value='order'])").addClass('d-none')

  // pc click
  $('.website__qa--tag').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    activeTag = $(this).data('tag');
    slideQuestions();
  })

  // mobile select
  $('.website__qa--select select').on('change', function () {
    activeTag = $(this).val();
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
    currentQuestions.each(function () {
      $(this).removeClass('d-none').addClass('fadeInLeft')
    })
  }

})