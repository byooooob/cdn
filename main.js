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


// Smooth Scrolling
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

window.addEventListener('scroll', scroll, {passive: true});

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

/*
// Liquid Distort Material
let material = new Blotter.LiquidDistortMaterial();
material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.03;
material.uniforms.uSeed.value = 0.1;


//Line 2
container2 = document.getElementById("liquify2");
const text2 = new Blotter.Text("flexibility", {
  family: "Monument Extended",
  size: 32,
  fill: "#fff"
});
let blotter2 = new Blotter(material, {texts: text2});
let scope2 = blotter2.forText(text2);
container2.textContent = '';
scope2.appendTo(container2);


//Line 3
container3 = document.getElementById("liquify3");
const text3 = new Blotter.Text("of freelancers", {
  family: "Monument Extended",
  size: 32,
  fill: "#fff"
});
let blotter3 = new Blotter(material, {texts: text3});
let scope3 = blotter3.forText(text3);
container3.textContent = '';
scope3.appendTo(container3);
*/

$('a').click(function(){
  var jumptoelement = $(this).attr('data-jump');
  $('html, body').animate({
    scrollTop: $("#" + jumptoelement).offset().top
  }, 1000);
});

grain_boolean = 1;

$('.grains-toggle').click(function(){
    
    if(grain_boolean == 1){     
      grain_boolean = 0;
      var options = {
        "animate": false,
          "patternWidth": 150,
          "patternHeight": 150,
          "grainOpacity": 0.06,
          "grainDensity": 1,
          "grainWidth": 1,
          "grainHeight": 1
      }
      grained("#grains", options);
      $(".grained-bg").attr("style", "position: fixed; overflow: hidden;");

    } else if(grain_boolean == 0) {
      grain_boolean = 1;
      
      var options = {
        "animate": true,
          "patternWidth": 150,
          "patternHeight": 150,
          "grainOpacity": 0.06,
          "grainDensity": 1,
          "grainWidth": 1,
          "grainHeight": 1
      }
      grained("#grains", options);

      $(".grained-bg").attr("style", "position: fixed; overflow: hidden;");
    }
});

$('.radio-button-items').click(function(){  
  //Removing from other
  $(this).siblings('.radio-button-items').removeClass('active');
  $(this).siblings('.radio-button-items').each(function(){
    $(this).children('.radio-button').children('.radio-button-inside').removeClass('active');
  });

  //Adding to this
  $(this).addClass('active');
  $(this).children('.radio-button').children('.radio-button-inside').addClass('active');  
});

$('.request-submit').click(function(){
  $('.syp_submit').click();
});


$('#syp-name').keyup(function(){
  var name = $(this).val();
  $('#sum_name').val(name);
});

$('#syp-role .radio-button-items').click(function(){
  var role = $(this).text();
  $('#sum_role').val('');
  $('#sum_role').val(role);
});

$('#syp-request  .radio-button-items').click(function(){
  var request = $(this).text();
  $('#sum_request').val('');
  $('#sum_request').val(request);
});

$('#syp-details').keyup(function(){
  var details = $(this).val();
  $('#sum_details').val(details);
});

$('#syp-budget').keyup(function(){
  var details = $(this).val();
  $('#sum_budget').val(details);
});

$('#syp-email').keyup(function(){
  var email = $(this).val();
  $('#sum_email').val(email);
});


$('#syp-budgetype .radio-button-items').click(function(){
  var budgetype = $(this).text();
  $('#sum_budget_type').val('');
  $('#sum_budget_type').val(budgetype);
});


$('#syp-insta').keyup(function(){
  var insta = $(this).val();
  $('#sum_insta').val(insta);
});