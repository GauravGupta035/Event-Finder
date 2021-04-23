var slideIndex = 0;
var timer = setTimeout(showSlidesAuto, 0);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");

  if (n >= slides.length) 
    slideIndex = 0;    
  else if (n < 0)
    slideIndex = slides.length-1;

  for (i = 0; i < slides.length; i++)
      slides[i].style.display = "none";  
  slides[slideIndex].style.display = "block"; 
  
  clearTimeout(timer);
  timer = setTimeout(showSlidesAuto, 0);
}

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName("slides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  if (slideIndex >= slides.length)
    slideIndex = 0;  
  slides[slideIndex].style.display = "block";   
  slideIndex++; 

  timer = setTimeout(showSlidesAuto, 2000);
}

function streamScroll(id, dir) {
  var x = document.getElementById("stream"+id);
  var scrollCfg = {
    left: 0,
    top: 0,
    behaviour: 'smooth'
  }

  switch(dir) {
    case 'r':
      scrollCfg.left = 800;
      break;
    case 'l':
      scrollCfg.left = -800;
  }

  x.scrollBy(scrollCfg);
}