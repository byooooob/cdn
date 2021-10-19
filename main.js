// Search Text Loop - START//
let currIndex = 0;
let typed = "";
const element = document.querySelector(".typity");

function startType(pun, index) {
  if (index < pun.length) {
    typed += pun.charAt(index);
    element.innerHTML = typed;
    index++;
    setTimeout(function () {
      startType(pun, index);
    }, 80);
  } else {
    setTimeout(function () {
      element.classList.add("highlight");
    }, 1000);

    setTimeout(function () {
      element.classList.remove("highlight");
      typed = "";
      element.innerHTML = typed;
      startType(getRandomPun(), 0);
    }, 2000);
  }
}

function getRandomPun() {
  const puns = [
    "a Team",
    "a Freelancer",
    "a Retainer",
    "a Contractor",
    "an Agency",
  ];
  // const index = Math.floor(Math.random() * puns.length);
  currPun = puns[currIndex];
  currIndex = currIndex + 1;
  if (currIndex >= puns.length) currIndex = 0;

  return currPun;
}
startType(getRandomPun(), 0);
// Search Text Loop - END//


// Setting Grains on top
$(".grained-bg").attr("style", "position: fixed; overflow: hidden;");

//Finding Total width of the container
var TotalWidth = 0;
$(".content-scroller").children("div").each(function () {
    var childrenWidth = $(this).innerWidth();
    TotalWidth += childrenWidth;
});

// Setting Height of the scroller
var heightofscroller = (TotalWidth - $(".content-scroller").innerWidth()) + $('body').innerHeight();
$('.scroller-container').css('height',heightofscroller);


// Dummy Smooth Scroll
'use strict';
const isTouchDevice = 'ontouchstart' in document.documentElement;
disableScroll();
if (!isTouchDevice) smoothScroll();
window.onresize = () => {
  resizeBodyHeight();
};
window.onload = () => {
  enableScroll();
  resizeBodyHeight();
};
// Functions
function disableScroll() {
  document.body.style.overflow = 'hidden';
}
function enableScroll() {
  document.body.style.overflow = '';
}
function smoothScroll() {
  document.querySelector('.content').classList.add('SmoothScroll');
  new SmoothScroll({
    target: document.querySelector('.content-scroller'),
    scrollEase: 0.08,
    maxOffset: 500,
  });
}
function resizeBodyHeight() {
  document.body.style.height = document.querySelector('.content').scrollHeight + 'px';
}



