$(function () {

  let activeTag = 'order';
  $(".website__qa--question:not([data-value='order'])").addClass('d-none')

  $('.website__qa--tag').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    activeTag = $(this).data('tag');

    let currentQuestions = $('.website__qa--question').filter(function () {
      return $(this).data('value') === activeTag;
    })

    $('.website__qa--question').addClass('d-none').find('.collapse').removeClass('show')
    currentQuestions.each(function () {
      $(this).removeClass('d-none').addClass('fadeInLeft')
    })

  })
})