const crypto = require("crypto");
console.log("Hello World");

var a = 1032124;
var b = 2098753;


// pbkd2 - Password Base Key Deravtive function
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
    console.log("First Key is generated");


// Async function
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512", (err, Key) => {
    console.log("Second Key is generated");
});

function multiplyFn(x, y) {
    const result = a + b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
