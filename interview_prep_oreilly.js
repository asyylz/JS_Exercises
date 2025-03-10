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

// Question 8 : Scope and "self"
this.color = 'red';
var mycar = {
  name: 'Toyota',
  color: 'Blue',
  logColor: function () {
    var self = this;
    console.log(this.color);
    console.log(self.color);
    (function () {
      // we are loosing refference to this keyword, and ending up refferencing to global object and we dont have color property in global scope
      //console.log(this.color);
      console.log(self.color);
    })();
  },
};

mycar.logColor(); // returns Blue

// Question 8 : == vs ===
/*
== is used for comparison between two variables irrespective of the datatype of variable.
=== is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.
*/

// Question 9 : Event Bubbling
var a = 10;
function test() {
  console.log('Value of a: ', a); // returns undefined
  var a = 5;
}
test(); // returns undefined

// Question 10 : Use Strict

('use strict');
city = 'London';
console.log(city); // with use strict returns ReferenceError: city is not defined

function myFunc(a, a, b) {
  console.log(a, a, b);
}

myFunc(1, 2, 3); // returns 2 2 3 without use strict second a overrided the first a

//Question 11 : Currying function use case

function getTraveltime(distance) {
  return function (speed) {
    return distance / speed;
  };
}
const travelTimeBosNyc = getTraveltime(400);
const travelTimeMiamiAtlanta = getTraveltime(600);
console.log(travelTimeBosNyc(100)); // returns 4
console.log(travelTimeMiamiAtlanta(100)); // returns 6

// Question 12 : Counter Function

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

console.log(counter()());
console.log(counter()());

const instanceOne = counter();
const instanceTwo = counter();

console.log('instanceOne', instanceOne());
console.log('instanceOne', instanceOne());
console.log('instanceOne', instanceOne());
console.log('instanceTwo', instanceTwo());

// Question 13 : Logging variables

(function () {
  // 'use strict';
  //var x=y=200; reason is:
  // var x = 200; // it is the case for x
  // var y = 200;  but it is not the case for y
  // y is a global variable var keyword is missing
  y = 200;
  var x = y;
})();
console.log('y', y); // returns 200
//console.log('x', x); // returns ReferenceError: x is not defined

// Question 14 : Call & Apply Methods
const car1 = {
  brand: 'Porsche',
  getCarDescription: function (cost, year, color) {
    console.log(
      'This car is a ' +
        this.brand +
        '. The price is $' +
        cost +
        '. The year is ' +
        year +
        '. The color is ' +
        color
    );
  },
};

car1.getCarDescription(100, 2010, 'blue'); // returns This car is a Porsche. The price is $100. The year is 2010. The color is blue

const car2 = {
  brand: 'Lamborghini',
}
// use call() , we can change this's context

 car1.getCarDescription.call(car2, 200, 2013, 'yellow'); // returns This car is a Lamborghini. The price is $200. The year is 2013. The color is yellow

// apply method
const car3 ={
  brand: 'Audi'
}

car1.getCarDescription.apply(car3, [300, 2012, 'black']); // returns This car is a Audi. The price is $300. The year is 2012. The color is black. Diff is we pass arguments as array.

//Question 15: List, pass by value or reference
 const list1 = [1, 2, 3, 4, 5];
  //const list2 = list1; with giving reference to list1
 // const list2 = list1.slice(); // with slice we are creating a new array
 // const list2= list1.concat([]); // with concat we are creating a new array
 // or
 const list2 = [...list1]; // with spread operator we are creating a new array
  list1.push(6, 7, 8);
  console.log('List 2 : ',list2); // returns [1, 2, 3, 4, 5]


