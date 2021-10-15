const burgerBtn = document.querySelector(".header__btn");
const burger = document.querySelector(".header__nav");
const burgerItems = document.querySelectorAll(".header__list-item");
const welcomeTitle = document.querySelector(".welcome__title");
const welcomeText = document.querySelector(".welcome__text");
const welcomeBtn = document.querySelector(".welcome__btn");
if (burgerBtn) {
    burgerBtn.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        welcomeTitle.classList.toggle("none");
        welcomeText.classList.toggle("none");
        welcomeBtn.classList.toggle("none");
        burgerBtn.classList.toggle("header__btn--active");
        burger.classList.toggle("header__nav--active");
    })
}
for (const burgerItem of burgerItems) {
    burgerItem.addEventListener('click', () => {
        welcomeTitle.classList.remove("none");
        welcomeText.classList.remove("none");
        welcomeBtn.classList.remove("none");
        document.body.classList.remove("_lock");
        burger.classList.remove("header__nav--active");
        burgerBtn.classList.remove("header__btn--active");
    })
}
