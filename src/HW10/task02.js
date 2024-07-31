export default function isEmail() {
  const userString = prompt("Введите строку для проверки:");
  const regexp = /[a-z.-_0-9]+@[a-z.-_0-9]+\.[a-z]{2,}/i;
  return regexp.test(userString);
}
