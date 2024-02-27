export function isEmail(){
    let userString = prompt("Введите строку для проверки:");
    let regexp = /[a-z\.-_0-9]+@[a-z\.-_0-9]+\.[a-z]{2,}/i;
    return regexp.test(userString);
}