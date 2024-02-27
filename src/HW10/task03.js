export function isPhoneNumber(string){
    let regexp = /^(\+\d+|8) ?\(?\d{3}\)? ?\d{3}([ -]|)?\d{2}(\2)?\d{2}$/;
    return regexp.test(string);
}