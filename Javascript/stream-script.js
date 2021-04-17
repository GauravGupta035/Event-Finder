var slideIndex = 0;
var timer = setTimeout(showSlidesAuto, 0);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  

  clearTimeout(timer);
  timer = setTimeout(showSlidesAuto, 2000);
}

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  

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