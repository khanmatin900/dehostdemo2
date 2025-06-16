const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function slideRightToLeft() {
  currentIndex++;
  sliderContainer.style.transition = 'transform 0.8s ease';
  sliderContainer.style.transform = `translateX(-${currentIndex * 25}%)`;

  if (currentIndex === slides.length - 1) {
    setTimeout(() => {
      sliderContainer.style.transition = 'none';
      sliderContainer.style.transform = 'translateX(0)';
      currentIndex = 0;
      setTimeout(() => {
        sliderContainer.style.transition = 'transform 0.8s ease';
      }, 50);
    }, 800);
  }
}

setInterval(slideRightToLeft, 2000);