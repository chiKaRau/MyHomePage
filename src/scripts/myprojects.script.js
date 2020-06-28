import $ from "jquery";

let animeStarted = true;

$(window).scroll(function(event) {
  var scroll = $(window).scrollTop();

  //Large Devices
  if (
    scroll > document.getElementById("projects").scrollTop &&
    window.innerWidth > 414
  ) {
    if (animeStarted) {
      $("#p2")
        .css({ "margin-top": -300 })
        .addClass("floatingObj");

      $("#p3")
        .css({ "margin-left": -125 })
        .addClass("floatingObj");

      $("#p4")
        .css({ "margin-left": 325 })
        .addClass("floatingObj");
      animeStarted = false;
    }
  }
});

$(function() {
  $("#ptextContainer").mouseover(function() {
    $("#ptext").text("Let's Go!");
  });
  $("#ptextContainer").mouseout(function() {
    $("#ptext").text("Check out my latest Projects!");
  });
});
