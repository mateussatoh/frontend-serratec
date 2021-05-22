var prevScrollposition = window.pageYOffset;
window.onscroll = function () {
  console.log(window);
  var currentScrollPosition = window.pageYOffset;
  if (prevScrollposition > currentScrollPosition) {
    console.log("subindo");
    document.getElementById("navbar").style.top = "0";
  } else {
    console.log("descendo");

    document.getElementById("navbar").style.top = "-9rem";
  }
  prevScrollposition = currentScrollPosition;
};
