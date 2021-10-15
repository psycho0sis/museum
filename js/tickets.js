const permanentExhibition = document.getElementById("permanent");
const temporaryExhibition = document.getElementById("temporary");
const combinedExhibition = document.getElementById("combined");
const inputs = document.querySelectorAll(".tickets__type-item-input");
const basicAmount = document.getElementById("basicAmount");
const seniorAmount = document.getElementById("seniorAmount");
const totalPrice = document.getElementById("totalPrice");
const modalTotalPrice = document.querySelector(".modal__total-price span");
const ticketsImg = document.querySelector(".tickets__content-img");

const arrayOfImg = ["tickets-img1", "tickets-img2", "tickets-img3", "tickets-img4"];

function changebg() {
    let path = "url(./assets/img/ticketsbg/";
    let ext = ".jpg)";
    let backs = [];
    
    for (var i = 1; i <= 6; i++) {
        var fileNum = ('img' + i).substr(-4);
        var fullPath = path + fileNum + ext;
        backs.push(fullPath);
    }
    let randomImg = Math.floor(Math.random() * backs.length);
    
    ticketsImg.style.background = (backs[randomImg]);
    ticketsImg.style.backgroundSize = "cover";
    ticketsImg.style.backgroundPosition = "top center";
    ticketsImg.style.backgroundRepeat = "no-repeat";  
}
setInterval(changebg, 2000);

modalTotalPrice.innerHTML = 30;

let permanentValue = permanentExhibition.dataset.value;
let temporaryValue = temporaryExhibition.dataset.value;
let combinedValue = combinedExhibition.dataset.value;

inputs.forEach(function(item, index){
    item.addEventListener("input", (e) => {
        let result = e.target.dataset.value * basicAmount.value + Math.floor(e.target.dataset.value * seniorAmount.value / 2);
        modalTotalPrice.innerHTML = result;
        totalPrice.innerHTML = result; 
    })
    localStorage.setItem("input", index);
        if (localStorage.getItem("input") === index) {
            e.target.setAttribute("checked", "checked");
        }  
})
