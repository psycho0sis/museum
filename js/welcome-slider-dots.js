const dots = document.querySelectorAll(".welcome__bullet");
const arrowPrev = document.querySelector(".welcome__arrow-prev");
const arrowNext = document.querySelector(".welcome__arrow-next");
const sliderWrapper = document.querySelector(".welcome__slider-wrapper");
const slides = document.querySelectorAll(".welcome__slider-slide");
const slidesCount = sliderWrapper.querySelectorAll('.welcome__slider-slide').length;
const welcomeSlider = document.querySelector(".welcome__slider");
const fractions = document.querySelector(".welcome__fractions > span")

let activeSlideIndex = 0;

fractions.innerHTML = "01  |  ";
function innerFraction() {
    fractions.innerHTML = `0 ${activeSlideIndex + 1} | `;
}
const activeSlide = n => {
    const width = welcomeSlider.clientWidth;
    sliderWrapper.style.transform  = `translateX(-${activeSlideIndex * width}px)`;
};
const activeDot = n => {
    for(let dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
    innerFraction()
};
const prepareCurrentSlide = ind => {
    activeSlide(activeSlideIndex);
    activeDot(activeSlideIndex);
}
const nextSlide = () => {
    if(activeSlideIndex == slidesCount - 1) {
        activeSlideIndex = 0;
        prepareCurrentSlide(activeSlideIndex);
       
    } else {
        activeSlideIndex++;
        prepareCurrentSlide(activeSlideIndex);
    }
    activeSlide();
    innerFraction()
};

const prevSlide = () => {
    if(activeSlideIndex == 0) {
        activeSlideIndex = slidesCount - 1;
        prepareCurrentSlide(activeSlideIndex);
    } else {
        activeSlideIndex--;
        prepareCurrentSlide(activeSlideIndex);
    }
    activeSlide();
    innerFraction()
};

dots.forEach((item, indexDot) => {
   item.addEventListener('click', () => {
       activeSlideIndex = indexDot;
       prepareCurrentSlide(activeSlideIndex);
   })
})
slides.forEach((item, indexSlide) => {
    item.addEventListener("mousedown", () => {
        activeSlideIndex = indexSlide;
       prepareCurrentSlide(activeSlideIndex);
    })
})

arrowPrev.addEventListener('click', prevSlide);
arrowNext.addEventListener('click', nextSlide);