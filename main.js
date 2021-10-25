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


const main = document.querySelector('.contentscroller');

var TotalWidth = 0;
var item_number = 0;
$(".contentscroller").children("div").each(function () {
    var childrenWidth = $(this).innerWidth();
    TotalWidth += childrenWidth;    
    item_number += 1;
    offset_value = TotalWidth - ((TotalWidth - $('.content').innerWidth()) + $(window).height());
    totalElement = $('.scrollercontainer div').length
    $('.scrollercontainer div:nth-child('+item_number+')').height(childrenWidth - (offset_value / totalElement));
});



let sx = 0;
let sy = 0;

let dx = sx;
let dy = sy;

window.addEventListener('scroll', scroll);

function scroll() {  
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render() {  
  dx = lerp(dx, sx, 0.07);
  dy = lerp(dy, sy, 0.07);
  
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  main.style.transform = `translate(-${dy}px, -${dx}px)`;
  
  window.requestAnimationFrame(render);
}

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}