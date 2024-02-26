import { getSqrAndLength } from "./task02.js";
import { getRoots } from "./task03.js";

function onclickTask02Button(){
    getSqrAndLength(Number(prompt("Введите радиус окружности:")));
}

function onclickTask03Button(){
    let [a, b, c] = prompt("Введите коэфициенты уровнения через пробел:").split(" ");
    getRoots(Number(a), Number(b), Number(c));
}

document.querySelector("#task02").addEventListener("click", onclickTask02Button);
document.querySelector("#task03").addEventListener("click", onclickTask03Button);