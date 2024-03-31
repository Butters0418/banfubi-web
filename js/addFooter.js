$(function () {
  // console.log('測試')
  let footerHtml = `<section id="website__footer" class="website__section section5">
      <div class="section__inner">
        <!-- pc footer logo  -->
        <div class="footer__logo pc">
          <img src="https://butters0418.github.io/banfubi-web/img/logo2.svg" alt="banfubi">
        </div>
        <!-- mb icon -->
        <div class="footer__social mb">
          <a href="https://www.facebook.com/Lovon.tw"><img src="https://butters0418.github.io/banfubi-web/img/fb.svg"></a>
          <a href="javascript:;" onclick="window.open('https://line.me/R/msg/text/?'+ (encodeURIComponent(document.title)) + '%0D%0A'+ (encodeURIComponent(location.href)), '_blank');"><img src="https://butters0418.github.io/banfubi-web/img/line.svg"></a>
          <a href="https://www.instagram.com/lovon_tw/"><img src="https://butters0418.github.io/banfubi-web/img/ig.svg"></a>
        </div>

        <div class="footer__collapse footer__aboutus">
          <p class="footer__title" data-toggle="collapse" href="#footer-1">ABOUT US <span class="mb footer__title--arrow"></span></p>
          <div class="collapse show" id="footer-1">
            <ul class=" footer__list">
              <li><a href="https://www.banfubi.com/">品牌故事</a></li>
              <li><a href="https://www.facebook.com/Lovon.tw">Facebook粉絲團 </a></li>
              <li><a href="https://lovonbaby.com/stores">實體門市 </a></li>
              <li><a href="https://www.banfubi.com/pages/privacy-policy">隱私權政策</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__collapse footer__qa">
          <p class="footer__title" data-toggle="collapse" href="#footer-2">Q&A <span class="mb footer__title--arrow"></span></p>
          <div class="collapse show" id="footer-2">
            <ul class="footer__list">
              <li><a href="https://www.banfubi.com/pages/%E4%BB%98%E6%AC%BE%E6%96%B9%E5%BC%8F">付款方式</a></li>
              <li><a href="https://www.banfubi.com/pages/出貨配送">出貨配送 </a></li>
              <li><a href="https://www.banfubi.com/pages/%E4%B8%83%E5%A4%A9%E9%91%91%E8%B3%9E%E6%9C%9F">七天鑑賞期</a></li>
              <li><a href="https://www.banfubi.com/pages/%E9%9B%BB%E5%AD%90%E7%99%BC%E7%A5%A8%E7%9B%B8%E9%97%9C">電子發票相關</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__collapse footer__contactus">
          <p class="footer__title" data-toggle="collapse" href="#footer-3">CONTACT US <span class="mb footer__title--arrow"></span></p>
          <div class="collapse show" id="footer-3">
            <ul class="footer__list">
              <li><a href="https://www.banfubi.com/">斑富比有限公司</a></li>
              <li>客服電話:(02)2581-9665</li>
              <li>服務時間:週一至週五 10:00-18:00 </li>
              <li>廠商合作:lulu@banfubi.com</li>
            </ul>
          </div>
        </div>

        <div class="footer__pay mb">
          <a href=""><img src="https://butters0418.github.io/banfubi-web/img/visa.svg"></a>
          <a href=""><img src="https://butters0418.github.io/banfubi-web/img/mastercard.svg"></a>
          <a href=""><img src="https://butters0418.github.io/banfubi-web/img/seven11.png"></a>
          <a href=""><img src="https://butters0418.github.io/banfubi-web/img/jcb.png"></a>
        </div>

        <div class="footer__copyright mb">
          <img src="https://butters0418.github.io/banfubi-web/img/logo-white.png">
          <p>2019-2022 © Banfubi Inc. All right reserved.</p>
        </div>

      </div>
    </section>`;
  $(".page-single").after(footerHtml);
  $(".page-archive").after(footerHtml);
  $(".page-sale").after(footerHtml);

  if ($(window).width() < 768) {
    $("#website__footer .collapse").removeClass("show");
  }
  $("#website__footer .collapse").on("show.bs.collapse", function () {
    $(this).prev().find(".footer__title--arrow").addClass("rotate");
  });
  $("#website__footer .collapse").on("hide.bs.collapse", function () {
    $(this).prev().find(".footer__title--arrow").removeClass("rotate");
  });

  let checkPrivacy =
    '<p class="check-privacy">* 按下送出後等同於接受「 <a href="https://www.banfubi.com.tw/pm6j8d" target="_blank">隱私權政策</a> 」及「<a href="https://www.banfubi.com.tw/terms" target="_blank">使用者條款</a> 」。</p>';
  let isStep3Hidden = true;

  // add privacy text
  setTimeout(() => addPrivacyText(), 500);

  function addPrivacyText() {
    // 一般單頁式
    $(".order-submit").before(checkPrivacy);

    // 燈箱式先加入
    $("#checkout .checkout-extra-help").after(checkPrivacy);
    $("#checkout .check-privacy").css("display", "none");

    $("#checkout").on("shown.bs.modal", checkStep3);
    $("#checkout [onclick^=checkout], #checkout button").on("click", checkStep3);

    function checkStep3() {
      isStep3Hidden = $("form.step3").is(":hidden");
      if (isStep3Hidden) {
        $("#checkout .check-privacy").css("display", "none");
      } else {
        $("#checkout .check-privacy").css("display", "block");
      }
    }
  }
});
