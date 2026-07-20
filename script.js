const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkAnchors = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinkAnchors.forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('nav-open')) {
        navLinks.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

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
