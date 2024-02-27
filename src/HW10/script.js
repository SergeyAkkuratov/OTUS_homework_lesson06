import { isDate } from "./task01.js";
import { isEmail } from "./task02.js";
import { isPhoneNumber } from "./task03.js";

const stringElement = document.querySelector("#str");
const falseIcon = document.querySelector("#false_sign");
const trueIcon = document.querySelector("#true_sign");

function switchIcons(result) {
    trueIcon.hidden = !result;
    falseIcon.hidden = result;
}

function onclickTask01Button(){
    switchIcons(isDate(stringElement.value));
}

function onclickTask02Button(){
    switchIcons(isEmail(stringElement.value));
}

function onclickTask03Button(){
    switchIcons(isPhoneNumber(stringElement.value));
}

document.querySelector("#task01").addEventListener("click", onclickTask01Button);
document.querySelector("#task02").addEventListener("click", onclickTask02Button);
document.querySelector("#task03").addEventListener("click", onclickTask03Button);