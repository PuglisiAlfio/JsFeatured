function printAsyncName(nome, callback) {
    setTimeout(callback, 1000);
    setTimeout(() => console.log(nome), 2000);
}

printAsyncName("Manfredi", () => console.log("Hello"));