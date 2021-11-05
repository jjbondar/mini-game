$(document).ready(function(){
  $(document).keydown(function(key){
    const elm = $("#character");
    const block = $("#block");

    if (collision(elm,block)) {
      elm.hide();
      block.hide();
      $('.explosion').show();
      document.getElementById("explosion").style.display = "flex";
    }

    const {top, left} = elm.position();
    switch(key.which) {
      case 39:
        if (left + elm.width() > document.body.offsetWidth) return
        elm.finish().animate({
          left:`+=${elm.css('width')}`
        }).width()
        break;
      case 37:
        if (left - elm.width() < 0) return
        elm.finish().animate({
          left:`-=${elm.css('width')}`
        })
        break;
      case 38:
        if (top - elm.height() < 0) return
        elm.finish().animate({
          top:`-=${elm.css('height')}`
        })
        break;
      case 40:
        if (top + elm.height() > document.body.offsetHeight) return
        elm.finish().animate({
          top:`+=${elm.css('height')}`
        })
        break;

      case 68:
        if (block.position().left + block.width() >= document.body.offsetWidth) return
        block.finish().animate({
          left:`+=${block.css('width')}`
        }).width()
        break;
      case 65:
        if (block.position().left - block.width() < 0) return
        block.finish().animate({
          left:`-=${block.css('width')}`
        })
        break;
      case 87:
        if (block.position().top - block.height() < 0) return
        block.finish().animate({
          top:`-=${block.css('height')}`
        })
        break;
      case 83:
        if (block.position().top + block.height() > document.body.offsetHeight) return
        block.finish().animate({
          top:`+=${block.css('height')}`
        })
        break;
    }
  });
  $('.reload').click(function () {
    window.location.reload(false);
  })
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }
})
