const sliderImages = document.querySelectorAll('.slider img');
const numSlides = sliderImages.length;
let currentSlide = 0;

// Function to show the current slide and hide the others
function showSlide(index) {
  for (let i = 0; i < numSlides; i++) {
    sliderImages[i].classList.remove('active');
  }
  sliderImages[index].classList.add('active');
}

// Show the first slide
showSlide(currentSlide);

// Set up event listeners for the next and previous buttons
const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');
nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= numSlides) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});
prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = numSlides - 1;
  }
  showSlide(currentSlide);
});

// Set up automatic slide transition
setInterval(() => {
  currentSlide++;
  if (currentSlide >= numSlides) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}, 4000);
