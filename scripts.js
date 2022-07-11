//GAMES SLIDESHOW
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
//


//LIGHT MODE
function lightFunction() {
  var element = document.body;
  element.classList.toggle("light-mode");
  console.log(element);
}
//


//COMING SOON
var countDownDate = new Date("Aug 4, 2022 12:12:25").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0){
    clearInterval();
    document.getElementById("timer").innerHTML = "LAUNCHED";
  }

}, 1000);
//


//FADE ON SCROLL
const appear3 = document.querySelector('.appear3'); 
const cb3 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }
  });
}
const io3 = new IntersectionObserver(cb3);
io3.observe(appear3);


const appear2 = document.querySelector('.appear2'); 
const cb2 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }
  });
}
const io2 = new IntersectionObserver(cb2);
io2.observe(appear2);


const appear4 = document.querySelector('.appear4'); 
const cb4 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }
  });
}
const io4 = new IntersectionObserver(cb4);
io4.observe(appear4);


const appear1 = document.querySelector('.appear1'); 
const cb1 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }
  });
}
const io1 = new IntersectionObserver(cb1);
io1.observe(appear1);


const appear5 = document.querySelector('.appear5'); 
const cb5 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }
  });
}
const io5 = new IntersectionObserver(cb5);
io5.observe(appear5);


const appear7 = document.querySelector('.appear7'); 
const cb7 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }
  });
}
const io7 = new IntersectionObserver(cb7);
io7.observe(appear7);
//