export function isEmail(string){
    let regexp = /[a-z\.-_0-9]+@[a-z\.-_0-9]+\.[a-z]{2,}/i;
    return regexp.test(string);
}