var slideshows = document.querySelectorAll('.slideshow');

function nextSlide() {
  for (var i = 0; i < slideshows.length; i++) {
    var slides = slideshows[i].querySelectorAll('.slide');
    var currentSlide = slideshows[i].querySelector('.slide.active');
    currentSlide.classList.remove('active');
    var nextSlide = currentSlide.nextElementSibling || slides[0];
    nextSlide.classList.add('active');
  }
}

var slideInterval = setInterval(nextSlide, 5000);

