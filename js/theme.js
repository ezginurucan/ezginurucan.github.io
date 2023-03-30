function changeTheme() {
    var link = document.getElementsByTagName("link")[0];
    if (link.getAttribute("href") == "css/styles.css") {
      link.setAttribute("href", "css/light.css");
      document.querySelector(".theme-button").innerHTML = "Dark Theme";
    } else {
      link.setAttribute("href", "css/styles.css");
      document.querySelector(".theme-button").innerHTML = "Light Theme";
    }
  }
  