// Modules protect their variables and function from leaking

console.log("Sum Module Executed");

var x = "hello World";

function calculateSum(a, b) {
    const sum = a + b;

    console.log(sum);
}

module.exports = {
    x: x,
    calculateSum: calculateSum,
};