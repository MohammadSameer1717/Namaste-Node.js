const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
    console.log("file Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

function printA() {
    console.log("a=", a);
}

printA();
console.log("Last line of the file");

// Output
// a = 100
// last lineof the file
// Timer expired
// setImmediate
// file Reading CB