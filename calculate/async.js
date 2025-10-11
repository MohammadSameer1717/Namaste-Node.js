const fs = require("fs");
const http = require("http");

console.log("Hello World");

var a = 1032124;
var b = 2098753;

http.get("http://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully");
});

setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
}, 5000);
fs.readFile("/.file.tex", "utf8", (err, data) => {
    console.log("file Data : ", data);
});

function multiplyFn(x, y) {
    const result = a + b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
