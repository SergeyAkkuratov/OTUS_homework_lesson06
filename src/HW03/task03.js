export function getAvarage() {
    let end = prompt("Введите число N:");
    console.log([...Array(Number(end)+1).keys()].reduce((memo, x)=>{return memo+x})/end);
}