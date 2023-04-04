new Promise((resolve, reject) => {
    const isLogged = true;
    if (isLogged == true) {
        resolve(console.log(Math.random()));
    } else {
        reject(console.log(`Errore`));
    }
}) 

.then(new Promise((resolve, reject) => {
    let number = Math.random();
    let person = {
        name: "John", 
        age: 24
    };
    if (number > 0.5) {
        resolve(person);
    } else {
        reject(console.log(`Errore`));
    }
})
.then(val => console.log(val))
.catch(err => console.log(`${err} è sbagliato`))
)

.catch(err => console.log(`${err} è sbagliato`));