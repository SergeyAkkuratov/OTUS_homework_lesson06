export function getSqrAndLength(radius){
    let square = Math.PI * Math.pow(radius, 2);
    let length = 2 * radius * Math.PI;

    console.log(square, length);
}