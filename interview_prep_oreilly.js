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
/* If your code used var instead of let, all buttons would show "Button 6" when clicked. This happens because var is function-scoped, meaning all event handlers would share the same i, which becomes 6 after the loop. */
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    (function (i) {
      // IIFE creates a new scope
      let body = document.getElementsByTagName('body')[0];
      let button = document.createElement('button');
      button.innerHTML = 'Button ' + i;
      button.onclick = function () {
        alert('This is button ' + i);
      };
      body.appendChild(button);
    })(i);
  }
}
createButtons();
