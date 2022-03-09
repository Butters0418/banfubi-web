$(function () {
  let footerHtml = `<section id="website__footer" class="website__section section5">
      <div class="section__inner">
        <!-- pc footer logo  -->
        <div class="footer__logo pc">
          <img src="https://butters0418.github.io/banfubi-web/img/logo2.svg" alt="banfubi">
        </div>
        <!-- mb icon -->
        <div class="footer__social mb">
          <a href="javascript:;" onclick="openContact('facebook','647460302534188')"><img src="https://butters0418.github.io/banfubi-web/img/fb.svg"></a>
          <a href="javascript:;" onclick="window.open('https://line.me/R/msg/text/?'+ (encodeURIComponent(document.title)) + '%0D%0A'+ (encodeURIComponent(location.href)), '_blank');"><img src="https://butters0418.github.io/banfubi-web/img/line.svg"></a>
          <a href=""><img src="https://butters0418.github.io/banfubi-web/img/ig.svg"></a>
        </div>

        <div class="footer__collapse footer__aboutus">
          <p class="footer__title" data-toggle="collapse" href="#footer-1">ABOUT US <span class="mb footer__title--arrow"></span></p>
          <div class="collapse show" id="footer-1">
            <ul class=" footer__list">
              <li><a href="https://www.banfubi.com.tw/brandstory">品牌故事</a></li>
              <li><a href="javascript:;" onclick="openContact('facebook','647460302534188')">Facebook粉絲團 </a></li>
              <li><a href="https://www.banfubi.com.tw/ru9l56">myheart實體門市 </a></li>
              <li><a href="https://www.banfubi.com.tw/pm6j8d">隱私權政策</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__collapse footer__qa">
          <p class="footer__title" data-toggle="collapse" href="#footer-2">Q&A <span class="mb footer__title--arrow"></span></p>
          <div class="collapse show" id="footer-2">
            <ul class="footer__list">
              <li><a href="https://www.banfubi.com.tw/x7uc4m#pay">付款方式</a></li>
              <li><a href="https://www.banfubi.com.tw/x7uc4m#shipping">出貨配送 </a></li>
              <li><a href="https://www.banfubi.com.tw/x7uc4m#try">七天鑑賞期</a></li>
              <li><a href="https://www.banfubi.com.tw/x7uc4m#invoice">電子發票相關</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__collapse footer__contactus">
          <p class="footer__title" data-toggle="collapse" href="#footer-3">CONTACT US <span class="mb footer__title--arrow"></span></p>
          <div class="collapse show" id="footer-3">
            <ul class="footer__list">
              <li><a href="https://www.banfubi.com/" target="_blank">斑富比有限公司</></li>
              <li>客服電話:(02)2581-9665</li>
              <li>服務時間:週一至週五 10:00-18:00 </li>
              <li>廠商合作:lulu@banfubi.com</li>
            </ul>
          </div>
        </div>

        <div class="footer__pay mb">
          <a href=""><img src="https://butters0418.github.io/banfubi-web/img/visa.svg"></a>
          <a href=""><img src="https://butters0418.github.io/banfubi-web/img/mastercard.svg"></a>
          <a href=""><img src="https://butters0418.github.io/banfubi-web/img/linepay.png"></a>
          <a href=""><img src="https://butters0418.github.io/banfubi-web/img/newebpay.png"></a>
          <a href=""><img src="https://butters0418.github.io/banfubi-web/img/ssl.png"></a>
        </div>

        <div class="footer__copyright mb">
          <img src="https://butters0418.github.io/banfubi-web/img/logo-white.png">
          <p>©2020 Banfubi Inc. All right reserved.</p>
        </div>

      </div>
    </section>`;
  $('.page-content').after(footerHtml);

  if ($(window).width() < 768) {
    $('#website__footer .collapse').removeClass('show');
  }
  $('#website__footer .collapse').on('show.bs.collapse', function () {
    $(this).prev().find('.footer__title--arrow').addClass('rotate');
  });
  $('#website__footer .collapse').on('hide.bs.collapse', function () {
    $(this).prev().find('.footer__title--arrow').removeClass('rotate');
  });

  let checkPrivacy =
    '<p class="check-privacy">* 按下送出後等同於接受「 <a href="https://www.banfubi.com.tw/pm6j8d" target="_blank">隱私權政策</a> 」及「<a href="https://www.banfubi.com.tw/terms" target="_blank">使用者條款</a> 」。</p>';
  let isStep3Hidden = true;

  // add privacy text
  setTimeout(() => addPrivacyText(), 500);

  function addPrivacyText() {
    // 一般單頁式
    $('.order-submit').before(checkPrivacy);

    // 燈箱式先加入
    $('#checkout .checkout-extra-help').after(checkPrivacy);
    $('#checkout .check-privacy').css('display', 'none');

    $('#checkout').on('shown.bs.modal', checkStep3);
    $('#checkout [onclick^=checkout], #checkout button').on('click', checkStep3);

    function checkStep3() {
      isStep3Hidden = $('form.step3').is(':hidden');
      if (isStep3Hidden) {
        $('#checkout .check-privacy').css('display', 'none');
      } else {
        $('#checkout .check-privacy').css('display', 'block');
      }
    }
  }
});
