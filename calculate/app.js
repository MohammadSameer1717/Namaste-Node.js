require("./xyz.js");   // one  module into another


const util = require("node:util"); 

const { calculateSum, calculateMultiply } = require("./calculate");
const data = require("./data.json");
console.log(data);


var name = "Namaste NodeJS";

var a = 20;
var b = 30;

calculateSum(a, b);
calculateMultiply(a, b);
 
 



