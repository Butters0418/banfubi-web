$(function () {
  $('.page-content').append('<section class="code" id="website__footer"></section>')
  let footerHtml = `<section class="website__section section5">
      <div class="section__inner">
        <div class="container-fluid">
          <div class="row">
            <div class="col-3 col-sm-5 col-md-4">
              <div class="footer__logo">
                <img src="https://butters0418.github.io/banfubi-web/img/logo2.svg" alt="banfubi">
              </div>
            </div>
            <div class="col-md-2 pc">
              <p class="footer__title">關於我們</p>
              <ul class="footer__list">
                <li><a href="https://www.banfubi.com.tw/brandstory">品牌故事</a></li>
                <li><a href="">FB粉絲專頁 </a></li>
                <li><a href="https://www.banfubi.com.tw/ru9l56">實體門市 </a></li>
                <li><a href="https://www.banfubi.com.tw/pm6j8d">隱私權政策</a></li>
              </ul>
            </div>
            <div class="col-md-2 pc">
              <p class="footer__title">常見Q&A</p>
              <ul class="footer__list qalist">
                <li><a href="https://www.banfubi.com.tw/x7uc4m#pay">付款方式</a></li>
                <li><a href="https://www.banfubi.com.tw/x7uc4m#shipping">出貨配送 </a></li>
                <li><a href="https://www.banfubi.com.tw/x7uc4m#try">七天鑑賞期</a></li>
                <li><a href="https://www.banfubi.com.tw/x7uc4m#invoice">電子發票相關</a></li>
              </ul>
            </div>
            <div class="col-9 col-sm-7 col-md-4 text-md-center">
              <p class="footer__title pc">聯繫我們</p>
              <ul class="footer__list">
                <li>客服電話:(02)2581-9665</li>
                <li>服務時間:週一至週五 10:00-18:00 </li>
                <li>廠商合作:lulu@banfubi.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>`
  $('#website__footer').html(footerHtml);

});