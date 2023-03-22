// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }


function sum(...items) {
    return items.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
      );
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
