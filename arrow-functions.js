/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b){
    // Code block
    return a + b;
}
let sum = addTwoNumbers(4, 5);
console.log(sum); 

// Arrow Function With Parameters
const sumTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let add = addTwoNumbers(2, 3);
console.log(add); 

// Single Line Arrow Function With Parameters
//const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(81, 10);
console.log(sum2);
 
// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!!');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>
    `
)
console.log(returnMultipleLines());