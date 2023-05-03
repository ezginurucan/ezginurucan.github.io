var topButton = document.getElementById("topButton");

 function Scroll() {
  window.scrollTo(0, 0);
};

window.onscroll = function() {
  var scrollPos = window.scrollY;
  if (scrollPos > 50) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};
