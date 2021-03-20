import $ from "jquery";

$(window).scroll(function(event) {
  var scroll = $(window).scrollTop();

  //Large Devices
  if (scroll > 80 && window.innerWidth > 414) {
    $(".sidebar").css({ width: "75px" });
    $("#App").css({ "margin-left": "75px" });
  } else if (scroll < 80 && window.innerWidth > 414) {
    $(".sidebar").css({ width: "0px" });
    $("#App").css({ "margin-left": "0px" });
  }
});
