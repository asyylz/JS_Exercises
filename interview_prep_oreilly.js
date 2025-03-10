// Question 1 : Currying a function
/*Currying is useful when you want to pre-set some arguments in a function or when working with higher-order functions.
When to Use Currying in JavaScript?
In JavaScript, currying function is used in the following cases:
Partial Application: In the partial application we set some arguments in advance in the function and call it later with the remaining arguments.
Higher-Order Functions: When one function takes the other functions as arguments (eg: map,filter,reduce) in that case we can use the currying function to manage the arguments more effectively.
Functional Programming: Where functions are treated as important and focus is on not changing data and combining functions in those cases currying works perfectly.*/

function tripleAdd(num1){
    return function(num2){
      return function(num3){
        return num1 + num2 + num3;
      }
    }
  }
  tripleAdd(10)(20)(30);
  console.log(tripleAdd(10)(20)(30)); // returns 60
