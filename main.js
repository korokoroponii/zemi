document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger();
});

window.onload = function() {
  document.getElementById("text-button").onclick = function() {
    document.getElementById("responsive_menu_box").style.display = "flex";
  };

  document.getElementById("text-button-close").onclick = function() {
    document.getElementById("responsive_menu_box").style.display = "none";
  };
}
