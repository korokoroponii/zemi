document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger();
});

// window.onload = function() {
//   document.getElementById("text_button").onclick = function() {
//     document.getElementById("responsive_menu_box").style.display = "flex";
//   };
//
//   document.getElementById("text-button-close").onclick = function() {
//     document.getElementById("responsive_menu_box").style.display = "none";
//   };
// }


$(document).ready(function(){
  $(".home_picture").hide();
  $(".home_picture").slideDown("slow");

  $('.slider').slick({
      autoplay:true,
      autoplaySpeed:3000,
      fade:true,
      dots:false,
      pauseOnHover: false,
      pauseOnDotsHover: true,
      cssEase: 'linear',
      draggable:false,
  });

  $("#text_button").click(function () {
    $(".responsive_menu_box").fadeIn("slow").css("display","flex");
  });
  $("#text-button-close").click(function () {
    $(".responsive_menu_box").fadeOut("slow");
  });

});
