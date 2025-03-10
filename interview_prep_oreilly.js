// Question 1 : Currying a function
/*Currying is useful when you want to pre-set some arguments in a function or when working with higher-order functions.
When to Use Currying in JavaScript?
In JavaScript, currying function is used in the following cases:
Partial Application: In the partial application we set some arguments in advance in the function and call it later with the remaining arguments.
Higher-Order Functions: When one function takes the other functions as arguments (eg: map,filter,reduce) in that case we can use the currying function to manage the arguments more effectively.
Functional Programming: Where functions are treated as important and focus is on not changing data and combining functions in those cases currying works perfectly.*/

function tripleAdd(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}
tripleAdd(10)(20)(30);
console.log(tripleAdd(10)(20)(30)); // returns 60

// Question 2 : IIFE
/* 
- IIFEs are a common pattern used to execute arbitrarily many statements in their own scope (and possibly return a value), in a location that requires a single expression. They are similar to, but much more powerful than, the comma operator, which can only execute multiple expressions and, therefore, does not provide a way to use local variables or control flow statements. 
- (IIFE) are a great way to create a private scope for variables and prevent them from polluting the global namespace.
- Why use IIFE?
- Avoids Global Namespace Pollution – Variables declared inside the IIFE don’t interfere with other scripts.
- Protects $ (jQuery alias) – Ensures that $ refers to jQuery inside the function, even if other libraries use $ (like Prototype.js).
Encapsulation – Helps keep your code modular and prevents accidental variable overwrites.
*/

(function () {
  function getTotal(a) {
    return a * 2;
  }
  var $ = 'currency';

  if (true) {
    var $ = 'dollar';
  }
  console.log($);
})(); // returns 10

// Question 3 : Variable Scope Problem Creating Private Scope
// /* If your code used var instead of let, all buttons would show "Button 6" when clicked. This happens because var is function-scoped, meaning all event handlers would share the same i, which becomes 6 after the loop. */
// function createButtons() {
//   for (var i = 1; i <= 5; i++) {
//     (function (i) {
//       // IIFE creates a new scope
//       let body = document.getElementsByTagName('body')[0];
//       let button = document.createElement('button');
//       button.innerHTML = 'Button ' + i;
//       button.onclick = function () {
//         alert('This is button ' + i);
//       };
//       body.appendChild(button);
//     })(i);
//   }
// }
// createButtons();

// Question 4 : Update of Question 3
const { JSDOM } = require('jsdom');
const { document } = new JSDOM(`<!DOCTYPE html><body></body>`).window;
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    // IIFE creates a new scope
    var body = document.getElementsByTagName('body')[0];
    var button = document.createElement('button');
    button.innerHTML = 'Button ' + i;
    addClickEvent(button, i);
    body.appendChild(button);
  }
}

createButtons();

function addClickEvent(button, num) {
  button.onclick = function () {
    alert('This is button ' + num);
  };
}

// Question 5 : Clousers

/* A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables. Same pattern is also parameters */
const globalVariable = 'I am global';
function outerFunction(param1) {
  var outerVariable = 'I am outside!';
  function innerFunction(param2) {
    const innerVariable = 'I am inside!';
    console.log(outerVariable);
    console.log(innerVariable);
    console.log(globalVariable);
    console.log(param1);
    console.log(param2);
  }
  innerFunction();
}
outerFunction();

// Question 6 : Thiskeyword
/* The this keyword refers to the object it belongs to.
It has different values depending on where it is used:
In a method, this refers to the owner object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.
*/
var house = {
  price: 1000,
  squareFeet: 2000,
  owner: 'Taylor',
  getPriceSquareFoot: function () {
    return this.price / this.squareFeet;
  },
};
console.log(house.price); // returns 1000
console.log(house.getPriceSquareFoot()); // returns 0.5

// Question 7 : Hoisting
/* Hoisting is JavaScript's default behavior of moving declarations to the top.
In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.
*/

console.log(color); // returns undefined
var color = 'blue';
console.log(color); // returns blue

// Real code
function getTotal() {
  console.log(multiplier); // returns undefined var initilized to undifined
  console.log(total); // returns ReferenceError: Cannot access 'valueToAdd' before initialization

  let total = 0;

  for (var i = 0; i < 10; i++) {
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }
  return total;
}

getTotal(); // returns 90

// Under the hood code, when js interpreter reads the code how it hoists the variables
function getTotal() {
  let total;
  var multiplier;
  total = 0;
  for (var i = 0; i < 10; i++) {
    let valueToAdd;
    valueToAdd = i;
    multiplier = 2;
    total += valueToAdd * multiplier;
  }
  return total;
}
