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


var blocks = document.getElementsByClassName('block');
	var container = document.getElementsByClassName('content');
  var hs = new HorizontalScroll.default({
		blocks : blocks,
	  container: container,
		isAnimated: true,
		springEffect: 0.8
});


