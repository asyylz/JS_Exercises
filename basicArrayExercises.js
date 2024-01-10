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
//onlyEvenNumbers(025468);
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

/* -------------------------- 7 ------------------------- */
//7.Write a JavaScript program to sort the items of an array.
//Solution 1:
var values = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues);
//Solution 2:
// arr1: An input array containing numerical values.
// arr2: An empty array that will be used to store the sorted values.
// min: A variable initialized with the first element of arr1.
// pos: A variable to keep track of the position of the minimum element in the array.
// max: A variable initialized with the first element of arr1.
// Find Maximum Element:
// A loop to iterate through arr1 and find the maximum element (max) in the array.
// Sorting using Selection Sort:
// The outer loop iterates through each element of arr1.
// The inner loop finds the minimum element (min) and its position (pos) in the remaining unsorted portion of the array.
// The minimum element is then added to arr2, and the corresponding element in arr1 is marked as 'x' to indicate it has been processed.
// min is reset to max for the next iteration.
const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
const arr2 = [];
let min = arr1[0];
let pos;
var max = arr1[0];
for (i = 0; i < arr1.length; i++) {
  if (max < arr1[i]) max = arr1[i];
}

for (var i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] !== 'x') {
      if (min > arr1[j]) {
        min = arr1[j];
        pos = j;
      }
    }
  }
  arr2[i] = min;
  arr1[pos] = 'x';
  min = max;
}
console.log(arr2);

/* -------------------------- 8 ------------------------- */
8. Write a JavaScript program to find the most frequent item in an array.
//Solution 1:
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function maxRepeat(arr) {
  const list = arr.reduce((acc, currentValue) => {
    acc[currentValue] = (acc[currentValue] || 0) + 1;
    return acc;
  }, {});
  console.log(list);
  //This return value itself
  //   const maxElement = Object.entries(list)
  //     .sort((a, b) => b[1] - a[1])
  //     .slice(0, 1)
  //     .map(([key]) => key );
  //   return maxElement;
  const maxCount = Math.max(...Object.values(list));
  console.log(maxCount);
}
maxRepeat(arr1);

//Solution 2:
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1; //mf represents the maximum frequency, initialized to 1
var m = 0; // m represents the current frequency, initialized to 0
var item; // item represents the most frequently occurring element
for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }
  m = 0; // Reset the current frequency for the next element in the outer loop
}
console.log(`${item} ( ${mf} times ) `) ;

/* -------------------------- 9 ------------------------- */
//9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
//Solution 1:
const str = 'The Quick Brown Fox';
console.log(
  str
    .toUpperCase()
    .split(' ')
    .map(word => word[0].toLowerCase() + word.slice(1))
    .join(' ')
);

//Solution 2:
var str = 'c';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];

  for(let x=0; x<str.length; x++)
  {
    if(UPPER.includes(str[x]))
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.includes(str[x]))
    {
      result.push(str[x].toUpperCase());
    }
    else
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));

/* -------------------------- 10 ------------------------- */
//10. Write a JavaScript program that prints the elements of the following array. Note : Use nested for loops.
//Solution 1:
const array = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(`row ${i+1}\n${array[i][j]}`)
  }
}
//Solution 2:
const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (const i in a) 
{
   console.log(`row ${i}`);
   for (const j in a[i]) 
     {
      console.log(` ${a[i][j]}`);
     }
}

