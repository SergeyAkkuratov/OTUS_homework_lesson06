export default function getRoots(a, b, c) {
  let x1;
  let x2;

  if (a === 0) {
    console.log(x1, x2);
    return;
  }

  const D = b * b - 4 * a * c;

  if (D < 0) {
    console.log(x1, x2);
    return;
  }

  x1 = (-b + Math.sqrt(D)) / (2 * a);
  if (D > 0) {
    x2 = (-b - Math.sqrt(D)) / (2 * a);
  }

  console.log(x1, x2);
}
