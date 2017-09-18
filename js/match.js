// 公共 JS
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * clientWidth / 750 + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

//不同dpr下不同的图片 
var h = window.innerHeight;
var w = window.innerWidth;
$(".wrap,.wrap-no,.test,.protocol,.preLoading").css({
  "minHeight": h + "px",
  "width": w + "px"
})
$(".wrap").parent().css({
  "background": "url(img/bg.png) no-repeat",
  "backgroundSize": "100% 100%",
  "backgroundAttachment": "fixed"
});

if (window.devicePixelRatio >= 3) {
  $('*').each(function () {
    var backgroundImage = getComputedStyle(this, null).backgroundImage
    // 背景图
    backgroundImage !== 'none'
      ? this.style.backgroundImage = backgroundImage.replace('@2', '@3')
      : null

    // 图片
		this.nodeName === 'IMG'
      ? this.src = this.src.replace('@2', '@3')
      : null
  })
}

// textarea 高度自适应
$('textarea')
  .each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  })
  .on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

// 选择日期
$('#picker').on('click', function () {
  var element = document.getElementById('date')
  new DatePicker({
    "type": "3",
    "title": '请选择日期',
    "maxYear": "2100",
    "minYear": "2000",
    "separator": "/",
    "callBack": function (val) {
      element.innerText = val;
    }
  });
})

//点击弹窗消失
$("#sure").on("touchstart", function (e) {
  e.preventDefault()
  $('#pleaseFill').hide()
})

// 字数验证提示-重写
function checkout(obj) {
  var length = obj.value.trim().length,
    min = $(obj).attr('words').split('-')[0],
    max = $(obj).attr('words').split('-')[1],
    warning = obj.parentNode.getElementsByClassName('warning')[0],
    html = "<p class='warning'>请输入"+min+"到"+max+"个字符</p>";
  if (min > length || length > max) {
    !warning && $(obj.parentNode).append(html)
  } else {
    warning && obj.parentNode.removeChild(warning)
  }
}

// 提交 出租/求租 信息
function submit(callback) {
  var complete = true; // 是否允许提交
  $('textarea').each(function (index, ele) {
    var min = $(ele).attr('words').split('-')[0],
      max = $(ele).attr('words').split('-')[1],
      warning = ele.parentNode.getElementsByClassName('warning')[0],
      html = "<p class='warning'>请输入" + min + "到" + max + "个字符</p>";
    if (ele.value === '') {
      !warning && $(ele.parentNode).append(html)
      complete = false
    }
  })
  if ($('#date').text() === '请选择日期') complete = false
  if (complete) {
    callback()
  } else {
    $("#pleaseFill").show();
  }
}