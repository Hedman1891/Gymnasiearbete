const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll med timer
const intervalTime = 4000;
let slideInterval;

const nextSlide = () => {                                   
  const current = document.querySelector('.current');       // Get current class
  current.classList.remove('current');                      // Remove current class
                        
  if (current.nextElementSibling) {                         // Check for next slide
    current.nextElementSibling.classList.add('current');    // Add current to next sibling
  } else {                                                  
    slides[0].classList.add('current');                     // Add current to start
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {                                   // Get current class
  const current = document.querySelector('.current');       // Remove current class
  current.classList.remove('current');                      // Check for prev slide
  if (current.previousElementSibling) {                     // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {                                                  // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};


// Knapptryck
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Autoscroll
if (auto) {
  // Scrolla till nästa bild/slide vid given tid
  slideInterval = setInterval(nextSlide, intervalTime);
}
