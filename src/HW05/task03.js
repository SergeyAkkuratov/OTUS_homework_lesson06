export default function showMaxAndMin(array) {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  array.forEach((el) => {
    min = el < min ? el : min;
    max = el > max ? el : max;
  });
  console.log(min, max);
}
