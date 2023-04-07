function randomNumber() {
    return new Promise((resolve, reject) => {
    const isLogged = true;
    if (isLogged == true) {
        resolve(Math.random());
    } else {
        reject(`isLogged è falso`);
    }
})
} 

function printObj(num) {
   return new Promise((resolve, reject) => {
    let person = {
        name: "John", 
        age: 24
    };
    if (num > 0.5) {
        resolve(person);
    } else {
        reject(`Error`);
    }
})
}

randomNumber()
    .then(printObj)
    .then(val => console.log(val))
    .catch(err => console.log(`${err} è sbagliato`))