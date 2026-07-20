const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
  });
}

const slider = document.querySelector('.projects-slider');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

if (slider && prevBtn && nextBtn) {
  const step = () => slider.clientWidth * 0.8;

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -step(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: step(), behavior: 'smooth' });
  });
}

const topSlider = document.querySelector('.top-slider');
const topSliderTrack = document.querySelector('.top-slider-track');
const topPrev = document.querySelector('.top-prev');
const topNext = document.querySelector('.top-next');
const topSlides = document.querySelectorAll('.top-slide');
let topIndex = 0;

const updateTopSlider = () => {
  if (!topSliderTrack) return;
  topSliderTrack.style.transform = `translateX(-${topIndex * 100}%)`;
};

const nextTopSlide = () => {
  topIndex = (topIndex + 1) % topSlides.length;
  updateTopSlider();
};

if (topPrev && topNext && topSliderTrack && topSlides.length) {
  topPrev.addEventListener('click', () => {
    topIndex = (topIndex - 1 + topSlides.length) % topSlides.length;
    updateTopSlider();
  });
  topNext.addEventListener('click', () => {
    nextTopSlide();
  });

  setInterval(nextTopSlide, 6000);
}
