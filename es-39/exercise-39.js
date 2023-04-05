function randomNumber() {
    return new Promise((resolve, reject) => {
    const isLogged = true;
    if (isLogged == true) {
        resolve(Math.random());
    } else {
        reject(new Error(`isLogged è falso`));
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
        reject(new Error(`l'input è sbagliato`));
    }
})
}

randomNumber()
    .then(printObj)
    .then(val => console.log(val))
    .catch(err => console.error(err))
    .finally(() => console.log('Promise completa'));