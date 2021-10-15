//lazy loading
const lazyImages = document.querySelectorAll("img[data-src]");
const loadVideoBlock = document.querySelectorAll(".load__video");
const windowHight = document.documentElement.clientHeight;
let lazyImagesPositions = [];
if (lazyImages.length > 0) {
  lazyImages.forEach(img => {
    if (img.dataset.src) {
      lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
      lazyScrollCheak();
    }
  })
}
window.addEventListener("scroll", lazyScroll);
function lazyScroll() {
  if (document.querySelectorAll("img[data-src]").length > 0) {
    lazyScrollCheak();
  }
}
function lazyScrollCheak() {
  let imgIndex = lazyImagesPositions.findIndex(
    item => pageYOffset > item - windowHight
  );
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute("data-src");
    }
    delete lazyImagesPositions[imgIndex];
  }
}
console.log("Ваша оценка - 129 баллов\nОтзыв по пунктам ТЗ:\nВыполненные пункты:")
console.log("1) Слайдер в секции Welcome +20")
console.log("2) Слайдер в секции Video (в слайдах - видео с YouTube) +14")
console.log("3) Кастомный видеоплеер, созданный на основе тега video +24")
console.log("4) управление плеером с клавиатуры. Горячие клавиши должны работать так же, как работают эти клавиши в YouTube видео +10")
console.log("5) Слайдер сравнения изображений в секции Explore +10")
console.log("6) Анимация при прокрутке изображений в секции Galery +8")
console.log("7) Калькулятор продажи билетов в секции Tiskets +4")
console.log("7) Калькулятор продажи билетов в форме продажи билетов +3")
console.log("7) Валидация формы +16")
console.log("7) Интерактивная карта в секции Contacts +12")
console.log("7) Плавная смена картинок в секции tickets +10")

