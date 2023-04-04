let myPromise = new Promise ((resolve, rejected) => {
    const number = 15;
    if(number > 10) {
        resolve(number);
    } else {
        rejected(number);
    }
});

myPromise
    .then(val => console.log(`${val} è maggiore di 10`))
    .catch(err => console.log(`${err} è minore o uguale a 10`));