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
        <a class="nav__section--logo" href="https://www.banfubi.com/"><img src="https://butters0418.github.io/banfubi-web/img/logo-white.png" alt="banhubi"></a>
        <ul class="nav__section--list">
          <li class="nav__section--logomb"><a href="https://www.banfubi.com/"><img src="https://butters0418.github.io/banfubi-web/img/logo-top2.png"></a></li>
          <li><a href="https://loobis.com.tw/">回到首頁</a></li>
          <li><a href="https://lin.ee/jqrmbv2">訂單查詢</a></li>
          <li><a href="https://loobis.com.tw/pages/%E9%97%9C%E6%96%BCloobis">品牌故事</a></li>
          <li><a href="https://loobis.com.tw/pages/%E9%96%80%E5%B8%82%E8%B3%87%E8%A8%8A">實體門市</a></li>
        </ul>
        <a href="javascript:;" class="nav__section--close"></a>
      </div>
    </div>
  </section>
  `;

  $(".page-sale").before(headerHtml);

  $(".nav__btn").on("click", function (e) {
    e.preventDefault();
    $(".nav__section").addClass("nav__section--show");
    $(".nav__section--close").fadeIn(200);
    $("body").addClass("nav--open");
  });

  $(".nav__section--close").on("click", function (e) {
    e.preventDefault();
    $(".nav__section--close").fadeOut(200);
    $(".nav__section").removeClass("nav__section--show");
    $("body").removeClass("nav--open");
  });
});
