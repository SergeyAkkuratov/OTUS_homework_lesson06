export default function getSqrAndLength(radius) {
  const square = Math.PI * radius ** 2;
  const length = 2 * radius * Math.PI;

  console.log(square, length);
}
