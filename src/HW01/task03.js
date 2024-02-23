export function sumOfDigits(number) {
    let sum = `${number}`.split("").reduce((memo, x) => {return Number(memo)+Number(x)});
    console.log(sum)
}