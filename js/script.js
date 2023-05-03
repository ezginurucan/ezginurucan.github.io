var topButton = document.getElementById("topButton");

 function Scroll() {
  window.scrollTo(0, 0);
};

window.onscroll = function() {
  var scrollPos = window.scrollY;
  if (scrollPos > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};
