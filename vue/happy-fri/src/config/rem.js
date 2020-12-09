// 读取到用户的设备宽度，并设置项目的根字体大小
(function(doc, win) {
  let docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
      recalc = function() {
        let clientWidth = docEl.clientWidth
        if (!clientWidth) return
        docEl.style.fontSize = 20 * (clientWidth / 375) * 1.172 + 'px'
      }
  if (!doc.addEventListener) return
  win.addEventListener('resizeEvt', recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc)
})(document, window)