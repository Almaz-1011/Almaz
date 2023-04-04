const slider = document.querySelector('.gallery-slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let counter = 0;
const slideWidth = document.querySelector('.slide').clientWidth;

function slideNext() {
    if (counter < 1) {
        counter++;
        slider.style.transform = `translateX(-${slideWidth * counter}px)`;
    }
}

function slidePrev() {
    if (counter > 0) {
        counter--;
        slider.style.transform = `translateX(-${slideWidth * counter}px)`;
    }
}

prevButton.addEventListener('click', slidePrev);
nextButton
