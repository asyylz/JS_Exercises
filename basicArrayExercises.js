'use strict';
/* ------------------------------------------------------ */
/*    JavaScript Array - Exercises, Practice, Solution   */
/* ------------------------------------------------------ */

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
//8. Write a JavaScript program to find the most frequent item in an array.
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

/* -------------------------- 11 ------------------------- */
//Write a JavaScript program to find the sum of squares of a numerical vector.
//Solution 1:
function sumSquares(arr) {
  return arr
    .map(num => num ** 2)
    .reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
}
console.log(sumSquares([1, 2, 1, 24]));

//Solution 2:
function sum_sq(array) {
    var sum = 0,
        i = array.length;
    while (i--) {
      sum += Math.pow(array[i], 2);
    }return sum;
  }

  console.log(sum_sq([0, 1, 2, 3, 4]));

/* -------------------------- 12 ------------------------- */
//12. Write a JavaScript program to compute the sum and product of an array of integers.
//Solution 1:
function sum_product(arr) {
  let sum = arr.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);

  let product = arr.reduce((acc, currentValue) => {
    return acc * currentValue;
  }, 1);

  return { sum, product };
}

console.log(sum_product([1, 2, 3, 4]));

//Solution 2:
function sum_product(array) {
  var sum = 0;
  var product = 1;
  let i = array.length;
  while (i--) {
    sum += array[i];
    product *= array[i];
  }
  return { sum, product };
}
console.log(sum_product([1, 2, 3, 4]));

/* -------------------------- 13 ------------------------- */
//13. Write a JavaScript program to add items to a blank array and display them.
//Solution 1:
let x = 0;
const array = Array();

function add_element_to_array() {
  array[x] = document.getElementById('text1').value;
  alert(`Element: ${array[x]} Added at index ${x}`);
  x++;
  document.getElementById('text1').value = '';
}

function display_array() {
  let e = '<hr/>';

  for (let y = 0; y < array.length; y++) {
    e += `Element ${y} = ${array[y]}<br/>`;
  }
  document.getElementById('Result').innerHTML = e;
}

/* -------------------------- 14 ------------------------- */
//14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
//Solution 1:
const color = [
  'Blue ',
  'Green',
  'Green',
  'Red',
  'Orange',
  'Orange',
  'Violet',
  'Indigo',
  'Yellow ',
  'Indigo',
];
function removeDublicates(arr) {
  const sortedArray = new Set(arr);
  console.log(sortedArray);
}
removeDublicates(color);

//Solution 2:
function removeDublicates(arr) {
  var x,
    len = arr.length,
    out = [],
    obj = [];

  for (x = 0; x < len; x++) {
    obj[arr[x]] = 0;
    console.log(obj)
  }
  for (x in obj) { //// out = Object.keys(obj);
    out.push(x)
    console.log(out)
  }
  return out
}
console.log(removeDublicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));

/* -------------------------- 15 ------------------------- */
//15.Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
//Solution 1:
const arr = [
  'Blue',
  'Green',
  'Red',
  'Orange',
  'Violet',
  'Indigo',
  'Yellow',
  'Blue ',
  'Green',
  'Red',
  'Orange',
  'Violet',
  'Indigo',
  'Yellow',
  'Blue',
  'Green',
  'Red',
  'Orange',
  'Violet',
  'Indigo',
  'Yellow',
  'Blue ',
  'Green',
  'Red',
  'Orange',
  'Violet',
  'Indigo',
  'Yellow',
];
function orderColors(arr) {
  console.log(
    arr.map(
      (element, i) =>
        `${i + 1}${
          (i + 1)%10 == 1  && (i + 1) !== 11 ? 'st' : (i + 1)%10 == 2 && (i + 1) !== 12 ? 'nd' : (i + 1)%10 == 3 && (i + 1)!== 13 ? 'rd' : 'th'
        } choice is ${element}`
    )
  );
}
console.log(orderColors(arr));

//Solution 2:
function orderColors(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `${i + 1}${
        (i + 1) % 10 == 1 && i + 1 !== 11
          ? 'st'
          : (i + 1) % 10 == 2 && i + 1 !== 12
          ? 'nd'
          : (i + 1) % 10 == 3 && i + 1 !== 13
          ? 'rd'
          : 'th'
      } choice is ${arr[i]}`
    );
  }
}
orderColors(arr);
//Solution 3:
const color = [
  'Blue ',
  'Green',
  'Red',
  'Orange',
  'Violet',
  'Indigo',
  'Yellow '
];

function Ordinal(n) {
  const o = ['th', 'st', 'nd', 'rd'];
  const x = n % 100;
  return x + (o[(x - 20) % 10] || o[x] || o[0]);
}

for (let n = 0; n < color.length; n++) {
  const ordinal = n + 1;

  const output = `${Ordinal(ordinal)} choice is ${color[n]}.`;

  console.log(output);
}

/* -------------------------- 16 ------------------------- */
//16. Write a JavaScript program to find the leap years in a given range of years.
//Solution 1:
const year = +prompt('Enter a year: ');
function leapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year, 'is a leap year');
  } else {
    console.log(year, 'is not a leap year');
  }
}
leapYear(year)

//Solution 2:
function leap_year_range(st_year, end_year) {
  var year_range = [];
  for (var i = st_year; i <= end_year; i++)
  {
       year_range.push(i);
  }
  var new_array = [];

year_range.forEach(
function(year)
{
 if (test_LeapYear(year))
 new_array.push(year);
});

return new_array;
}

function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
          return year;
  } else {
          return false;
  }
}

console.log(leap_year_range(2000,2012));

/* -------------------------- 17 ------------------------- */
//17. Write a JavaScript program to shuffle an array.
//Solution 1:
const arr = [2, 1, 3, 4, 7, 7, 6, 7];

function shuffle(arr) {
  return arr.map((element, i) => ({ value: element, sort: Math.floor(Math.random() * arr.length) }))
            .sort((a, b) => a.sort - b.sort)
            .map(obj => obj.value);
}

console.log(shuffle(arr));

//Solution 2:
function shuffle(arr) {
  let len = arr.length;
  let temp;
  let index;
  while (len > 0) {
    index = Math.floor(Math.random() * len);
    len--;
    temp = arr[len]
    arr[len] = arr[index]
    arr[index] =temp
  }
}
/* -------------------------- 18 ------------------------- */
//18. Write a JavaScript program to perform a binary search.
//Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
//Solution 1:
const items = [1, 2, 3, 4, 5, 7, 8, 9];
function findIndex(array, num) {
  //return array.indexOf(num) //Option 1
  return array
    .map((element, index) =>(element === num ? index : -1))
    .filter(index => index !== -1); //Option 2
}
console.log(findIndex(items, 5));

//Solution 2:
function binary_Search(items, value){
  let firstIndex  = 0;
  let lastIndex   = items.length - 1;
  let middleIndex = Math.floor((lastIndex + firstIndex)/2);

  while(items[middleIndex] != value && firstIndex < lastIndex)
  {
     if (value < items[middleIndex])
      {
          lastIndex = middleIndex - 1;
      }
    else if (value > items[middleIndex])
      {
          firstIndex = middleIndex + 1;
      }
      middleIndex = Math.floor((lastIndex + firstIndex)/2);
  }

  return (items[middleIndex] != value) ? -1 : middleIndex;
}
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));

/* -------------------------- 19 ------------------------- */
//19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
//Solution 1:
const array1 = [1, 0, 2, 3, 4, 7, 10];
const array2 = [3, 5, 6, 7, 8, 13];
function sumOfArrays(arr1, arr2) {
  let sumArray = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] === undefined) {
      arr1[i] = 0;
      sumArray.push(arr1[i] + arr2[i]);
    } else if (arr2[i] === undefined) {
      arr2[i] = 0;
      sumArray.push(arr1[i] + arr2[i]);
    } else {
      sumArray.push(arr1[i] + arr2[i]);
    }
  }
  return sumArray;
}
console.log(sumOfArrays(array1, array2));

//Solution 2:
function sumOfArrays(arr1, arr2) {
  const result = array1.map(
    (element1, index) =>
      (element1 === undefined ? 0 : element1) +
      (array2[index] === undefined ? 0 : array2[index])
  );
  console.log(result);
}
console.log(sumOfArrays(array1, array2));

//Solution 3:
function sumOfArrays(arr1, arr2) {
  const result = [];
  let ctr = 0;
  let x = 0;
  if (arr1.length === 0) return 'Array1 is empty';
  if (arr2.length === 0) return 'Array2 is empty';

  while (ctr < arr1.length && ctr < arr2.length) {
    result.push(arr1[ctr] + arr2[ctr]);
    ctr++;
  }
  if(ctr === arr1.length) {
    for(x=ctr; x<arr2.length; x++) {
      result.push(arr2[x])
    }
  }else {
    for(x=ctr; x<arr1.length; x++) {
      result.push(arr1[x])
    }
  }
  return result
}
console.log(sumOfArrays(array1,array2))

/* -------------------------- 20 ------------------------- */
//20. Write a JavaScript program to find duplicate values in a JavaScript array.
//Solution 1:
const array = [
  'Blue',
  'Green',
  'Red',
  'Orange',
  'Violet',
  'Indigo',
  'Yellow',
  'Blue',
  'Green',
  'Red',
  'Orange',
];
function duplicatedItems(arr) {
const duplicatedArray = arr.reduce((acc, currentValue) => {
  acc[currentValue] = (acc[currentValue] || 0) + 1;
  return acc;
}, {});
  console.log(duplicatedArray);
  console.log(typeof duplicatedArray);
  return Object.entries(duplicatedArray)
    .filter(([key, value]) => value > 1)
    .map(([key, value]) => key);
}
console.log(duplicatedItems(array));

//Solution 2:
function duplicatedItems(arr) {
  const object = {};
  const result = [];

  arr.forEach(item => {
    if (!object[item])
    object[item] = 0;
    object[item] += 1;
  });
  for(const prop in object) {
    if (object[prop] >= 2) {
      result.push(prop)
    }
  }
  return result
}

console.log(duplicatedItems(array));

/* -------------------------- 21 ------------------------- */
//21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
//Solution 1:
function flatten(a, shallow, r) {
  ////If r is not provided, it is initialized as an empty array.
  if (!r) {
    r = [];
  }
  if (shallow) {
    return r.concat(...a);
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i].constructer == Array) {
      flatten(a[i], shallow, r);
    } else {
      r.push(a[i]);
    }
  }
  return r;
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]],true,[45]));
console.log(flatten([1, [2], [3, [[4]]], [5, 6]],false));

//Solution 2:
function flatten(arr,deep) {
  let result = arr.flat(deep)
  return result
}
console.log(flatten([1, [2], [3, [[4]]], [5, 6]],true));
console.log(flatten([1, [2], [3, [[[4]]]], [5, 6]],4));

//Solution 3:
function flatten() {
  if (!arguments[1]) {
    return arguments[0].flat(Infinity);
  }

  return arguments[0].flat();
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
console.log(flatten([1, [2], [3, [[4]]], [5, 6]],true));

//Solution 4:
function flattenObject(obj, parentKey = '') {
  let flattened = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const propName = parentKey ? `${parentKey}.${key}` : key;

      if (
        typeof obj[key] === 'object' &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        Object.assign(flattened, flattenObject(obj[key], propName));
      } else {
        flattened[propName] = obj[key];
      }
    }
  }

  return flattened;
}
console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], false));
/* -------------------------- 22 ------------------------- */
//22. Write a JavaScript program to compute the union of two arrays.
//Solution 1:
function union(arr1, arr2) {
  /* ----------------------- step 1 ----------------------- */
for (const element of arr1) {
  arr2.push(element);
}
  ////alternative for this step
  ////const concatedArray = arr1.concat(arr2);
  /* ----------------------- step 2 ----------------------- */
  const concatedArray = arr2.reduce((acc, currentValue) => {
    acc[currentValue] = (acc[currentValue] || 0) + 1;
    return acc;
  }, {});

  console.log(Object.keys(concatedArray).map(Number));
}
union([1, 2, 3], [100, 2, 1, 10]);

//Solution 2:
function union(arr1, arr2) {
  if (arr1 === null || arr2 === null) return void 0;

  const obj = {};
  for (let i = arr1.length - 1; i >= 0; i--) {
    obj[arr1[i]] = arr1[i];
    console.log(obj);
  }
  for (var i = arr2.length - 1; i >= 0; --i) {
    obj[arr2[i]] = arr2[i];
  }

  const res = [];
  for (const n in obj) {
    if (obj.hasOwnProperty(n)) res.push(obj[n]);
  }
  return res;
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));

//Solution 3:
function union() {
  return [...new Set(arguments[0].concat(arguments[1]))].sort((a, b) => a - b);
}
console.log(union([1, 2, 3], [100, 2, 1, 10]))

//Solution 4:
function union(arr1, arr2) {
  const concatedArray = arr1.concat(arr2.filter(element => arr1.indexOf(element) === -1));
  console.log(concatedArray);
}
union([1, 2, 3], [100, 2, 1, 10]);

//Solution 5:
function union(arr1, arr2) {
  const concatedArray = arr2.reduce((acc, currentValue) => {
    if (!acc.hasOwnProperty(currentValue)) {
      acc[currentValue] = true;
    }
    return acc;
  }, {});

  console.log(Object.keys(concatedArray).map(Number));
}

union([1, 2, 3], [100, 2, 1, 10]);

/* -------------------------- 23 ------------------------- */
//23. Write a JavaScript function to find the difference between two arrays.
//Solution 1:
function difference(arr1, arr2) {
  arr1 = arr1.flat(Infinity);
  arr2 = arr2.flat(Infinity);
  console.log(
    arr2
      .filter(element => arr1.indexOf(element) === -1)
      .concat(arr1.filter(element => arr2.indexOf(element) === -1))
  );
}
difference([1, 2, 3], [100, 2, 1, 10]);
difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]);

//Solution 2:

const difference = (arr1, arr2) => {
  const temp = [];
  arr1 = arr1.toString().split(',').map(Number);
  arr2 = arr2.toString().split(',').map(Number);

  for (var i in arr1) {
    if (!arr2.includes(arr1[i])) temp.push(arr1[i]);
  }
  for (var i in arr2) {
    if (!arr1.includes(arr2[i])) temp.push(arr2[i]);
  }
  return temp.sort((a, b) => a - b);
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

//Solution 3:
let difference = (arr1, arr2) => {
  let diff = [];
  arr1 = arr1.flat(Infinity);
  arr2 = arr2.flat(Infinity);
  arr1.forEach(element => (arr2.includes(element) ? null : diff.push(element)));
  arr2.forEach(element => (arr1.includes(element) ? null : diff.push(element)));
  return diff;
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

/* -------------------------- 24 ------------------------- */
//24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
//Solution 1:
const removeFalsyValues = arr => {
  let cleanArray = [];
  arr.forEach(element =>
    arr.includes(!element) ? cleanArray.push(element) : null
  );
  return cleanArray;
};
console.log(
  removeFalsyValues([NaN, 0, 15, false, -22, '', undefined, 47, null])
);
////Solution 2:
function flt(arr) {
  return arr.filter(function myFunction(value, index, array) {
    return value;
  });
}
console.log(flt([NaN, 0, 15, false, -22, '', undefined, 47, null]));

////Solution 3:
const removeFalsey = arr => arr.filter(item => !!item)
console.log(removeFalsey([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/* -------------------------- 25 ------------------------- */
//25. Write a JavaScript function to sort the following array of objects by title value.
var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    libraryID: 3245,
  },
];
//Solution 1:
function orderObjects(arr) {
  let sorted = arr.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  console.log(sorted);
}
orderObjects(library);

//Solution 2:
function orderObjects(x, y) {
  if (x.title < y.title) {
    return -1;
  }
  if (x.title > y.title)
    return 1;
  return 0;
}
console.log(library.sort(orderObjects));

/* -------------------------- 26 ------------------------- */
//26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
//Solution 1:
function pairForSum(arr, target) {
  let sum;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
         console.log(`${i},${j}`);
      }
    }
  }
}
pairForSum([10, 20, 10, 40, 50, 60, 70], 50);
//Solution 2:
function twoSum(nums, target_num) {
  const map = [];
  const indexnum = [];

  for (let x = 0; x < nums.length; x++) {
    if (map[nums[x]] != null) {
      var index = map[nums[x]];
      indexnum[0] = index;
      indexnum[1] = x;
      break;
    } else {
      map[target_num - nums[x]] = x;
    }
  }
  return indexnum;
}
console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50));

/* -------------------------- 27 ------------------------- */
//27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
//Solution 1:
const library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];

function property_value(array, property_key) {
   const arr = [];
   let index = -1;
   const arrlen = array.length;
   let array_items;

   while (++index < arrlen) {
   array_items = array[index];

 if (array_items.hasOwnProperty(property_key))
     {
  arr[arr.length] = array_items[property_key];
     }
 }

   return arr;
}

console.log(property_value(library, 'title'));
console.log(property_value(library, 'author'));

//Solution 2:
let retrivePropertyArray = (_arr, _prop) => {

  let f = e => e[_prop];
  return _arr.filter(f).map(f);

  };
  console.log(retrivePropertyArray(library, 'title'))

//Solution 3:
const retrivePropertyArray = (arr, property) => {
  const f = element => element[property];
  return arr.filter(f).map(f);
};
console.log(retrivePropertyArray(library, 'title'));

/* -------------------------- 28 ------------------------- */
//28. Write a JavaScript function to find the longest common starting substring in a set of strings.
//Solution 1:
function longest_common_starting_substring(arr) {
  let commonWord = '';

  for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr[index].length; i++) {
      if (arr[index][i] === arr[index + 1][i]) {
        commonWord += arr[index][i];
      }
    }
    break;
  }

  return commonWord;
}

console.log(longest_common_starting_substring(['google', 'go']));
//Solution 2:
function longest_common_starting_substring(arr) {
  let shortestString = arr.reduce(
    (a, b) => (a.length <= b.length ? a : b),
    arr[0]
  );
  let commonChars = shortestString
    .split('')
    .map((_, i) => arr.every(str => str[i] === shortestString[i]));
  let commonWord = shortestString.split('').filter((_, i) => commonChars[i]).join('');
  return commonWord
}
console.log(longest_common_starting_substring(['google', 'goog', 'google']));

//Solution 3:
function longest_common_starting_substring(arr1) {
  const arr = arr1.concat().sort();
  console.log(arr)
  const a1 = arr[0]; //SQLInjection
  const a2 = arr[arr.length - 1]; //SQLTutorial
  const L = a1.length;
  let i = 0;
  while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
  return a1.substring(0, i);
}
console.log(longest_common_starting_substring(['SQLTutorial','SQLInjection']));
/* -------------------------- 29 ------------------------- */
//29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.
//Solution 1:
function num_string_range(x, y, n) {
  let alphabetWithRange = [];

  for (let i = x.charCodeAt(); i <= y.charCodeAt(); i += n) {
    alphabetWithRange.push(String.fromCharCode(i).toLowerCase());
  }
  return alphabetWithRange;
}
console.log(num_string_range('A', 'Z', 2));

//Solution 2:
function num_string_range(x, y, n) {
  let alphabet = Array.from(
    { length: Math.floor((y.charCodeAt() - x.charCodeAt() + 1) / n) },
    (_, i) => String.fromCharCode(x.charCodeAt() + i * n)
  ).join('');
  console.log(alphabet);
}

num_string_range('A', 'Z', 2);

//Solution 3:

function num_string_range(start, end, step) {
  const range = [];
  if (
    step === 0 ||
    typeof start == 'undefined' ||
    typeof end == 'undefined' ||
    typeof start != typeof end
  )
    return false;

  if (end < start) {
    step = -step;
  }

  if (typeof start == 'number') {
    while (step > 0 ? end >= start : end <= start) {
      range.push(start);
      start += step;
    }
  } else if (typeof start == 'string') {
    if (start.length != 1 || end.length != 1) {
      throw TypeError('Strings with one character are supported.');
    }

    start = start.charCodeAt(0);
    end = end.charCodeAt(0);

    while (step > 0 ? end >= start : end <= start) {
      range.push(String.fromCharCode(start));
      start += step;
    }
  } else {
    throw TypeError('Only string and number are supported');
  }

  return range;
}

console.log(num_string_range('a', 'z', 2));
console.log(num_string_range('Z', 'A', 2));
console.log(num_string_range(0, -5, 1));
console.log(num_string_range(0, 25, 5));
console.log(num_string_range(20, 5, 5));

/* -------------------------- 30 ------------------------- */
//30. Write a JavaScript function that merges two arrays and removes all duplicate elements.
//Solution 1:
let merge_array = (array1, array2) => {
  let obj = {};
  let combinedArray = array1.concat(array2);
  combinedArray.forEach(value => {
    obj[value] = '';
  });
  return Object.keys(obj);
};
console.log(merge_array([1, 2, 3], [2, 30, 1]));
//Solution 2:
const merge_array = (arr1, arr2) => {
  let arr = arr1;
  for (let i = 0; i < arr2.length; i++) {
    arr.push(arr2[i]);
  }
  let x,
    len = arr.length,
    out = [],
    obj = [];
  for (x = 0; x < len; x++) {
    obj[arr[x]] = 0;
    console.log(obj);
  }
  for (x in obj) {
    out.push(x)
  }
  return out
};
console.log(merg
function merge_array(array1, array2) {
  const result_array = [];
  const arr = array1.concat(array2);
  let len = arr.length;
  const assoc = {};

  while (len--) {
    const item = arr[len];

    if (!assoc[item]) {
      result_array.unshift(item);
      console.log(result_array);
      assoc[item] = true;
    }
  }
  return result_array;
}
const array1 = [1, 2, 3];
const array2 = [2, 30, 1];
console.log(merge_array(array1, array2));

/* -------------------------- 31 ------------------------- */
31. Write a JavaScript function to remove a specific element from an array.
//Solution 1:
function removeArrayElement(arr, n) {
  const removeElement = element => element === n;
  console.log(arr.splice(arr.findIndex(removeElement),1));
 return arr
}
console.log(removeArrayElement([5, 12, 8, 130, 44], 12));

//Solution 2:
const removeArrayElement = (arr, n) => {
  console.log(arr.filter(number => number !== n));
};
removeArrayElement([5, 12, 8, 130, 44], 12);

//Solution 3:
function remove_array_element(array, n)
 {
   const index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }

console.log(remove_array_element([2, 5, 9, 6], 5));

/* -------------------------- 32 ------------------------- */
//32. Write a JavaScript function to find an array containing a specific element.
//Solution 1: //ASK
const contains = (arr, n) => {
  arr.forEach(element => {
    return element === n ? true : false;
  });
}
console.log(contains([2, 5, 9, 6], 5));
//Solution 2:
const contains = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return true;
  }
  return false;
};
console.log(contains([2, 5, 9, 6], 5));

//Solution 3:
function contains(arr,n) {
    return arr.includes(n)
}
console.log(contains([2, 5, 9, 6], 5));

//Solution 4:
function contains(array, a) {
  return array.indexOf(a) !== -1;
}

const arr = [2, 5, 9, 6];
console.log(contains(arr, 5)); // Output: true

/* -------------------------- 33 ------------------------- */
//Solution 1:
//Solution 2:
//Solution 3:

/* -------------------------- 34 ------------------------- */
//34. Write a JavaScript function to get the nth largest element from an unsorted array.
//Solution 1:
function nthlargest(arr, n) {
  return arr.sort((a, b) => b - a)[n - 1];
}
console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));
//Solution 2:
function nthlargest(arr, highest) {
  let x = 0;
  let y = 0;
  //let z = 0;
  let temp = 0;
  const len = arr.length;
  let flag = false;
  let result = false;

  while (x < len) {
    y = x + 1;

    if (y < len) {
      for (let z = y; z < len; z++) {
        if (arr[x] < arr[z]) {
          temp = arr[z];
          arr[z] = arr[x];
          arr[x] = temp;
          flag = true;
        } else {
          continue;
        }
      }
    }

    if (flag) {
      flag = false;
    } else {
      x++;
      if (x === highest) {
        result = true;
      }
    }
    if (result) {
      break;
    }
  }

  return arr[highest - 1];
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));

/* -------------------------- 35 ------------------------- */
//35. Write a JavaScript function to get random items from an array.
//Solution 1:
function rondomItems(array){
   return array[Math.floor(Math.random() * array.length)]
}
console.log(rondomItems([254, 45, 212, 365, 2543]))

/* -------------------------- 36 ------------------------- */
//36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.
//Solution 1:
function array_filled(x, y) {
  let result = [];
  for (let i = 0; i < x; i++) {
    result.push(y); ////Or result[i] = y;
  }
  return result;
}
console.log(array_filled(4, 11));

//Solution 2:
function array_filled(x, y) {
 return Array(...Array(x)).map(Number.prototype.valueOf,y)
}
console.log(array_filled(4, 11));

/* -------------------------- 37 ------------------------- */
//37. Write a JavaScript function to create a specified number of elements with a pre-filled string value array.
//Solution 1:
function array_filled(n, str) {
  return Array(...Array(n)).map(String.prototype.valueOf, str);
}
console.log(array_filled(3, 'default value'));
//Solution 2:
function array_filled(n, str) {
  let arr = Array(n);
  return arr.fill(str,0,n)
}
console.log(array_filled(3, 'default value'));

/* -------------------------- 38 ------------------------- */
//38. Write a JavaScript function to move an array element from one position to another.
//Solution 1:
function move(arr, index1, index2) {
  let result = arr
    .filter(
      element => element !== arr[index1 >= 0 ? index1 : index1 + arr.length]
    )
    .toSpliced(
      index2 >= 0 ? index2 : index2 + arr.length,
      0,
      arr[[index1 >= 0 ? index1 : index1 + arr.length]]
    );
  console.log(arr);
  return result;
}

console.log(move([10, 20, 30, 40, 50], -1, -2));
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], 0, 3));
console.log(move([1, 2, 3, 4, 5], 4, 1));
//Solution 2:
function move(arr, oldIndex, newIndex) {
  while (oldIndex < 0) {
    oldIndex += arr.length;
  }
  while (newIndex < 0) {
    newIndex += arr.length;
  }
  if (newIndex >= arr.length) {
    let k = newIndex - arr.length;
    while (k-- + 1) {
      arr.push(undefined);
    }
  }
  console.log(arr.splice(oldIndex, 1))
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, 9));
console.log(move([10, 20, 30, 40, 50], -1, -2));

/* -------------------------- 39 ------------------------- */
//39. Write a JavaScript function to filter false, null, 0 and blank values from an array.
//Solution 1:

function filter_array_values(arr) {
  return arr.filter(function myFunction(value, index, array) {
    return value;
  });
}
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
//Solution 2:
function filter_array_values(arr) {
  let container = [];
  arr.forEach(function (i) {
    if (i) {
      container.push(i);
    }
  });
  return container
}
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
//Solution 3:
function filter_array_values(arr){
  return arr.filter(function myFunction(value){
  return value
  })

  }console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]))

/* -------------------------- 40 ------------------------- */
//40. Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.
//Solution 1:
function arrayRange(a,b) {
  return (Array(...Array(b)).map((_,index)=> a + index))
}
console.log(arrayRange(1, 4));
console.log(arrayRange(-6, 4));

//Solution 2:
function arrayRange(a, b) {
   return Array.from({ length: b }, (_, index) => a + index);
}
console.log(arrayRange(1, 4));
console.log(arrayRange(-6, 4));

//Solution 3:
function array_range(start, len) {
  const arr = new Array(len);
  for (let i = 0; i < len; i++, start++) {
    arr[i] = start;
  }
  return arr;
}
console.log(array_range(1, 4));
console.log(array_range(-6, 4));

/* -------------------------- 41 ------------------------- */
//41. Write a JavaScript function to generate an array between two integers of 1 step length.
//Solution 1:
function rangeBetween(start, end) {
  return Array(...Array(end - start + 1)).map((_, index) => start + index);
}
console.log(rangeBetween(4, 8));
console.log(rangeBetween(-4, 7));
//Solution 2:
function rangeBetween(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}
console.log(rangeBetween(4, 8));
console.log(rangeBetween(-4, 7));

//Solution 3:
const func = (startNum, len) => {
  var arr = [];
  if (startNum < 0) {
    for (var i = 0; i < len - startNum + 1; i++) {
      arr[i] = i === 0 ? startNum : arr[i - 1] + 1;
    }
  } else {
    for (var i = 0; i <= len - startNum; i++) {
      arr[i] = startNum + i;
    }
  }
  return arr;
};
console.log(func(-4, 7));

/* -------------------------- 42 ------------------------- */
//42. Write a JavaScript function to find unique elements in two arrays.
//Solution 1:
const difference = (arr1, arr2) => {
 return (new Set(Array.from(arr1.concat(arr2)).flat(Infinity)))
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

//Solution 2:
function difference(arr1,arr2) {
  const a1= flatten(arr1,true);
  const a2= flatten(arr2,true);

  const a=[];
  const diff=[];
  for(var i=0;i< a1.length;i++)
    a[a1[i]]=false;
  for(i=0;i< a2.length;i++)
  if(a[a2[i]]===true)
     { delete a[a2[i]];}
    else a[a2[i]]=true;
  for(const k in a)
    diff.push(k);
  return diff;
}

var flatten = (a, shallow, r) => {
  if(!r){ r = [];}
if (shallow) {
  return r.concat(...a);
  }
   for(i=0; i< a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

/* -------------------------- 43 ------------------------- */
//43. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.
//Solution 1:
function unzip(arr) {
  const resultObject = {};

  arr.forEach(innerArray => {
    innerArray.forEach((value, index) => {
      const type = typeof value;

      if (!resultObject[type]) {
        resultObject[type] = [];
      }

      resultObject[type].push(value);
    });
  });
  const resultArray = Object.values(resultObject);
  return resultArray;
}

console.log(
  unzip([
    ['a', 1, true],
    ['b', 2, false],
  ])
);
console.log(
  unzip([
    ['a', 1, true],
    ['b', 2],
  ])
);

//Solution 2:
const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );
console.log(unzip([['a', 1, true], ['b', 2, false]]));
console.log(unzip([['a', 1, true], ['b', 2]]));
/* -------------------------- 44 ------------------------- */
44. Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value.
//Solution 1: //ASK
const indexOn = (arr, key) =>
  arr.reduce((obj, v) => {
    const { [key]: id,...data } = v;
    obj[id] = data;
    return obj;
  }, {});

console.log(indexOn([
  { id: 10, name: 'apple' },
  { id: 20, name: 'orange' },

], x => x.id));

/* -------------------------- 45 ------------------------- */
//45. Write a JavaScript program to find all the unique values in a set of numbers.
//Solution 1:
function uniqueValues(arr) {
  //return Array.from(new Set(arr))
  return [...new Set(arr)]
}
console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5]))

//Solution 2:
function uniqueValue(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}
console.log(uniqueValue([1, 2, 3, 4, 4, 5]));
console.log()
console.log(uniqueValue([1, -2, -2, 3, 4, -5, -6, -5]));

/* -------------------------- 46 ------------------------- */
//46. Write a JavaScript program to generate all permutations of an array's elements (including duplicates).
//Solution 1://ASK
const permutations = arr =>{
  if(arr.lenght<= 2) return arr.length === 2 ? [arr, [arr[1], arr[2]]] :arr
  return arr.reduce((acc, item, i) => acc.concat (permutations([...arr.slice(0,i)])))
}

//Solution 2:

/* -------------------------- 47 ------------------------- */
//47. Write a JavaScript program to remove all false values from an object or array.
//Solution 1:
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: '',
  g: 'a',
  h: [null, false, '', true, 1, 'a'],
  i: { j: 0, k: false, l: 'a' },
};
function filterFalsy(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    if (
      value === null ||
      value === false ||
      value === 0 ||
      value === '' ||
      value === undefined
    )
      return acc;

    if (Array.isArray(value)) {
      const filteredArray = value.filter(
        item =>
          item !== null &&
          value === false &&
          value === 0 &&
          value === '' &&
          value === undefined
      );
      if (filteredArray.length > 0) {
        acc[key] = filteredArray;
      }
    } else if (typeof value === 'object' && value !== null) {
      const filteredObject = filterFalsy(value);
      if (Object.keys(filteredObject).length > 0) {
        acc[key] = filteredObject;
      }
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
}
console.log(filterFalsy(obj));

//Solution 2:
const compactObject = val => {
  const data = Array.isArray(val) ? val.filter(Boolean) : val;
  //console.log(data)
  return Object.keys(data).reduce((acc, key) => {
    const value = data[key];
    if (Boolean(value))
      acc[key] = typeof value === 'object' ? compactObject(value) : value;
    return acc;
  }, Array.isArray(val) ? [] : {});
};

const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: '',
  g: 'a',
  h: [null, false, '', true, 1, 'a'],
  i: { j: 0, k: false, l: 'a' },
};
console.log(compactObject(obj));
/* -------------------------- 48 ------------------------- */
//48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.
//Solution 1:
function everyNumberPrime(arr) {
  let isEveryPrime = true;
  arr.forEach(number => {
    if (!isPrime(number)) {
      isEveryPrime = false;
    }
  });
  return isEveryPrime;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.trunc(num * 0.5); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(everyNumberPrime([3,5,7]));

//Solution 2:
function test(arr_nums)
 {
  return arr_nums.every(n => !'1'.repeat(n).match(/^1?$|^(11+?)\1+$/));
}
nums = [2, 3, 5, 7]
console.log("Original array of integers: "+nums)
console.log("In the said array check every numbers are prime or not! "+test(nums));
nums = [2, 3, 5, 7, 8]
console.log("Original array of integers: "+nums)
console.log("In the said array check every numbers are prime or not! "+test(nums));

/* -------------------------- 49 ------------------------- */
//49. Write a JavaScript program that takes an array of numbers and returns the third smallest number.
//Solution 1:
function nthSmallestNumber(arr, n) {
  const sorted = arr.sort((a, b) => a - b);
  return sorted[n];
}
console.log(nthSmallestNumber([2, 3, 0, 5, 7, 8, -2, -4], 2));

//Solution 2:
function nthSmallestNumber(arr, n) {
  return arr[n]
}
const sortDescending = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
sortDescending([2, 3, 0, 5, 7, 8, -2, -4]);

console.log(nthSmallestNumber(sortDescending([2, 3, 0, 5, 7, 8, -2, -4]), 2));

/* -------------------------- 50 ------------------------- */
//50. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.
//Solution 1:
function mixedArraySum(arr) {
  let sum = 0;
  arr.filter(element => {
    if (typeof element === 'number') {
      sum += element;
    }
  });
  return sum;
}
console.log(mixedArraySum([2, '11', 3, 'a2', false, 5, 7, 1]));

//Solution 2:
function mixedArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(mixedArraySum([2, '11', 3, 'a2', false, 5, 7, 1]));

/* -------------------------- 51 ------------------------- */
//51. Write a JavaScript program to check if an array is a factor chain or not.
function factorChainOrNot(arr) {
  let isEveryFactor = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i] === 0) {
      isEveryFactor = true;
    } else {
      isEveryFactor = false;
    }
  }
  return `Array is ${isEveryFactor === false ? 'not' : ''} a factor chain`;
}
console.log(factorChainOrNot([2, 4, 8, 16, 32]));
console.log(factorChainOrNot([2, 4, 16, 32, 68]));

/* -------------------------- 52 ------------------------- */
//52. Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.
//Solution 1:
function findIndexesOfNaN(arr) {
  let indexArray = []
  arr.forEach((element, index) => {
    if(Number.isNaN(element)) {
       indexArray.push(index)
    }
  });
  return indexArray

}
console.log(findIndexesOfNaN([2, 4, NaN, 16, 32, NaN]))

/* -------------------------- 53 ------------------------- */
//53. Write a JavaScript program to count the number of arrays inside a given array.
//Solution 1:
function numberOfArrays(arr) {
  let count = 0;
  arr.forEach(element => {
    if (Array.isArray(element)) {
      count++;
    }
  });
  return count
}
console.log(numberOfArrays([2, 8, [6],[4,5,6,], 3, 5, 3, 4, [5, 4]]))

/* -------------------------- 54 ------------------------- */
//Using letters in lorem20 generated n lengthed words
//Solution 1:
const lorem =
  'Loremipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

function wordGenerator(str, n) {
  let lettersArray = [];
  let listOfWords = [];
  let obj = {};

  Array.from(str).forEach(char => {
    if (
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    ) {
      lettersArray.push(char);
    }
    return lettersArray;
  });
  let word = '';
  for (let i = 0; i < n; i++) {
    word += lettersArray[Math.floor(Math.random() * lettersArray.length)];
  }

  obj[word] = 0;
  console.log(listOfWords)
  console.log(word);
  console.log(obj);
}

wordGenerator(lorem, 6);

/* -------------------------- 55 ------------------------- */
//possible number of words generated from word of 'asiye'
//Solution 1:
const str = 'asiye';
function shuffle(word) {
  let len = word.length;
  let wordArray = [...word];
  let possibleWordList = [];
  let generatedWords = [];

  while (generatedWords.length < factorial(len)) {
    let newBornWord = '';

    for (let i = len - 1; i > 0; i--) {
      const index = Math.floor(Math.random() * (i + 1));
      const temp = wordArray[i];
      wordArray[i] = wordArray[index];
      wordArray[index] = temp;
    }

    for (let i = 0; i < len; i++) {
      newBornWord += wordArray[i];
    }

    if (!generatedWords.includes(newBornWord)) {
      possibleWordList.push(newBornWord);
      generatedWords.push(newBornWord);
    }
  }

  console.log(possibleWordList.join(', '));
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

shuffle(str);
