// Last line of the file
// nestTick
// inner nextTick
// promise
// setImmediate

const fs = require("fs");
 
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);


setTimeout(() => console.log("Timer expired"));

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading CB");
});

Promise.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
  
});

console.log("Last line of the file.");