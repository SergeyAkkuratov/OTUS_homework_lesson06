export default function isRight() {
  const [a, b, c] = prompt("Введите коэфициенты уровнения через пробел:")
    .split(" ")
    .map((x) => Number(x));
  console.log(a, b, c);
  if (a === Math.max(a, b, c)) {
    return a ** 2 === b ** 2 + c ** 2;
  }
  if (b === Math.max(a, b, c)) {
    return b ** 2 === a ** 2 + c ** 2;
  }
  return c ** 2 === a ** 2 + b ** 2;
}
