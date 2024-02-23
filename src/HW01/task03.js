export function sumOfDigits() {
    const number = prompt("Введите трёхзначное число:");
    let sum = `${number}`.split("").reduce((memo, x) => {return Number(memo)+Number(x)});
    console.log(sum)
}