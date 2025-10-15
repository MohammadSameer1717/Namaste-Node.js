// Last line of the code
// nextTick
// promise
// Timer expired ....

const fs = require("fs");
 
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

promise.resolve("promise").then (console.log);

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => console.log("2nd timer"), 0);

 
setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(()=> console.log("2nd.nextTick"));

setImmediate(() => console.log("2nd setImmediate"));
 
console.log("file Reading CB");
});
process.nextTick(() => console.log("nextTick"));
 
console.log("Last line of the file");
