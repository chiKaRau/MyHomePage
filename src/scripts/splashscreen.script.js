import $ from "jquery";

import anime from "animejs";

$(function() {
  anime({
    targets: "#begin",
    delay: 1000,
    easing: "easeInOutCirc",
    update: function(anim) {
      $("#begin .progress-log").val(Math.round(anim.progress) + "%");
    },
    complete: function(anim) {
      $("#splash").fadeOut("slow", () => {
        $("#splash").remove();
      });

      //Introduction
      $("#introduction").css({ opacity: 1 });

      //Contact
      $("#contact").css({ opacity: 1 });
    }
  });

  //In case anime not wokring.
  $("#splash").click(() => {
    $("#splash").fadeOut("slow", () => {
      $("#splash").remove();
    });
  });
});
