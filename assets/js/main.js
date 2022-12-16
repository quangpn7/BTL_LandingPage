//initialize vars
var arrowRight = document.querySelector(".arrow-right"),
  arrowLeft = document.querySelector(".arrow-left"),
  menuAngle = 0,
  iconAngle = 0,
  icons = document.querySelectorAll("i"),
  hexWrapper = document.querySelector(".hex-row-wrapper"),
  debounce,
  delay = 50;

//movenment controls
function moveRight() {
  clearTimeout(debounce);
  debounce = setTimeout(function () {
    menuAngle += 60;
    iconAngle -= 60;
    //rotate icon
    for (let i = 0; i < icons.length; i++) {
      icons[i].setAttribute(
        "style",
        "transform: rotate(" + iconAngle + "deg);"
      );
    }
    //rotate menu
    hexWrapper.setAttribute(
      "style",
      "transform: rotate(" + menuAngle + "deg);"
    );
  }, delay);
}

function moveLeft() {
  clearTimeout(debounce);
  debounce = setTimeout(function () {
    menuAngle -= 60;
    iconAngle += 60;
    //rotate icon
    for (let i = 0; i < icons.length; i++) {
      icons[i].setAttribute(
        "style",
        "transform: rotate(" + iconAngle + "deg);"
      );
    }
    //rotate menu
    hexWrapper.setAttribute(
      "style",
      "transform: rotate(" + menuAngle + "deg);"
    );
  }, delay);
}

//click listeners
arrowLeft.addEventListener("click", function () {
  moveLeft();
});
arrowRight.addEventListener("click", function () {
  moveRight();
});

//key listenters
document.body.addEventListener("keydown", function (e) {
  var keycode = e.charCode || e.keyCode;
  switch (keycode) {
    default:
      break;
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
});
