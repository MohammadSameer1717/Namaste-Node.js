// require("./path")
// Alll the code of the module is wrappedd inside a function (IIFE)

console.log(__filename);
console.log(__dirname);

// // IIFE - Immediately Invoked function Expression

// (function (module, require) {

//     // All code of the module runs inside here
//    function calculateMultiply (a, b) {
//     const result = a + b;

//     console.log(result);
// }

// module.exports = { calculateMultiply };

// })();

// (function (exports, require, module, __filename, __dirname) {
//     // all the code of your module
// })