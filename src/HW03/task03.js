export function getAvarage(end) {
    console.log([...Array(Number(end)+1).keys()].reduce((memo, x)=>{return memo+x})/end);
}