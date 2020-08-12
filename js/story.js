$(function () {

  // [品牌故事 story] 
  let rate = $(window).width() > 768 ? 1 : 0.6;
  window.sr = ScrollReveal({ viewOffset: { bottom: 100 * rate }, });
  // [品牌故事 story] 自定義動畫集合
  sr.reveal('.story--fadeup', { origin: 'bottom', distance: '10px', duration: 500, delay: 100, reset: true, beforeReveal: countData });
  sr.reveal('.story--ani', { origin: 'bottom', distance: 0, afterReveal: storyAni })
  let storyData = [
    {
      val: 7,
      unit: 1
    },
    {
      val: 500,
      unit: 25,
    },
    {
      val: 35000,
      unit: 1400,
    }
  ]
  //[品牌故事 story] 計數器
  function countData() {
    $('.val').each(function (index) {
      [val, unit, item] = [storyData[index].val, storyData[index].unit, $(this)]
      startCount(val, unit, item);
    })
  }
  function startCount(val, unit, item) {
    let time = 0;
    function countDown() {
      item.text(time)

      if (time === val) {
        clearInterval(timer)
      }
      time += unit;
    }
    let timer = setInterval(countDown, 60);
  }
  //[品牌故事 story] 動畫
  let $storyLogo = $('.website__story--ani .story-logo'),
    $storyCircle = $('.website__story--ani .circle'),
    $text = $('.website__story--ani .text'),
    $triangle = $('.website__story--ani .triangle'),
    $slogan = $('.website__story--slogan p')
  function storyAni() {
    let tl = gsap.timeline();
    tl.to($storyCircle, { duration: 0.5, scale: 1 })
      .to($storyLogo, { duration: 0.5, opacity: 1, onComplete: startTriangleAni }, 0.3)
      .to($text, { duration: 0.5, opacity: 1, y: 0 }, 1.6)
      .to($slogan, { duration: 0.5, y: 0, opacity: 1 }, 1.8)
  }
  function startTriangleAni() {
    $triangle.addClass('triangle-ani')
  }

});

