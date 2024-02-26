export function showMaxAndMin(array) {
    let min, max;
    array.forEach(el => {
        min = (el < min) || (min === undefined) ? el : min;
        max = (el > max) || (max === undefined) ? el : max;
    });
    console.log(min, max);
}