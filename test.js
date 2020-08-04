var $jscomp = {
  scope: {},
  findInternal: function (a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
      var f = a[e];
      if (b.call(c, f, e, a)) return {
        i: e,
        v: f
      }
    }
    return {
      i: -1,
      v: void 0
    }
  }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
  if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
  a != Array.prototype && a != Object.prototype && (a[b] = c.value)
};
$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, b, c, d) {
  if (b) {
    c = $jscomp.global;
    a = a.split(".");
    for (d = 0; d < a.length - 1; d++) {
      var e = a[d];
      e in c || (c[e] = {});
      c = c[e]
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d && null != b && $jscomp.defineProperty(c, a, {
      configurable: !0,
      writable: !0,
      value: b
    })
  }
};
$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (a, c) {
    return $jscomp.findInternal(this, a, c).v
  }
}, "es6-impl", "es3");
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () { };
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function (a) {
  return $jscomp.SYMBOL_PREFIX + (a || "") + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.iterator;
  a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {
    configurable: !0,
    writable: !0,
    value: function () {
      return $jscomp.arrayIterator(this)
    }
  });
  $jscomp.initSymbolIterator = function () { }
};
$jscomp.arrayIterator = function (a) {
  var b = 0;
  return $jscomp.iteratorPrototype(function () {
    return b < a.length ? {
      done: !1,
      value: a[b++]
    } : {
        done: !0
      }
  })
};
$jscomp.iteratorPrototype = function (a) {
  $jscomp.initSymbolIterator();
  a = {
    next: a
  };
  a[$jscomp.global.Symbol.iterator] = function () {
    return this
  };
  return a
};
$jscomp.array = $jscomp.array || {};
$jscomp.iteratorFromArray = function (a, b) {
  $jscomp.initSymbolIterator();
  a instanceof String && (a += "");
  var c = 0,
    d = {
      next: function () {
        if (c < a.length) {
          var e = c++;
          return {
            value: b(e, a[e]),
            done: !1
          }
        }
        d.next = function () {
          return {
            done: !0,
            value: void 0
          }
        };
        return d.next()
      }
    };
  d[Symbol.iterator] = function () {
    return d
  };
  return d
};
$jscomp.polyfill("Array.prototype.keys", function (a) {
  return a ? a : function () {
    return $jscomp.iteratorFromArray(this, function (a) {
      return a
    })
  }
}, "es6-impl", "es3");
var _isGoogleAnalytics = !1,
  _isFacebookPixel = !1,
  _iphoneH = 0,
  _fixed_navbar_height = 0,
  _PriceBase_Prefix = "",
  _PriceBase_Suffix = "",
  _PriceSpecial_Prefix = "",
  _PriceSpecial_Suffix = "",
  cartData = [],
  cartTotal = 0,
  cartItemsTotal = 0,
  cartProductNum = 0;
$(function () {
  setViewH();
  $(window).resize(function () {
    setViewH()
  });
  $.fancybox.defaults.hash = !1;
  $.fancybox.defaults.buttons = ["close"];
  $(window).on("hashchange", function () {
    var a = window.location.hash.substring(1),
      b = getUrlParameterHash("Type"),
      c = getUrlParameterHash("ID");
    if (null == a || "" == a) $(".modal").modal("hide");
    else switch (b) {
      case "Product":
        openViewProductModal(c);
        break;
      case "Discount":
        openViewProductBundleModal(c)
    }
  })
});

function getUrlParameter(a) {
  var b = decodeURIComponent(window.location.search.substring(1)).split("&"),
    c, d;
  if (1 == b.length && "" == b) return "";
  for (d = 0; d < b.length; d++)
    if (c = b[d].split("="), c[0] === a) return void 0 === c[1] ? !0 : c[1]
}

function getUrlParameterHash(a) {
  var b = decodeURIComponent(window.location.hash.substring(1)).split("&"),
    c, d;
  if (1 == b.length && "" == b) return "";
  for (d = 0; d < b.length; d++)
    if (c = b[d].split("="), c[0] === a) return void 0 === c[1] ? !0 : c[1]
}
$.validator.addMethod("mobleTW", function (a, b) {
  return 1 == Number(pageData.form.CheckoutForm_verify) ? this.optional(b) || a.match(/^09[0-9]{8}$/) : !0
}, "\u8acb\u8f38\u516509\u958b\u982d\u7684\u624b\u6a5f\u865f\u78bc");
$.validator.addMethod("phoneTW", function (a, b) {
  return 2 == Number(pageData.form.CheckoutForm_verify) ? this.optional(b) || a.match(/^0[2-8]{2}[0-9]{7,8}$/) : !0
}, "\u8acb\u8f38\u5165\u5305\u542b\u5340\u57df\u865f\u78bc0x\u958b\u982d\u7684\u5e02\u5167\u96fb\u8a71");
$.validator.addMethod("mobleOrPhoneTW", function (a, b) {
  return 3 == Number(pageData.form.CheckoutForm_verify) ? this.optional(b) || a.match(/^09[0-9]{8}$/) || a.match(/^0[2-8]{2}[0-9]{7,8}$/) : !0
}, "\u8acb\u8f38\u516509\u958b\u982d\u7684\u624b\u6a5f\u865f\u78bc \u6216 \u5305\u542b\u5340\u57df\u865f\u78bc0x\u958b\u982d\u7684\u5e02\u5167\u96fb\u8a71");
$.validator.addMethod("noHTML", function (a, b) {
  return this.optional(b) || !a.match(/<|>+/g)
}, "\u4e0d\u80fd\u4f7f\u7528HTML\u8a9e\u6cd5<>");

function btnLoading(a) {
  if ($(a).find("i").is("i")) {
    var b = $(a).find("i");
    $(a).attr("data-icon", b.attr("class"));
    b.remove()
  }
  $(a).is(".loading-dark") ? $(a).prepend('<div class="progress-circle-indeterminate progress-circle-info loading"></div>') : $(a).prepend('<div class="progress-circle-indeterminate loading"></div>');
  $(a).prop("disabled", !0)
}

function btnReset(a) {
  $(a).find(".loading").remove();
  $(a).prop("disabled", !1);
  var b = $(a).attr("data-icon");
  "" !== b && ($(a).attr("data-icon", ""), $(a).prepend('<i class="' + b + '"></i>'))
}

function setCookie(a, b) {
  var c = new Date;
  c.setTime(c.getTime() + 2592E6);
  document.cookie = a + "=" + b + ";expires=" + c.toUTCString() + ";path=/"
}

function getCookie(a) {
  return (a = document.cookie.match("(^|;) ?" + a + "=([^;]*)(;|$)")) ? a[2] : null
}

function setViewH(a) {
  a = $(window).height();
  576 > $(window).width() ? $(".view .content-scroll").css("height", a) : $(".view .content-scroll").css("height", "auto");
  fixIphone()
}

function fixIphoneXInput() {
  var a = window.navigator.userAgent;
  if (a.match(/iPad/i) || a.match(/iPhone/i)) $("#checkout").on("shown.bs.modal", function () {
    $("body").addClass("fixios")
  }), $("#checkout").on("hidden.bs.modal", function () {
    $("body").removeClass("fixios")
  })
}

function toggleChatList(a) {
  a = $(a).closest(".chat");
  var b = 0;
  a.is(".active") ? (a.removeClass("active"), $.map(a.find(".chat-list li"), function (a) {
    $(a).delay(b).fadeOut(200);
    b += 100
  })) : (a.addClass("active"), $.map(a.find(".chat-list li").get().reverse(), function (a) {
    $(a).delay(b).fadeIn(200);
    b += 100
  }))
}

function toggleHelp(a) {
  $(a).closest(".checkout-help").toggleClass("active")
}

function openContact(a, b) {
  switch (a) {
    case "line":
      return window.open(b);
    case "facebook":
      return window.open("https://m.me/" + b);
    case "telegram":
      return window.open("https://t.me/" + b);
    case "email":
      return location.href = "mailto:" + b;
    case "phone":
      return location.href = "tel:" + b;
    case "wechat":
      $("#wechat .modal-text").html("<h4>\u5fae\u4fe1ID</h4><h2>" + b + "</h2>");
      $("#wechat").modal("show");
      break;
    case "qq":
      $("#wechat .modal-text").html("<h4>QQ</h4><h2>" + b + "</h2>"), $("#wechat").modal("show")
  }
}

function getCss(a, b) {
  if ("" != b && null != b && void 0 != b) return a + ":" + b + ";"
}

function getStr(a, b) {
  return "" == a || null == a || void 0 == a ? null == b || void 0 == b ? "" : b : a
}

function getProductImg(a, b) {
  return null == a || -1 == a ? "" : b
}

function hasProductImg(a, b, c, d) {
  return -1 != a && 0 == b ? c : d
}

function getPrice(a, b, c, d, e, f) {
  var g = "";
  return "" === b || null == b || void 0 == b ? "" == c && "" == d ? g + ('<div class="price" data-price="' + a + '"><span class="sale text-danger">' + e + "<span>" + a + "</span>" + f + "</span></div>") : g + ('<div class="price" data-price="' + a + '"><span class="sale text-danger">' + c + "<span>" + a + "</span>" + d + "</span></div>") : g + ('<div class="price" data-price="' + b + '"><span class="original">' + c + '<del class="price-del"><span>' + a + "</span></del>" + d + '</span><span class="sale text-danger">' + e + "<span>" + b + "</span>" +
    f + "</span></div>")
}

function getPriceText(a, b, c, d, e, f) {
  var g = "";
  return "" === b || null == b || void 0 == b ? "" == c && "" == d ? g + (e + '<span class="sale text-danger">' + a + "</span>" + f) : g + (c + '<span class="sale text-danger">' + a + "</span>" + d) : g + (c + '<del class="price-del"><span>' + a + "</span></del>" + d + "\uff0c" + e + '<span class="sale text-danger">' + b + "</span>" + f)
}

function getPercent(a, b, c) {
  var d = "",
    e = strip(100 * Number(a)).toString().replace(/0/g, "");
  return 1 == a ? d + "" : d + ('<div class="price"><span class="sale text-danger">' + b + e + c + "</span></div>")
}

function strip(a, b) {
  return +parseFloat(a.toPrecision(void 0 === b ? 12 : b))
}

function getPercentText(a, b, c) {
  var d = "",
    e = (100 * Number(a)).toString().replace(/0/g, "");
  return 1 == a ? d + "" : d + (b + '<span class="sale text-danger">' + e + "</span>" + c)
}

function getPriceRange(a) {
  var b = [],
    c = "";
  if (null != a && void 0 != a && 0 < a.length) {
    for (c = 0; c < a.length; c++) {
      var d = a[c];
      1 == d.ProductStatus && b.push(getPriceAmount(d.PriceBase, d.PriceSpecial))
    }
    a = Math.max.apply(Math, b);
    b = Math.min.apply(Math, b);
    c = a == b ? a : b + " ~ " + a
  }
  return c
}

function getPriceRangeOriMax(a) {
  var b = [],
    c = "";
  if (null != a && void 0 != a && 0 < a.length) {
    for (c = 0; c < a.length; c++) {
      var d = a[c];
      1 == d.ProductStatus && b.push(d.PriceBase)
    }
    c = Math.max.apply(Math, b)
  }
  return c
}

function getPriceRangeMin(a) {
  var b = [],
    c = "";
  if (null != a && void 0 != a && 0 < a.length) {
    for (c = 0; c < a.length; c++) {
      var d = a[c];
      1 == d.ProductStatus && b.push(getPriceAmount(d.PriceBase, d.PriceSpecial))
    }
    c = Math.min.apply(Math, b)
  }
  return c
}

function getPriceAmount(a, b) {
  return Number("" === b || null == b || void 0 == b ? a : b)
}

function buildContact(a) {
  var b = pageData.contact,
    c = pageData.setting.fold_IsUse,
    d = "",
    d = d + '<div class="chat">';
  0 != Object.keys(b).length && void 0 != b && (d += '<ul class="list-unstyled chat-list ', 1 == c && (d += "notFold"), d += '">', $.each(b, function (a, b) {
    switch (a) {
      case "CS_LINE":
        d += '<li><button type="button" class="btn color-line" onclick="openContact(\'line\',\'' + b + '\')"><img src="/img/line.svg"></button><div>LINE</div></li>';
        break;
      case "CS_FB":
        d += '<li><button type="button" class="btn color-fb" onclick="openContact(\'facebook\',\'' +
          b + '\')"><img src="/img/msger.svg"></button><div>Facebook</div></li>';
        break;
      case "CS_TELEGRAM":
        d += '<li><button type="button" class="btn color-telegram" onclick="openContact(\'telegram\',\'' + b + '\')"><img src="/img/telegram.svg"></button><div>Telegram</div></li>';
        break;
      case "CS_WECHAT":
        d += '<li><button type="button" class="btn color-wx" onclick="openContact(\'wechat\',\'' + b + '\')"><img src="/img/weixin.svg"></button><div>\u5fae\u4fe1</div></li>';
        break;
      case "CS_QQ":
        d += '<li><button type="button" class="btn color-qq" onclick="openContact(\'qq\',\'' +
          b + '\')"><img src="/img/QQ.png"></button><div>QQ</div></li>';
        break;
      case "CS_EMAIL":
        d += '<li><button type="button" class="btn" onclick="openContact(\'email\',\'' + b + '\')"><img src="/img/email.svg"></button><div>\u4fe1\u7bb1</div></li>';
        break;
      case "CS_PHONE":
        d += '<li><button type="button" class="btn phone" onclick="openContact(\'phone\',\'' + b + '\')"><img src="/img/telephone.svg"></button><div>\u96fb\u8a71</div></li>'
    }
  }), d += "</ul>");
  d += '<ul class="list-unstyled action-list">';
  0 != Object.keys(b).length && void 0 !=
    b && 1 != c && (d += '<li><button type="button" class="btn btn-action" onclick="toggleChatList(this);"><div class="text">\u806f\u7d61<br>\u5ba2\u670d</div><i class="far fa-times"></i></button></li>');
  "shop" == a ? d += '<li class="nextStep"><button type="button" class="btn btn-cart" onclick="goNextStep();"><div class="text">\u7acb\u5373<br>\u8cfc\u8cb7</div></button><div class="add-to-cart-flag">\u5df2\u52a0\u5230\u8cfc\u7269\u8eca</div></li>' : "category" == a && (d += '<li class="nextStep notEmpty"><button type="button" class="btn btn-cart" onclick="goCart();"><div class="text">\u7acb\u5373<br>\u7d50\u5e33</div></button><div class="add-to-cart-flag">\u5df2\u52a0\u5230\u8cfc\u7269\u8eca</div></li>');
  d += "</ul></div>";
  $("body .chat").remove();
  $("body").append(d)
}

function buildBottomHelp(a, b) {
  var c = pageData.contact.CS_LINE,
    d = pageData.contact.CS_FB;
  if (void 0 == c && void 0 == d) return !1;
  var e, f;
  e = '<div class="section-help">';
  e = ("" == b || void 0 == b ? e + ('<h1 class="text-center">' + a + "</h1>") : e + ('<h1 class="text-center has-text">' + a + '</h1><p class="text-center has-text">' + b + "</p>")) + '<div class="btn-section">';
  f = '<div class="checkout-help"><div class="sep"></div><a onclick="toggleHelp(this)"><h1 class="text-center">\u4e0d\u6703\u8a02\u8cfc\u55ce\uff1f<div><i class="far fa-chevron-down"></i></div></h1></a><div class="help-text"><p>\u76f4\u63a5\u79c1\u8a0a\u6211\uff0c\u4e5f\u53ef\u4ee5\u5e6b\u4f60\u4e0b\u55ae\u54e6</p><div class="btn-section">';
  void 0 !=
    c && (e += '<button type="button" class="btn btn-rounded btn-lg btn-primary btn-block color-line" onclick="openContact(\'line\',\'' + c + '\')"><i class="far fa-hand-pointer m-r-5"></i>\u6d3d\u8a62 LINE \u5ba2\u670d</button>', f += '<button type="button" class="btn btn-rounded btn-lg btn-primary btn-block color-line" onclick="openContact(\'line\',\'' + c + '\')"><i class="far fa-hand-pointer m-r-5"></i>\u6d3d\u8a62 LINE \u5ba2\u670d</button>');
  void 0 != d && (e += '<button type="button" class="btn btn-rounded btn-lg btn-primary btn-block color-fb" onclick="openContact(\'facebook\',\'' +
    d + '\')"><i class="far fa-hand-pointer m-r-5"></i>\u6d3d\u8a62 Facebook \u5ba2\u670d</button>', f += '<button type="button" class="btn btn-rounded btn-lg btn-primary btn-block color-fb" onclick="openContact(\'facebook\',\'' + d + '\')"><i class="far fa-hand-pointer m-r-5"></i>\u6d3d\u8a62 Facebook \u5ba2\u670d</button>');
  e += "</div></div>";
  f += "</div></div></div>";
  $(".extra-help").html(e);
  $(".checkout-extra-help").html(f)
}

function formatPrice(a) {
  a = Number(a);
  Number.prototype.format = function (a, c) {
    var b = "\\d(?=(\\d{" + (c || 3) + "})+" + (0 < a ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~a)).replace(new RegExp(b, "g"), "$&,")
  };
  return a.format()
}

function whenTrueStr(a, b, c) {
  return a ? b : c
}

function actionNotice(a, b) {
  var c = 1E3 * b;
  if ("" == a || null == a || void 0 == a) a += "\u4f3a\u670d\u5668\u5fd9\u788c\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002";
  var d = '<div class="action-notice-wrap"><div class="action-notice">' + a + "</div></div>";
  $("body").find(".action-notice-wrap").remove();
  $("body").append(d).delay(c).queue(function (a) {
    $("body").find(".action-notice-wrap").remove();
    a()
  });
  $(window).scroll(function () {
    $("body").find(".action-notice-wrap").remove();
    $(window).unbind("scroll")
  })
}

function buildSetting() {
  var a = pageData.setting;
  if (0 == Object.keys(a).length || void 0 == a) return !1;
  $("#style").html("");
  var b = a.Style_maxWidth;
  void 0 != b && "" !== b && $("#style").append(".customize,.html > .products, .html > .cart, .html > .one-checkout, .html .section-help {max-width: " + b + "px;}");
  $("#setting").html("");
  var b = a.GAnalytics,
    c;
  c = "<script async src='https://www.googletagmanager.com/gtag/js?id=";
  c = (void 0 != b && "" !== b ? c + b : c + "UA-101649847-5") + "'>\x3c/script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-101649847-5');";
  void 0 != b && "" !== b && (_isGoogleAnalytics = !0, c += "gtag('config', '" + b + "');");
  c += "gtag('set', {'pageId': _pageSlug, 'pageTitle': _pageTitle});\x3c/script>";
  $("#setting").append(c);
  b = a.GTM;
  void 0 != b && "" !== b && (c = "" + ('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + b + '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>'), $("body").prepend(c), b = "" + ("<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','" +
    b + "');\x3c/script>"), $("head").append(b));
  b = pageData.setting.WebAttribution;
  "order" != _PageType && (1 == _in_web && 2 == b ? "" == _FirstPageID && (_FirstPageID = getStr(_sid, ""), setCookie("FirstPageID", _FirstPageID)) : setCookie("FirstPageID", ""));
  2 == pageData.setting.PageTraceApply && "order" != _PageType ? "" == _FBPixel && (_FBPixel = getStr(a.FBPixel, ""), _FBPixel2 = getStr(a.FBPixel2, ""), setCookie("FBPixel", _FBPixel), setCookie("FBPixel2", _FBPixel2)) : (_FBPixel = getStr(a.FBPixel, ""), _FBPixel2 = getStr(a.FBPixel2, ""));
  b = $("body").is(".init_pixel");
  void 0 == _FBPixel || "" === _FBPixel || b || (_isFacebookPixel = !0, b = "" + ("<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '" + _FBPixel + "');"), "" != _FBPixel2 && null != _FBPixel2 &&
    void 0 != _FBPixel2 && (b += "fbq('init', '" + _FBPixel2 + "');"), b += "fbq('track', 'PageView', {pageId: _pageSlug, pageTitle: _pageTitle});\x3c/script>", $("#setting").append(b), $("body").addClass("init_pixel"));
  b = a.Style_css;
  void 0 != b && "" !== b && $("#style").append(b);
  b = a.Style_javascript;
  void 0 != b && "" !== b && $("#setting").append("<script>" + b + "\x3c/script>");
  b = a.Style_mainColor;
  void 0 != b && "" !== b && (b = formatColor(b), b = "" + (".btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .btn-primary:active, .btn-primary.active:focus, .btn-primary:active:focus, .btn-primary:active:hover, .show .dropdown-toggle.btn-primary, .btn-primary.hover, .btn-primary:hover, .show .dropdown-toggle.btn-primary {background-color: " +
    b + ";border-color: " + b + ";}.step1.checkout-step>.col:nth-of-type(1) .circle {border-color: " + b + ";}.step2.checkout-step>.col:nth-of-type(1) .circle {background-color: " + b + ";border-color: " + b + ";}.step2.checkout-step>.col:nth-of-type(2) .circle {border-color: " + b + ";}.step3.checkout-step>.col:nth-of-type(1) .circle, .step3.checkout-step>.col:nth-of-type(2) .circle {background-color: " + b + ";border-color: " + b + ";}.step3.checkout-step>.col:nth-of-type(3) .circle {border-color: " + b + ";}.step2.checkout-step:before {background-color: " +
    b + ";}.step3.checkout-step:before, .step3.checkout-step:after {background-color: " + b + ";}.products .action-content small, .product-content small {color: " + b + ";}.pace .pace-progress {background: " + b + ";}.chat .nextStep.notEmpty .btn-cart {background-color: " + b + ";}.variation-tags .btn.active {background-color: " + b + ";border-color: " + b + ";}.product-filter .btn.active, .product-filter .btn.active:hover {color: " + b + ";}.product-filter .btn.active svg .st0, .product-filter .btn.active:hover svg .st0 {fill: " +
    b + ";}.menu-cart .cart-badge {background-color: " + b + ";}.page-item.active .page-link {background-color: " + b + ";border-color: " + b + ";}"), $("#style").append(b));
  b = a.AddPurchaseButtonColor;
  null != b && "" !== b && (b = "" + (".btn-complete, .btn-complete:focus, .btn-complete:hover, .btn-complete:active, .btn-complete.active, .btn-complete.active:focus, .btn-complete:active:focus, .btn-complete:active:hover,.btn-complete[disabled],.btn-complete[disabled]:focus,.btn-complete[disabled]:hover,.btn-complete[disabled]:active {background-color: " +
    b + ";border-color: " + b + ";}"), $("#style").append(b));
  b = a.ButtonStyle;
  $("body").removeClass("ButtonStyleNormal ButtonStyleFlat");
  switch (b) {
    case "normal":
      $("body").addClass("ButtonStyleNormal");
      break;
    case "flat":
      $("body").addClass("ButtonStyleFlat")
  }
  c = Number(a.BackgroundType);
  b = $("body");
  switch (c) {
    case 1:
      b.css("background-image", "url(/img/" + a.BackgroundImg + ".jpg)");
      b.css("background-attachment", "fixed");
      break;
    case 2:
      c = a.BackgroundMediaFile, -1 != a.BackgroundMediaID && (b.css("background-image", "url(" + c + ")"),
        b.css("background-attachment", "fixed"))
  }
  b = Number(a.Style_paddingTop);
  void 0 != b && "" !== b && $("#style").append(".html{padding-top: " + b + "px}");
  if (null != pageData.brands && 0 < pageData.brands.length) {
    b = "";
    for (c = 0; c < pageData.brands.length; c++) switch (pageData.brands[c]) {
      case "ECPay":
        b += '<img src="/img/brand/ecpay.png">';
        break;
      case "NewebPay":
        b += '<img src="/img/brand/newebpay.png">';
        break;
      case "PChomePay":
        b += '<img src="/img/brand/pchomepay.png">';
        break;
      case "OPay":
        b += '<img src="/img/brand/opay.png">';
        break;
      case "FirstBank":
        b +=
          '<img src="/img/brand/firstbank.png">';
        break;
      case "CathayBank":
        b += '<img src="/img/brand/cathaybank.png">';
        break;
      case "SinopacBank":
        b += '<img src="/img/brand/sinopac.png">';
        break;
      case "CTBC":
        b += '<img src="/img/brand/CTBC.png">';
        break;
      case "LINEPay":
        b += '<img src="/img/brand/LINEPay.png">';
        break;
      case "PayPal":
        b += '<img src="/img/brand/paypal.png">';
        break;
      case "CreditCard":
        b += '<img src="/img/brand/visa.png"><img src="/img/brand/mastercard.png"><img src="/img/brand/jcb.png">';
        break;
      case "HILIFE":
        b += '<img src="/img/brand/hilife.png">';
        break;
      case "OK":
        b += '<img src="/img/brand/ok.png">';
        break;
      case "FAMI":
        b += '<img src="/img/brand/familymart.png">';
        break;
      case "UNI":
        b += '<img src="/img/brand/7-11.png">';
        break;
      case "ezShip":
        b += '<img src="/img/brand/ezship.png">'
    }
    $(".supplier").html(b)
  }
  b = getUrlParameter("RID");
  c = getUrlParameter("Click_ID");
  var d = getCookie("MAagree");
  null != b && "" != b && null != c && "" != c && "" != a.MarketAmericaScam && 1 != d && (a = '<div class="modal fade slide-up" id="MarketAmericaScam" tabindex="-1" role="dialog" aria-hidden="false"><div class="modal-dialog"><div class="modal-content-wrapper"><div class="modal-content"><div class="modal-body text-center m-t-30"><div class="no-margin p-b-15 msg">' +
    a.MarketAmericaScam + '</div><button type="button" class="btn btn-primary btn-cons" data-dismiss="modal">\u78ba\u5b9a</button></div></div></div></div></div>', $("#MarketAmericaScam").remove(), $("body").append(a), a = $("#MarketAmericaScam"), a.modal({
      backdrop: "static",
      show: !0
    }), a.one("hide.bs.modal", function () {
      setCookie("MAagree", 1)
    }))
}

function getMobile(a) {
  return 9 == a.length ? "0" + a : a
}

function getPaymentStatus(a) {
  switch (a) {
    case 0:
      return '<span class="badge badge-circle">\u7b49\u5f85\u4ed8\u6b3e</span>';
    case 1:
      return '<span class="badge badge-circle badge-circle-1">\u5f85\u78ba\u8a8d\u4ed8\u6b3e</span>';
    case 2:
      return '<span class="badge badge-circle badge-circle-2">\u5df2\u4ed8\u6b3e</span>';
    case 3:
      return '<span class="badge badge-circle badge-circle-4">\u8ca8\u5230\u4ed8\u6b3e</span>';
    case 4:
      return '<span class="badge badge-circle badge-circle-5">\u5df2\u9000\u6b3e</span>';
    default:
      return ""
  }
}

function getShippingStatus(a) {
  switch (a) {
    case 0:
      return '<span class="badge badge-circle">\u7b49\u5f85\u51fa\u8ca8</span>';
    case 1:
      return '<span class="badge badge-circle badge-circle-6">\u5df2\u51fa\u8ca8</span>';
    case 2:
      return '<span class="badge badge-circle badge-circle-2">\u5df2\u53d6\u8ca8</span>';
    case 3:
      return '<span class="badge badge-circle badge-circle-3">\u9000\u8ca8/\u63db\u8ca8\u4e2d</span>';
    case 4:
      return '<span class="badge badge-circle badge-circle-5">\u5df2\u9000\u8ca8</span>';
    case 5:
      return '<span class="badge badge-circle badge-circle-1">\u5099\u8ca8\u4e2d</span>';
    case 6:
      return '<span class="badge badge-circle badge-circle-4">\u5ef6\u9072\u51fa\u8ca8</span>';
    case 7:
      return '<span class="badge badge-circle badge-circle-7">\u9001\u9054\u53d6\u8ca8\u9ede</span>';
    default:
      return ""
  }
}

function getOrderStatusBadge(a) {
  switch (Number(a)) {
    case 0:
      return '<span class="badge badge-text"><i class="far fa-clock"></i>\u7b49\u5f85\u78ba\u8a8d</span>';
    case 1:
      return '<span class="badge badge-text"><i class="far fa-bell"></i>\u78ba\u8a8d\u4e2d</span>';
    case 2:
      return '<span class="badge badge-text"><i class="far fa-circle"></i>\u5df1\u78ba\u8a8d</span>';
    case 3:
      return '<span class="badge badge-text"><i class="far fa-check"></i>\u5df1\u5b8c\u6210</span>';
    case 4:
      return '<span class="badge badge-text"><i class="far fa-times"></i>\u5df1\u53d6\u6d88</span>';
    case 5:
      return '<span class="badge badge-text"><i class="far fa-asterisk"></i>\u5176\u4ed6</span>';
    case 6:
      return '<span class="badge badge-text"><i class="far fa-bolt"></i>\u8655\u7406\u4e2d</span>';
    case 7:
      return '<span class="badge badge-text"><i class="far fa-paperclip"></i>\u66ab\u5b58</span>';
    default:
      return ""
  }
}

function getPickTime(a) {
  switch (a) {
    case 0:
      return "\u4e0d\u6307\u5b9a";
    case 1:
      return "13\u9ede\u524d";
    case 2:
      return "14-18\u9ede"
  }
}

function getSex(a) {
  switch (a) {
    case 0:
      return "";
    case 1:
      return "\u5148\u751f";
    case 2:
      return "\u5c0f\u59d0"
  }
}

function replaceToHTML(a) {
  return a.replace(/(?:\r\n|\r|\n)/g, "<br>")
}

function loading(a) {
  var b = $("#loading");
  b.find(".text-status");
  switch (a) {
    case "init":
      setTimeout(function () {
        $("#loading").is(".hide") || addNoticeBoard("\u9023\u7dda\u903e\u6642\uff0c\u8acb\u6aa2\u67e5\u60a8\u7684\u7db2\u8def\uff0c\u6216\u92b7\u552e\u9801\u8a2d\u5b9a\u662f\u5426\u6b63\u78ba\u3002")
      }, 15E3);
      break;
    case "finish":
      b.addClass("hide")
  }
}

function addNoticeBoard(a) {
  if (1 == _in_web) {
    var b = $(".page-content");
    b.addClass("page-content-error");
    b.closest("div").addClass("container");
    b.html(a);
    $("#loading").addClass("hide")
  } else b = $("#notice"), b.find(".page-icon").html('<img src="/img/laughing.svg">'), b.find(".msg").html(replaceToHTML(a)), $("#loading").addClass("hide"), b.removeClass("hide")
}

function traceGoogle(a, b) {
  "" == b || void 0 == b || null == b ? gtag("event", a) : gtag("event", a, {
    value: b
  })
}

function getToday() {
  var a = new Date,
    b = a.getDate(),
    c = a.getMonth() + 1,
    a = a.getFullYear();
  10 > b && (b = "0" + b);
  10 > c && (c = "0" + c);
  return a + "-" + c + "-" + b
}

function fixIphone() {
  var a = window.navigator.userAgent,
    b = !!a.match(/iPad/i) || !!a.match(/iPhone/i),
    c = !!a.match(/WebKit/i),
    d = b && c && !a.match(/CriOS/i) && !a.match(/OPiOS/i) && !a.match(/FB/i);
  b && c && a.match(/Instagram/i);
  a = $(window).width();
  b = $(window).height();
  c = window.innerHeight;
  d && (375 == a && 625 <= b && 750 >= b ? 745 <= c && 750 >= c ? ($(".subtotal").css("padding-bottom", "64px"), $(".view .content-scroll").css("padding-bottom", "124px")) : ($(".subtotal").css("padding-bottom", "10px"), $(".view .content-scroll").css("padding-bottom",
    "70px")) : (0 == _iphoneH ? ($(".subtotal").css("padding-bottom", "10px"), $(".view .content-scroll").css("padding-bottom", "70px")) : c < _iphoneH ? ($(".subtotal").css("padding-bottom", "10px"), $(".view .content-scroll").css("padding-bottom", "70px")) : ($(".subtotal").css("padding-bottom", "44px"), $(".view .content-scroll").css("padding-bottom", "104px")), _iphoneH = c))
}

function buildEvent() {
  1 == pageData.setting.SpecialEvent_IsUse && $.get("/assets/plugins/JQuery-Snowfall/snowfall.jquery.js", function (a) {
    $(document).snowfall({
      image: "/img/flake.png",
      minSize: 10,
      maxSize: 32
    });
    $(".cart-checkout .btn-block, #viewProductBundle1 .btn-block, #viewProductBundle2 .btn-block, #viewProduct .btn-block").append('<img src="/img/christmas-tree.svg" class="christmas-bagde">');
    $(".extra-help .color-line").append('<img src="/img/mistletoe.svg" class="christmas-bagde rotate45">');
    $(".extra-help .color-fb").append('<img src="/img/santa-claus.svg" class="christmas-bagde">');
    $("#checkout .checkout-help").is(".checkout-help") && $("#checkout .subtotal").append('<img src="/img/christmas-tree2.svg" class="christmas-tree">')
  })
}

function shuffle(a) {
  for (var b = a.length, c, d; 0 !== b;) d = Math.floor(Math.random() * b), --b, c = a[b], a[b] = a[d], a[d] = c;
  return a
}

function getReceiptBadge(a) {
  switch (a) {
    case 0:
      return '<span class="label">\u7b49\u5f85\u8655\u7406</span>';
    case 1:
      return '<span class="label label-success">\u5df2\u958b\u7acb</span>';
    case 2:
      return '<span class="label label-important">\u5df2\u4f5c\u5ee2</span>'
  }
}

function detectIE() {
  var a = window.navigator.userAgent,
    b = a.indexOf("MSIE ");
  if (0 < b) return parseInt(a.substring(b + 5, a.indexOf(".", b)), 10);
  if (0 < a.indexOf("Trident/")) return b = a.indexOf("rv:"), parseInt(a.substring(b + 3, a.indexOf(".", b)), 10);
  b = a.indexOf("Edge/");
  return 0 < b ? parseInt(a.substring(b + 5, a.indexOf(".", b)), 10) : !1
}

function getCountryImg(a) {
  switch (a) {
    case "+886":
      return '<img src="/img/country/taiwan.png" class="countryImg">';
    case "+65":
      return '<img src="/img/country/singapore.png" class="countryImg">';
    case "+60":
      return '<img src="/img/country/malaysia.png" class="countryImg">';
    case "+852":
      return '<img src="/img/country/hongkong.png" class="countryImg">';
    case "+853":
      return '<img src="/img/country/macao.png" class="countryImg">';
    case "+86":
      return '<img src="/img/country/cn.png" class="countryImg">';
    case "+1":
      return '<img src="/img/country/us.png" class="countryImg">';
    case "+81":
      return '<img src="/img/country/jp.png" class="countryImg">'
  }
}

function getLimitPurchase(a, b) {
  return 1 == a ? b : ""
}

function buildContent(a, b, c) {
  if (null == a || 0 == a.length || void 0 == a) return !1;
  c = "";
  for (var d = 0; d < a.length; d++) {
    var e = a[d];
    switch (e.type) {
      case "img":
        c += '<section class="img">';
        switch (Number(e.go)) {
          case 1:
            c += "<a onclick=\"scrollPage('" + e.value + '\')"><img src="' + getStr(e.MediaFile, "") + '"></a>';
            break;
          case 2:
            c += '<a href="' + e.value + '" target="_blank"><img src="' + getStr(e.MediaFile, "") + '"></a>';
            break;
          default:
            c += WrapImages(getStr(e.MediaFile, ""), '<img src="' + getStr(e.MediaFile, "") + '">', "content", "")
        }
        c += "</section>";
        break;
      case "video":
        var f = e.controls,
          g = e.autoplay,
          h = [];
        1 == e.rel && h.push("rel=0");
        1 == f && h.push("controls=0");
        1 == g ? (h.push("autoplay=1"), c += '<section class="video"><iframe width="560" height="349" src="' + e.src, 0 < h.length && (c += "?" + h.join("&")), c += '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></section>') : (c += '<section class="video"><iframe width="560" height="349" data-src="' + e.src, 0 < h.length && (c += "?" + h.join("&")), c += '" class="lazyload" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></section>');
        break;
      case "editor":
        c += '<section class="editor" style="' + getCss("background-color", e.bgColor) + '">' + e.html + "</section>";
        break;
      case "addtocart":
        c += '<section class="addtocart"><button type="button" class="btn btn-rounded btn-block btn-primary" onclick="' + getStr(e.click, "") + '">' + getStr(e.text, "\u52a0\u5165\u8cfc\u7269\u8eca") + "</button></section>";
        break;
      case "code":
        c += '<section class="code">' + e.html + "</section>";
        break;
      case "orderSearch":
        c += '<section class="orderSearch"><div class="wrap"><form><h3 class="text-center">\u8a02\u55ae\u67e5\u8a62</h3><div class="form-group form-group-default required"><label>\u8a02\u55ae\u865f\u78bc</label><input type="text" class="form-control" name="OrderNumber"></div><div class="form-group form-group-default required"><label>\u806f\u7d61\u96fb\u8a71</label><div class="input-group"><div class="input-group-addon p-r-5"><img src="/img/country/taiwan.png"></div><input type="text" class="form-control" name="UserMobile" placeholder="0912 345 678"><input type="hidden" name="UserMobileCode" value="+886"></div></div><button type="submit" class="btn btn-primary btn-lg btn-rounded btn-block">\u67e5\u8a62\u8a02\u55ae</button><div class="or"><span>\u6216</span></div><button type="button" class="btn btn-fb btn-lg btn-rounded btn-block" onclick="searchCustomerOrderFB(this)"><i class="fab fa-facebook-f m-r-10"></i>\u5feb\u901f\u767b\u5165</button><form></div></section>';
        break;
      case "ScrollTrack":
        c += '<section class="ScrollTrack track" data-name="' + e.name + '" data-id="' + d + '"></section>', _ScrollTrack.push(d)
    }
  }
  $(b).html(c)
}

function toggleMenu(a) {
  a = $("body").find(".navbar-toggler");
  var b = a.is(".collapsed");
  $(".navbar .menu-back").remove();
  b ? ($("body").addClass("modal-open menu-open"), $(".navbar").append('<div class="menu-back" onclick="toggleMenu(this)"></div>'), a.removeClass("collapsed"), a.siblings(".navbar-collapse").removeClass("collapse"), $(".navbar .nav-item").removeClass("open")) : ($("body").removeClass("modal-open menu-open"), a.addClass("collapsed"), a.siblings(".navbar-collapse").addClass("collapse"))
}

function buildHeader() {
  if (1 == _in_web || 0 == _in_web && 0 == pageData.setting.WebSiteVersion) {
    var a = pageData.website.header_navigation,
      b = pageData.website.carturl,
      c = getStr(pageData.website.setup.WebTitle, ""),
      d = pageData.website.logo,
      e;
    e = '<nav class="navbar navbar-expand-xl"><div class="container"><button class="navbar-toggler collapsed" onclick="toggleMenu(this);"><span class="icon-bar bar1"></span><span class="icon-bar bar2"></span><span class="icon-bar bar3"></span></button><div class="navbar-brand ';
    if (0 ==
      _in_web || 0 == pageData.setting.WebSiteVersion) e += "mr-auto";
    e += '">';
    e = null != d.MediaFile_LogoPC && void 0 != d.MediaFile_LogoPC && "" != d.MediaFile_LogoPC ? e + ('<span class="display-desktop"><a href="' + d.Url + '"><img src="' + d.MediaFile_LogoPC + '"></a></span>') : e + ('<span class="display-desktop"><a href="' + d.Url + '">' + c + "</a></span>");
    e = null != d.MediaFile_LogoMobile && void 0 != d.MediaFile_LogoMobile && "" != d.MediaFile_LogoMobile ? e + ('<div class="display-mobile"><a href="' + d.Url + '"><img src="' + d.MediaFile_LogoMobile + '"></a></div>') :
      e + ('<div class="display-mobile"><a href="' + d.Url + '">' + c + "</a></div>");
    e += "</div>";
    0 != _in_web && 0 != pageData.setting.WebSiteVersion && (e = "shop" == _PageType && 1 == pageData.setting.PageCheckOutDisplay && 1 == pageData.setting.CartPosition ? e + '<a class="display-mobile menu-cart" onclick="goShopPageCart();"><i class="far fa-shopping-cart"></i><span class="cart-badge hide">0</span></a>' : e + ('<a class="display-mobile menu-cart" href="' + b + '"><i class="far fa-shopping-cart"></i><span class="cart-badge hide">0</span></a>'));
    e += '<div class="navbar-collapse collapse" id="menu">';
    null != d.MediaFile_LogoMobile && void 0 != d.MediaFile_LogoMobile && "" != d.MediaFile_LogoMobile && (e += '<div class="display-mobile"><a href="' + d.Url + '" class="mobile-brand"><img src="' + d.MediaFile_LogoMobile + '"></a></div>');
    e += '<div class="wrap"><ul class="navbar-nav">';
    if (0 < a.length) {
      for (c = 0; c < a.length; c++) {
        var f = a[c],
          d = f.Children;
        setMenuFlash("header-menu-" + c, f);
        e += '<li class="nav-item">';
        if ("" != d && 0 < d.length) {
          e += '<a class="nav-link header-menu-' + c + '" onclick="subMenu(this)">' +
            f.Name + '<i class="far fa-chevron-down"></i></a>';
          e += '<ul class="sub">';
          for (f = 0; f < d.length; f++) {
            var g = d[f];
            setMenuFlash("header-menu-" + c + "-" + f, g);
            e += '<li><a href="' + g.Url + '" class="header-menu-' + c + "-" + f + '">' + g.Name + "</a></li>"
          }
          e += "</ul>"
        } else e += '<a class="nav-link header-menu-' + c + '" href="' + f.Url + '">' + f.Name + "</a>";
        e += "</li>"
      }
      0 != _in_web && 0 != pageData.setting.WebSiteVersion && (e = "shop" == _PageType && 1 == pageData.setting.PageCheckOutDisplay && 1 == pageData.setting.CartPosition ? e + '<li class="nav-item display-inline-desktop"><a class="nav-link menu-cart" onclick="goShopPageCart();"><i class="far fa-shopping-cart"></i><span class="cart-badge hide">0</span></a></li>' :
        e + ('<li class="nav-item display-inline-desktop"><a class="nav-link menu-cart" href="' + b + '"><i class="far fa-shopping-cart"></i><span class="cart-badge hide">0</span></a></li>'))
    }
    e += "</ul></div></div></div></nav>";
    $("#website .head").html(e);
    1200 >= $("body").width() && (_fixed_navbar_height = $(".head .navbar").outerHeight());
    getCartCount()
  }
}

function buildFooter() {
  if (1 == _in_web || 0 == _in_web && 0 == pageData.setting.WebSiteVersion) {
    var a, b = pageData.website.footer_navigation,
      c = pageData.website.setup.FooterContent,
      d = pageData.website.setup.Hide1Shop_IsUse;
    a = '<div class="container"><div class="footer-menu"><ul class="nav justify-content-center">';
    if (0 < b.length)
      for (var e = 0; e < b.length; e++) {
        var f = b[e];
        setMenuFlash("footer-menu-" + e, f);
        a += '<li><a href="' + f.Url + '" class="footer-menu-' + e + '">' + f.Name + "</a></li>"
      }
    a += '</ul></div><div class="footer-content">' +
      c + '</div><div class="supplier"></div></div>'
  } else a = '<div class="container"><div class="supplier"></div></div>';
  1 != d && (a += '<div class="copyright">\u672c\u7cfb\u7d71\u7531 <a href="https://1shop.tw/" target="_blank">\u4e00\u9801\u8cfc\u7269</a> \u7dad\u8b77</div>');
  $("#website .footer").html(a)
}

function alertMsg(a, b) {
  $("#alert .msg").text(a);
  $("#alert").modal("show");
  if ("" !== b) $("#alert").on("hidden.bs.modal", function (a) {
    window.location = b
  })
}

function initCustomerOrder() {
  $(".orderSearch form").validate({
    ignore: ":hidden",
    rules: {
      CustomerName: {
        required: !0
      },
      UserMobile: {
        required: !0,
        number: !0
      }
    },
    submitHandler: function (a) {
      var b = $(a).find("button[type=submit]");
      btnLoading(b);
      var c = $(a).serialize() + "&URL=" + window.location.href;
      Pace.restart();
      Pace.track(function () {
        $.ajax({
          url: _gateway + "gateway.php?a=view&m=websiteordersearch&ShopID=" + _shop_id,
          type: "POST",
          data: c,
          dataType: "json",
          timeout: 3E4,
          global: !1,
          cache: !1
        }).error(function (a) {
          alertMsg("\u4f3a\u670d\u5668\u5fd9\u788c\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66",
            "");
          btnReset(b)
        }).done(function (a) {
          0 == a.success ? inputCustomerOrderList(a.data.Url) : alertMsg(a.msg, "");
          btnReset(b)
        })
      });
      return !1
    }
  })
}

function searchCustomerOrderFB(a) {
  a = $(a);
  btnLoading(a);
  return location.href = _gateway + "FB_order_search.php?WebPageID=" + _page_id
}

function initSetting() {
  initCustomerOrder();
  getFBOrderSearch()
}

function inputCustomerOrderList(a) {
  var b = "",
    c = $("#listOrder");
  if (0 >= a.length) return !1;
  for (var d = 0; d < a.length; d++) var e = a[d],
    b = b + ('<a href="' + e.ShortUrl + '" target="_blank"><div class="number clearfix">' + e.OrderNumber + '<i class="far fa-link m-l-10 pull-right"></i></div><div class="date"><i class="far fa-clock m-r-5"></i>' + e.CreateDate + "</div><div>" + getOrderStatusBadge(e.ProgressStatus) + " " + getPaymentStatus(e.PaymentStatus) + " " + getShippingStatus(e.LogisticsStatus) + "</div></a>");
  c.find(".order-list").html(b);
  c.find(".total-num").html(a.length);
  c.modal("show")
}

function getFBOrderSearch() {
  if (null == _FBSearchToken || void 0 == _FBSearchToken || "" === _FBSearchToken) return !1;
  var a = $("button.btn-fb");
  btnLoading(a);
  Pace.restart();
  Pace.track(function () {
    $.ajax({
      url: _gateway + "gateway.php?a=view&m=websiteordersearch&ShopID=" + _shop_id + "&FBSearchToken=" + _FBSearchToken + "&SearchType=FB",
      type: "GET",
      dataType: "json",
      timeout: 3E4,
      global: !1,
      cache: !1
    }).error(function (b) {
      alertMsg("\u4f3a\u670d\u5668\u5fd9\u788c\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66", "");
      btnReset(a)
    }).done(function (b) {
      0 ==
        b.success ? inputCustomerOrderList(b.data.Url) : alertMsg(b.msg, "");
      btnReset(a)
    })
  });
  return !1
}

function evevnt_AddToCart() {
  var a = pageData.setting.Event_AddToCart;
  null != a && void 0 != a && "" != a && (a = "<script>" + a + "\x3c/script>", $("#setting").append(a))
}

function evevnt_Purchase() {
  var a = pageData.setting.Event_Purchase;
  null != a && void 0 != a && "" != a && (a = "<script>" + a + "\x3c/script>", $("#setting").append(a))
}

function evevnt_ViewContent() {
  var a = pageData.setting.Event_ViewContent;
  null != a && void 0 != a && "" != a && (a = "<script>" + a + "\x3c/script>", $("#setting").append(a))
}

function evevnt_PageView() {
  var a = pageData.setting.Event_PageView;
  null != a && void 0 != a && "" != a && (a = "<script>" + a + "\x3c/script>", $("#setting").append(a))
}

function makeid() {
  for (var a = "", b = Math.floor(9999 * Math.random()), c = 0; 18 > c; c++) a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
  return a + b
}

function WrapImages(a, b, c, d) {
  var e = "";
  null != a && "" !== a && (1 == pageData.setting.LightBoxEnabled ? (e += "<a ", e = null != c && "" !== c ? e + ('data-fancybox="' + c + '" ') : e + "data-fancybox ", null != d && "" !== d && (e += 'data-caption="' + d + '" '), e += 'href="' + a + '">' + b + "</a>") : e += b);
  return e
}

function ReloadPage() {
  location.reload()
}

function getSaleBadgeByInventoryStatus(a) {
  return 1 === a ? '<span class="label label-info">\u9810\u8cfc</span>' : ""
}

function escapeUrl(a) {
  return a.replace(/&/g, "%26")
}

function loadingCard(a, b) {
  var c = $(a);
  switch (b) {
    case "load":
      c.find(".card-progress").is(".card-progress") || c.append('<div class="card-progress" style="display: block;"><div class="progress progress-small"><div class="progress-bar-indeterminate"></div></div></div>');
      break;
    case "finish":
      c.find(".card-progress").remove()
  }
}

function isObjEmpty(a) {
  for (var b in a)
    if (a.hasOwnProperty(b)) return !1;
  return !0
}

function refreshToken(a) {
  void 0 != a && null != a && "" !== a && (setCookie("token", a), _token = a)
}

function getCartCount() {
  if (null != _token && "" !== _token) return Pace.ignore(function () {
    $.ajax({
      url: _gateway + "gateway.php?a=view&m=CountCart&Token=" + getStr(_token, ""),
      type: "GET",
      dataType: "json",
      timeout: 3E4,
      global: !1,
      cache: !1
    }).error(function (a) { }).done(function (a) {
      0 == a.success && (cartProductNum = a.data.CountCart, showCartCount(cartProductNum))
    })
  }), !1
}

function showCartCount(a) {
  if (1 == _in_web) {
    var b = $(".navbar .cart-badge");
    0 < a ? b.removeClass("hide") : b.addClass("hide");
    b.html(a);
    "page" == _PageType && (b = $(".chat .action-list"), 0 < a ? b.show() : b.hide())
  }
}

function subMenu(a) {
  $(a).closest("li").toggleClass("open")
}

function getAllProduct(a) {
  var b = -1,
    c = pageData.AllProduct;
  if (null != c) {
    for (var d = 0; d < c.length; ++d)
      if (c[d].AllProductID == a) {
        b = d;
        break
      }
    if (-1 != b) return c[b]
  }
}

function goCart() {
  window.location = pageData.website.carturl
}

function getPagination(a) {
  var b = a.CorrectPage,
    c = Number(a.TotalPage) + 1,
    d = "";
  if (1 < c) {
    d += '<ul class="pagination justify-content-center">';
    0 != b && 1 < b && (d += '<li class="page-item"><a class="page-link" onclick="openPage(0);loadingNextPage();" aria-label="Previous"><i class="far fa-angle-double-left"></i></a></li>');
    0 <= b - 1 && (d += '<li class="page-item"><a class="page-link" onclick="openPage(' + (b - 1) + ');loadingNextPage();" aria-label="Previous"><i class="far fa-angle-left"></i></a></li>');
    for (var e = 0; e < c; e++)
      if (e >
        b - 3 && e < b + 3) {
        var f = e + 1,
          d = d + '<li class="page-item ';
        e == b && (d += "active");
        d += '"><a class="page-link" onclick="openPage(' + e + ');loadingNextPage();">' + f + "</a></li>"
      }
    b + 1 <= a.TotalPage && (d += '<li class="page-item"><a class="page-link" onclick="openPage(' + (b + 1) + ');loadingNextPage();" aria-label="Next"><i class="far fa-angle-right"></i></a></li>');
    a.TotalPage != b && 1 < a.TotalPage - b && (d += '<li class="page-item"><a class="page-link" onclick="openPage(' + a.TotalPage + ');loadingNextPage();" aria-label="Next"><i class="far fa-angle-double-right"></i></a></li>');
    d += "</ul>"
  }
  return d
}

function getProductPriceText(a) {
  var b = "";
  switch (a.ProductType) {
    case 0:
    case 5:
      b += getPrice(a.PriceBase, a.PriceSpecial, getStr(a.PriceBase_Prefix, _PriceBase_Prefix), getStr(a.PriceBase_Suffix, _PriceBase_Suffix), getStr(a.PriceSpecial_Prefix, _PriceSpecial_Prefix), getStr(a.PriceSpecial_Suffix, _PriceSpecial_Suffix));
      break;
    case 1:
      b += getPercent(a.DiscountCost, getStr(a.PriceSpecial_Prefix, _PriceSpecial_Prefix), getStr(a.PriceSpecial_Suffix, "\u6298"));
      break;
    case 2:
      b += getPrice(a.DiscountCost, a.DiscountCostSpecial,
        getStr(a.PriceBase_Prefix, _PriceBase_Prefix), getStr(a.PriceBase_Suffix, _PriceBase_Suffix), getStr(a.PriceSpecial_Prefix, _PriceSpecial_Prefix), getStr(a.PriceSpecial_Suffix, _PriceSpecial_Suffix));
      break;
    case 3:
      for (var c = 0, d = 0, e = 0, f = 0; f < a.var_item.length; f++) 0 == f ? (d = a.var_item[f].PriceBase, e = a.var_item[f].PriceSpecial) : (d != a.var_item[f].PriceBase && (c = 1), e != a.var_item[f].PriceSpecial && (c = 1));
      b = c ? "range" == a.PriceDisplay ? b + getPrice(getPriceRange(a.var_item), "", getStr(a.PriceBase_Prefix, _PriceBase_Prefix),
        getStr(a.PriceBase_Suffix, _PriceBase_Suffix), getStr(a.PriceSpecial_Prefix, _PriceSpecial_Prefix), getStr(a.PriceSpecial_Suffix, _PriceSpecial_Suffix)) : b + getPrice(getPriceRangeOriMax(a.var_item), getPriceRangeMin(a.var_item), getStr(a.PriceBase_Prefix, _PriceBase_Prefix), getStr(a.PriceBase_Suffix, _PriceBase_Suffix), getStr(a.PriceSpecial_Prefix, _PriceSpecial_Prefix), getStr(a.PriceSpecial_Suffix, " \u8d77")) : b + getPrice(d, e, getStr(a.PriceBase_Prefix, _PriceBase_Prefix), getStr(a.PriceBase_Suffix, _PriceBase_Suffix),
          getStr(a.PriceSpecial_Prefix, _PriceSpecial_Prefix), getStr(a.PriceSpecial_Suffix, _PriceSpecial_Suffix))
  }
  return b
}

function getProductAddButton(a) {
  var b = "";
  switch (a.ProductType) {
    case 0:
    case 3:
      b += getButtonStock(a.SaleMax, "btn-complete", "viewProduct(this, " + a.ProductID + ")", "\u52a0\u8cfc");
      break;
    case 1:
    case 2:
      b += getButtonStock(a.SaleMax, "btn-complete", "viewProductBundle(" + a.ProductID + ")", "\u52a0\u8cfc")
  }
  return b
}

function getProductTitleText(a) {
  var b = "";
  switch (a.ProductType) {
    case 0:
    case 3:
      b += "<h3>" + getSaleBadge(a.AllProductID) + getStr(a.ProductName, "\u7522\u54c1\u540d\u7a31") + "<small>" + getStr(a.ProductMark, "") + "</small></h3>";
      break;
    case 1:
    case 2:
      b += "<h3>" + getDiscountLabel(a.ProductType, a.Badge_IsUse) + a.ProductName + "<small>" + getStr(a.ProductMark, "") + "</small></h3>"
  }
  return b
}

function getSlideNum(a, b) {
  return "default" == b ? Number(a) : Number(b)
}

function getSlideIsAutoplay(a) {
  return "" === a ? !1 : !0
}

function getSlideAutoplaySpeed(a) {
  return "" === a ? 0 : 1E3 * a
}

function getButtonStock(a, b, c, d) {
  var e = "";
  return "" === a || 0 < a ? e + ('<button type="button" class="btn btn-rounded btn-block ' + b + '" onclick="' + c + '"><i class="far fa-shopping-cart m-r-5"></i>' + d + "</button>") : e + '<button type="button" class="btn btn-rounded btn-warning btn-block btn-disabled">\u7f3a\u8ca8</button>'
}

function addToCartSuccessText() {
  return 1 == _in_web ? "\u52a0\u5165\u8cfc\u7269\u8eca\u6210\u529f" : "\u52a0\u5165\u8cfc\u7269\u8eca\u6210\u529f\uff0c\u8acb\u81f3\u4e0b\u65b9\u7d50\u5e33"
}

function removeHash() {
  history.replaceState(null, null, " ")
}

function setMenuFlash(a, b) {
  if (null != b.Light && 1 == b.Light) {
    var c;
    c = "" + ('<style class="menu-css">.' + a + " { animation: " + a + " " + 2 * Number(b.Seconds) + "s linear infinite; }@keyframes " + a + " { 0% { color: " + b.Color1 + " } 50% { color: " + b.Color2 + " } 100% { color: " + b.Color1 + " } }</style>");
    $("body").append(c)
  }
}

function formatColor(a) {
  return a.substring(0, 7)
}

function getAllProductStock(a) {
  a = getAllProduct(a);
  if (void 0 != a && null != a) {
    var b = a.InventoryStatus;
    if (1 == a.Inventory_IsUse) switch (b) {
      case 0:
        return a.Inventory;
      case 1:
        return a.PreSaleNumber
    } else return ""
  }
}

function xssFilter(a) {
  if (void 0 == a || null == a) a = "";
  a = a.toString();
  return a = a.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/'/g, "'").replace(/"/g, """)
};