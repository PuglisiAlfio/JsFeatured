function sum(...items) {
  let somma = 0;
  for (let item of items)
  somma += item
  return somma;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(sum(...numbers));