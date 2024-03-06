export default function getAvarage() {
  const end = prompt("Введите число N:");
  let result = 0;
  let count = 0;
  for (let i = 1; i <= end; i++) {
    if (i % 2 !== 0) {
      result += i;
      count++;
    }
  }
  console.log(result / count);
}
