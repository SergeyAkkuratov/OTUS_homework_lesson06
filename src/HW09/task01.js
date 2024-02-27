export function isRight() {
    let [a, b, c] = prompt("Введите коэфициенты уровнения через пробел:").split(" ").map((x) => Number(x));
    console.log(a, b, c);
    if (a === Math.max(a, b, c)){
        return Math.pow(a, 2) === (Math.pow(b, 2) + Math.pow(c, 2));
    } else if (b === Math.max(a, b, c)){
        return Math.pow(b, 2) === (Math.pow(a, 2) + Math.pow(c, 2));
    } else {
        return Math.pow(c, 2) === (Math.pow(a, 2) + Math.pow(b, 2));
    }
}