// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }


function sum(...items) {
    let somma = 0;
    for (let item of items) somma += item;
    return somma;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
