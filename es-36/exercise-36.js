function repeatHello(callback) {
    let repeat = setInterval(callback, 1000);
    setTimeout(() => clearInterval(repeat), 5000);
}

repeatHello(() => console.log("Hello"));

//la callback deve essere un'arrow function perché le arrow function hanno un "this" ed un return implicito se il setTimeout ha un solo parametro