function printHello(){
    setTimeout(() => console.log('Hello'), 1000)
}

function printAsyncName(nome) {
    printHello();
    setTimeout(() => console.log(nome), 2000);
}

printAsyncName("Manfredi");