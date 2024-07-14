$(function () {
  const logoData = {
    title: "banfubi",
    logoPC: "https://butters0418.github.io/banfubi-web/img/logo-white.png",
    logoMb: "https://butters0418.github.io/banfubi-web/img/logo-top2.png",
    link: "https://www.banfubi.com/",
  };
  const headerData = [
    {
      title: "全部商品",
      link: "https://banfubi.com/collections",
    },
    {
      title: "全部商品",
      link: "https://www.banfubi.com.tw/0djga7",
    },
    {
      title: "品牌故事",
      link: "https://www.lovonbaby.com/pages/about",
    },
    {
      title: "Q&A相關查詢",
      link: "https://www.banfubi.com/pages/%E5%B8%B8%E8%A6%8B%E5%95%8F%E9%A1%8",
    },
    {
      title: "實體門市",
      link: "https://banfubi.com/pages/%E9%BA%97%E5%AC%B0%E6%88%BF",
    },
  ];

  let headerHtml = `
    <section id="website-nav__container">
    <div class="website-nav">
      <a href="javascript:;" class="nav__btn mb">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div class="nav__section">
        <a class="nav__section--logo" href="${logoData.link}"><img src="${logoData.logoPC}" alt="${logoData.title}"></a>
        <ul class="nav__section--list">
          <li class="nav__section--logomb"><a href="${logoData.link}"><img src="${logoData.logoMb}" alt="${logoData.title}"></a></li>
          ${headerData.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`).join("")}
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
