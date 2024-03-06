export default function isPhoneNumber() {
  const userString = prompt("Введите строку для проверки:");
  const regexp = /^(\+\d+|8) ?\(?\d{3}\)? ?\d{3}([ -]|)?\d{2}(\2)?\d{2}$/;
  return regexp.test(userString);
}
