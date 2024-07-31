export default function sumOfDigits() {
  const sum = `${prompt("Введите трезначное число:")}`
    .split("")
    .reduce((memo, x) => Number(memo) + Number(x));
  console.log(sum);
}
