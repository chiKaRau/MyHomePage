import $ from "jquery";

let animeStarted = true;

$(window).scroll(function(event) {
  var scroll = $(window).scrollTop();

  //Large Devices
  if (
    scroll > document.getElementById("skills").scrollTop &&
    window.innerWidth > 414
  ) {
    if (animeStarted) {
      let offset = 0;
      $(".skillBox").each(function(i, obj) {
        setTimeout(function() {
          $(obj).fadeIn();
        }, 50 + offset);
        offset += 50;
      });
      animeStarted = false;
    }
  }
});

$(function() {
  if (window.innerWidth > 414) {
    $(".skillBox").hide();
  }
});
