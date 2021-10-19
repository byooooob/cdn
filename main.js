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

$(".grained-bg").attr("style", "position: fixed; overflow: hidden;");

//Finding Total width of the container
var TotalWidth = 0;
$(".content-scroller")
  .children("div")
  .each(function () {
    var childrenWidth = $(this).innerWidth();
    TotalWidth += childrenWidth;
  });

//Function for scrolling the content
function scrollContentOnPage(percentage) {
  var scrollValue =
    ((TotalWidth - $(".content").innerWidth()) / 100) * percentage;
  $(".content-scroller").css("transform", "translate(-" + scrollValue + "px)");
}

//Scrolling content horizontally by matching it with vertical scroll percentage
$(window).on("scroll", function () {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();

  var scrollPercent = (s / (d - c)) * 100;
  scrollContentOnPage(scrollPercent);
});