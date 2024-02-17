function darklightswitch() {
  var elements = document.querySelectorAll("*");
  elements.forEach(function(element) {
    element.classList.toggle("light-mode");
  });

  var element2 = document.querySelector(".topnav");
  element2.classList.toggle("light-mode-shadow1");
  
  var element3 = document.querySelector("footer");
  element3.classList.toggle("light-mode-shadow2");

  var element4 = document.querySelector(".topnav a:hover, .topnav a:active");
  element4.classList.toggle("light-mode2");
  
  var element5 = document.querySelectorAll(".topnav a");
  element5.forEach(function(element) {
    element.classList.toggle("light-mode3");
  });
}


