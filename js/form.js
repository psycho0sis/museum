const modalNameInput = document.querySelector(".modal__name > input[type=text]");
const modalPhoneInput = document.querySelector(".modal__phone > input[type=tel]");
const modalEmailInput = document.querySelector(".modal__email > input[type=email]");
const modalName = document.querySelector(".modal__name");
const modalPhone = document.querySelector(".modal__phone");
const modalEmail = document.querySelector(".modal__email");
const errorMessage = document.querySelector(".error-message");
const errorMessage2 = document.querySelector(".error-message2");
const errorMessage3 = document.querySelector(".error-message3");

const checkName = () => {
   return true;
}

modalNameInput.onfocus = function() {
    modalNameInput.placeholder = "";
};
modalPhoneInput.onfocus = function() {
    modalPhoneInput.placeholder = "";
};
modalEmailInput.onfocus = function() {
    modalEmailInput.placeholder = "";
};
modalNameInput.onblur = function() {
    modalNameInput.placeholder = "Name";
};
modalPhoneInput.onblur = function() {
    modalPhoneInput.placeholder = "Phone";
};
modalEmailInput.onblur = function() {
    modalEmailInput.placeholder = "Email";
};
function isNotValid(input) {
    input.classList.add("invalid");
}
function isValid(input) {
    input.classList.remove("invalid");
}


function isValidEmeil(str) {
  if(isNameValid(str) && isFirstDomenValid(str) && isSecondDomen(str)){
    return true;
  } else {
    return false;
  }
}
function isNameValid(str){
  let array = str.split("");
  let indexEndUserName = array.indexOf("@");
  let userName = array.splice(0, 8).join("");
  let nameRegex = /^[a-zA-Z0-9_\-]+[^\s]{3,15}$/i;
  if(nameRegex.test(userName)){
    return true;
  }
}
function isFirstDomenValid(str){
  let substr = str.split("@")[1]
  let firstDomen = substr.split(".")[0];
  let domenRegex = /^[a-z]+[^\s]{4}$/i;
  if(firstDomen.length > 4 && domenRegex.test(firstDomen)){
    return true;
  }
}
function isSecondDomen(str){
  let secondDomen = str.split(".")[1]
  let domenRegex = /^[a-z]+[^\s]{2}$/i;
  if(secondDomen.length > 2 && domenRegex.test(secondDomen)){
    return true;
  }
}

modalNameInput.addEventListener("change", () => {
    const modalNameInput_value = modalNameInput.value;
    const nameCheck = /^([а-яё\s]+|[a-z\s]+){3,15}$/i.test(modalNameInput_value);    
    if (!nameCheck) {
        isNotValid(modalName);
        errorMessage.innerHTML = "*The field must contain from 3 to 15 characters";
    } else {
        isValid(modalName);
        errorMessage.innerHTML = " ";
    }  
})
modalEmailInput.addEventListener("change", () => {
    if (!isValidEmeil(modalEmailInput.value)) {
        isNotValid(modalEmail);
        errorMessage2.innerHTML = "*Invalid e-mail";
    } else {
        isValid(modalEmail);
        errorMessage2.innerHTML = " ";
    }  
})
modalPhoneInput.addEventListener("change", () => {
    const modalPhoneInput_value = modalPhoneInput.value;
    const phoneCheck = /^\d[\d\(\)\ -]{4,10}\d$/.test(modalPhoneInput_value);    
    if (!phoneCheck) {
        isNotValid(modalPhone);
        errorMessage3.innerHTML = "*Invalid phone number";
    } else {
        isValid(modalPhone);
        errorMessage3.innerHTML = " ";
    }  
})
