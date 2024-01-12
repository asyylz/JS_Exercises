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
  for (x in obj) {
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



