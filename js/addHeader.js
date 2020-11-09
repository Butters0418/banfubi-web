$(function () {
  let headerHtml = `
    <section id="website-nav__container">
    <div class="website-nav">
      <a href="javascript:;" class="nav__btn mb">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div class="nav__section">
        <a class="nav__section--logo" href="https://www.banfubi.com.tw/"><img src="https://butters0418.github.io/banfubi-web/img/logo-white.png" alt="banhubi"></a>
        <ul class="nav__section--list">
          <li class="nav__section--logomb"><a href="https://www.banfubi.com.tw/"><img src="https://butters0418.github.io/banfubi-web/img/logo-top.png"></a></li>
          <li><a href="">全部商品</a></li>
          <li><a href="">品牌分類</a></li>
          <li><a href="">商品分類</a></li>
          <li><a href="">部落客推薦</a></li>
        </ul>
        <a href="javascript:;" class="nav__section--close"></a>
      </div>
    </div>
  </section>
  `;
  $('.page-content').before(headerHtml);


  $('.nav__btn').on('click', function (e) {
    e.preventDefault();
    $('.nav__section').addClass('nav__section--show');
    $('.nav__section--close').fadeIn(200);
    $('body').addClass('nav--open')
  })

  $('.nav__section--close').on('click', function (e) {
    e.preventDefault();
    $('.nav__section--close').fadeOut(200);
    $('.nav__section').removeClass('nav__section--show');
    $('body').removeClass('nav--open')
  })

});