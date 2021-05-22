var prevScrollposition = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPosition = window.pageYOffset;
  console.log(currentScrollPosition);
  if (prevScrollposition > currentScrollPosition) {
    console.log("subindo");
    document.getElementById("navbar").style.top = "0";
  } else {
    console.log("descendo");

    document.getElementById("navbar").style.top = "-14rem";
  }
  prevScrollposition = currentScrollPosition;
};

const mobile = document.querySelector(".mobile-menu");

function closeMenu() {
  mobile.style.cssText += "right: -100vw;";
}

function openMenu() {
  mobile.style.cssText += "right: 0;";
}
