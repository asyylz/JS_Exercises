'use strict';
/* -------------------------- 1. ------------------------- */
//1. Write a JavaScript function to check whether an `input` is an array or not.
//Solution 1:
var is_array = function (input) {
  if (toString.call(input) === '[object Array]') return true;
  return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
//Solution 2:
const array1 = [1, 2, 3];
const array2 = 'Not an array';

console.log(Array.isArray(array1)); // true
console.log(Array.isArray(array2)); // false

/* ------------------------- 2. ------------------------- */
//2. Write a JavaScript function to clone an array.
//Solution 1:
//2. Write a JavaScript function to clone an array.
function array_Clone(array) {
  return array.slice(0);
}

//Solution 2:
var array_Clone = array1 => array1.slice(0); //ES6

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

/* -------------------------- 3 ------------------------- */
//3.Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
//Solution 1:
function first(arr, n) {
  if (!n) {
    return arr[0];
  } else if (n > 0) {
    return arr.slice(0, n);
  } else if (n < 0) {
    return [];
  }
}

//Solution 2:
var first = (array, n) => {
  if (array == null) return void 0;
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
};
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

/* -------------------------- 4 ------------------------- */
//4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
//Solution 1:
var last = function (array, n) {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

//Solution 2:ES6
var last = function last(array, n) {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};
console.log(last());
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

/* -------------------------- 5 ------------------------- */
//Write a simple JavaScript program to join all elements of the following array into a string.
//Solution 1:
const myColor = ['Red', 'Green', 'White', 'Black'];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

/* -------------------------- 6 ------------------------- */
//6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
//Solution 1:
function onlyEvenNumbers(number) {
  const string = number.toString();
  let output = '';
  for (let char of string) {
    if (char % 2 === 0) {
      output += char + `${char === string[string.length - 1] ? '' : '-'}`;
    } else {
      output += char;
    }
  }
  console.log(output);
}
onlyEvenNumbers(025468);
onlyEvenNumbers(657393037567);
onlyEvenNumbers(73834040585387);

//Solution 2:
var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));


