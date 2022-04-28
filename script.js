const sliderContainer = document.querySelector('.slider-container');

const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const sliders = slideLeft.querySelectorAll('.item');
const slidersLength = sliders.length;

let activeSliderIndex = 0;

// function changeActiveSliderIndex(n) {
//   activeSliderIndex = (n + slidersLength) % slidersLength;
// }

slideLeft.style.top = `-${(slidersLength - 1) * 100}vh`;

upButton.addEventListener('click', () => {
  changeSlide('up');
});
downButton.addEventListener('click', () => {
  changeSlide('down');
});

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSliderIndex++;

    if (activeSliderIndex > slidersLength - 1) {
      activeSliderIndex = (activeSliderIndex + slidersLength) % slidersLength;
    }
  } else if ((direction = 'down')) {
    activeSliderIndex--;

    if (activeSliderIndex < 0) {
      activeSliderIndex = slidersLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSliderIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSliderIndex * sliderHeight
  }px)`;
};
