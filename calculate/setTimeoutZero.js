console.log("Hello World");

var a = 1032124;
var b = 2098753;


// this Callback will only be call stack in v8 once the call stack is empty
setTimeout(() => {
    console.log("call me right now ");
}, 0);  //Trust issue with setTimeout


setTimeout(() => {
    console.log("call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
    const result = a + b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);