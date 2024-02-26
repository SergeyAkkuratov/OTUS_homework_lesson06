export function pow(value, power) {
    let result = value;
    for(let i=1;i<power;i++){
        result *= value;
    }
    return result;
}