import $ from "jquery";

$(window).scroll(function(event) {
  var scroll = $(window).scrollTop();

  //Small Devices
  if (scroll > 80 && window.innerWidth <= 414) {
    $(".navbar").css({ position: "fixed", padding: "30px" });
  } else if (scroll < 80 && window.innerWidth <= 414) {
    $(".navbar").css({ position: "relative", padding: "15px" });
  }
});

//Set ScrollSpy for appropriate devices
$(function() {
  if (window.innerWidth > 414) {
    //If large devices, remove small scrollspy
    $("ul#myScrollSpy").removeAttr("myScrollSpy");
  } else {
    //If small devices, remove large scrollspy
    $("div#myScrollSpy").removeAttr("myScrollSpy");
  }
});
