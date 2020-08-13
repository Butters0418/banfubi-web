$(function () {
  $('.website__qa--question h3').on('click', function () {
    let $nextDiv = $(this).next('div');
    $nextDiv.toggleClass('show');
  })
})