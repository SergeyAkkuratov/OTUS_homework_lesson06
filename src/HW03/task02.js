export function showMultiplyTable(number) {
    let result = "";
    for(let i=1;i<10;i++){
        result+=`${number} * ${i} = ${number*i}\n`;
    }
    console.log(result);

}