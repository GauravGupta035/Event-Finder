var slideIndex = -1, timer;

showSlidesAuto();

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
  slideIndex--;
  showSlidesAuto();
}

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName("slides");

  slideIndex++;
  if (slideIndex >= slides.length)
    slideIndex = 0;

  for (i = 0; i < slides.length; i++)
    slides[i].style.display = "none";   
  slides[slideIndex].style.display = "block";

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