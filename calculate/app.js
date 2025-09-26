require("./xyz.js");   // one  module into another

// const { x, calculateSum } = require("./calculate/sum.js");

// const { calculateMultiply } = require("./calculate/multiply.js")

const { calculateSum, calculateMultiply } = require("./calculate");

var name = "Namaste NodeJS";

var a = 20;
var b = 30;

calculateSum(a, b);
calculateMultiply(a, b);
 
console.log(x);



