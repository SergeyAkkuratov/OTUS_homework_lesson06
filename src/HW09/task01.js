export function isRight(a, b, c) {
    if (a === Math.max(a, b, c)){
        return Math.pow(a, 2) === (Math.pow(b, 2) + Math.pow(c, 2));
    } else if (b === Math.max(a, b, c)){
        return Math.pow(b, 2) === (Math.pow(a, 2) + Math.pow(c, 2));
    } else {
        return Math.pow(c, 2) === (Math.pow(a, 2) + Math.pow(b, 2));
    }
}