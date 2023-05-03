function changeTheme() {
  var link = document.getElementsByTagName("link")[4];
  if (link.getAttribute("href") == "css/styles.css") {
    link.setAttribute("href", "css/light.css");
    document.querySelector(".theme-button").innerHTML = "Dark Theme";
    // Set cookie to remember theme preference
    document.cookie = "theme=light";
  } else {
    link.setAttribute("href", "css/styles.css");
    document.querySelector(".theme-button").innerHTML = "Light Theme";
    // Set cookie to remember theme preference
    document.cookie = "theme=dark";
  }
}

function mousein(){
  var element = document.getElementById("buton");
  element.style.border="aliceblue";
  element.style.color="aliceblue";
}

function mouseOut(){
  var element = document.getElementById("buton");
  element.style.color="gray";
}

window.onload = function() {
  var savedTheme = getCookie("theme");
  if (savedTheme) {
    var link = document.getElementsByTagName("link")[4];
    if (savedTheme === "light") {
      link.setAttribute("href", "css/light.css");
      document.querySelector(".theme-button").innerHTML = "Dark Theme";
    } else {
      link.setAttribute("href", "css/styles.css");
      document.querySelector(".theme-button").innerHTML = "Light Theme";
    }
  }
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) {
    return parts.pop().split(";").shift();
  }
}
