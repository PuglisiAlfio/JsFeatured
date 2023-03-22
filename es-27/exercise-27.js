const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };
// console.log(id, personInfo);


//non ho ben capito se la consegna chiedeva di risolverlo in questo modo, ma così funziona :)
const {id, ...rest} = person
console.log(id, rest);