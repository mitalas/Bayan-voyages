const nav = document.getElementById('nav');

window.onscroll = () =>{
   nav.style.background = 'none';
 }
 // fade
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 400); // Change image every 4 seconds
}
showSlides();

var leftgear = document.getElementById("leftgear");
    
window.addEventListener("scroll", function() {
    leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
});