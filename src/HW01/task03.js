export function sumOfDigits() {
    let sum = `${prompt("Введите трезначное число:")}`.split("").reduce((memo, x) => {return Number(memo)+Number(x)});
    console.log(sum)
}