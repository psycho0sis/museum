const pictureInnerContainer = document.querySelector('.gallery__picture-inner-container');
const array = ["galery1", "galery2", "galery3", "galery4", "galery5", "galery6", "galery7", "galery8", "galery9",
    "galery10", "galery11", "galery12", "galery13", "galery14", "galery15"];

array.sort(() => Math.random() - 0.5);
function foo() {
    array.forEach(function (item) {
        const img = document.createElement('img');
        img.classList.add('gallery__item');
        img.classList.add('_anim-items');
        img.src = `./assets/img/gallery/${item}.jpeg`;
        img.alt = `${item}`;
        img.loading = `lazy`;
        pictureInnerContainer.append(img);
    })
}
foo(array);

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;

            const animItemOffset = offset(animItem).top;
            const animStart = 9;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                 let animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("_active");
            } else {
                animItem.classList.remove("_active");
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}