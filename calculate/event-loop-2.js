// a = 100
// b = 100
// Last of the file
// process.nextTick
// promise
// Timer
// setImmediate
// File Reading CB

const { promises } = require("dns");
const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

promise.resolve("promise").then (console.log("promise"));

fs.readFile("./file.txt", "utf8", () => {
    console.log("file Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(()=> console.log("promise.nextTick"));

function printA() {
    console.log("a=", a);
}

printA();
console.log("Last line of the file");
