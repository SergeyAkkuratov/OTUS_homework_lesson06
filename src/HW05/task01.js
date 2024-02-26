export function sum(array) {
    console.log(array.reduce((result, value) => {return result+value}));
}