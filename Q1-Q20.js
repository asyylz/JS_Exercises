 'use strict';
// /* ------------------------------------------------------ */
// /*                 Q1: Is a number prime?                 */
// /* ------------------------------------------------------ */
// //Solution 1:
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.trunc(num * 0.5); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(-1));

// //Solution 2:
// //Math.sqrt(num) as the upper limit for the loop. This is because any divisor larger than the square root of the number would have a corresponding divisor smaller than the square root. This change reduces the number of iterations, making the function more efficient.

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   const maxDivisor = Math.sqrt(num);

//   for (let i = 2; i <= maxDivisor; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(11));

// //Solution 3:
// const isPrime = num => {
//   for (let i = 2; i <= num ** 0.5; i++) {
//     if (!(num % i)) return false;
//   }
//   return num > 1; // it returns true (indicating the number is prime).
// };
// console.log(isPrime(2));

// /* ------------------------------------------------------ */
// /*              Q2: Fibonacci bigger brother              */
// /* ------------------------------------------------------ */
// //Solution 1:
// const tribonacci = function (signature, n) {
//   const output = [...signature];
//   for (let i = 3; i < n; i++) {
//     output.push(output[i - 3] + output[i - 2] + output[i - 1]);
//   }
//   return output.slice(0, n);
// };

// const result = tribonacci([3, 2, 1], 10);
// console.log(result);
// tribonacci([3, 2, 1], 10);

// //Solution 2:
// function tribonacci1(signature, n) {
//   const result = signature.slice(0, n);
//   while (result.length < n) {
//     result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
//   }
//   return result;
// }
// console.log(tribonacci1([3, 2, 1], 10));

// //Solution 3:
// function tribonacci2(s, n) {
//   var arr = [];
//   for (var i = 0; i < n; i++) {
//     arr.push(i < 3 ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
//   }
//   return arr;
// }

// //Solution 4:
// function tribonacci3(signature, n) {
//   while (signature.length < n) {
//     signature.push(signature.slice(-3).reduce((a, b) => a + b));
//   }
//   return signature.slice(0, n);
// }
// /* ------------------------------------------------------ */
// /*               Q3:Build a pile of Cubes                 */
// /* ------------------------------------------------------ */
// //Solution 1:
// function findNb(m) {
//   let n = 1;
//   let sum = 0;
//   while (sum < m) {
//     sum += n ** 3;
//     if (sum === m) {
//       return n;
//     }
//     n++;
//   }
//   return -1; // If no such n is found
// }

// //Solution 2:
// function findNb(m) {
//   var n = 0;
//   while (m > 0) m -= (++n) ** 3;
//   return m ? -1 : n; // Return -1 if m is non-zero (sum not found), otherwise return n
// }
// console.log(findNb(4183059834009));

// //Solution 3:
// function findNb(m) {
//   let n = 0;
//   let sum = 0;
//   while (sum < m) {
//     n++;
//     sum += Math.pow(n, 3);
//   }
//   return sum === m ? n : -1;
// }

// /* ------------------------------------------------------ */
// /*                   Q4:Like an item                      */
// /* ------------------------------------------------------ */
// // implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// // []                                -->  "no one likes this"
// // ["Peter"]                         -->  "Peter likes this"
// // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// //Solution 1:
// function likes(name) {
//   if (name.length === 0) {
//     return 'no one likes this';
//   } else if (name.length === 1) {
//     return `${name[0]} likes this`;
//   } else if (name.length === 2) {
//     return `${name[0]} and ${name[1]} like this`;
//   } else if (name.length === 3) {
//     return `${name[0]}, ${name[1]} and ${name[2]} like this`;
//   } else if (name.length > 3) {
//     return `${name[0]}, ${name[1]} and ${name.length - 2} others like this`;
//   }
// }
// //Solution 2:
// function likes(names) {
//   return {
//     0: 'no one likes this',
//     1: `${names[0]} likes this`,
//     2: `${names[0]} and ${names[1]} like this`,
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//   }[Math.min(4, names.length)];
// }

// //Solution 3:
// function likes(names) {
//   var templates = [
//     'no one likes this',
//     '{name} likes this',
//     '{name} and {name} like this',
//     '{name}, {name} and {name} like this',
//     '{name}, {name} and {n} others like this',
//   ];
//   var idx = Math.min(names.length, 4);

//   return templates[idx].replace(/{name}|{n}/g, function (val) {
//     return val === '{name}' ? names.shift() : names.length;
//   });
// }

// //Solution 4:
// function likes(names) {
//   names.length === 0 && (names = ['no one']);
//   let [a, b, c, ...others] = names;
//   switch (names.length) {
//     case 1:
//       return `${a} likes this`;
//     case 2:
//       return `${a} and ${b} like this`;
//     case 3:
//       return `${a}, ${b} and ${c} like this`;
//     default:
//       return `${a}, ${b} and ${others.length + 1} others like this`;
//   }
// }
// console.log(likes([])); // "no one likes this"
// console.log(likes(['Peter'])); // "Peter likes this"
// console.log(likes(['Jacob', 'Alex'])); // "Jacob and Alex like this"
// console.log(likes(['Max', 'John', 'Mark'])); // "Max, John, and Mark like this"
// console.log(likes(['Max', 'John', 'Mark', 'Max'])); // "Max, John, and 2 others like this"

// /* ------------------------------------------------------ */
// /*                    Q5: Valid Braces                    */
// /* ------------------------------------------------------ */
// //Solution 1:
// function isValid(str) {
//   const stack = [];
//   const openingBrackets = ['(', '{', '['];
//   const closingBrackets = [')', '}', ']'];

//   for (let char of str) {
//     if (openingBrackets.includes(char)) {
//       stack.push(char);
//     } else if (closingBrackets.includes(char)) {
//       const lastOpeningBracket = stack.pop();

//       // Check if the corresponding opening bracket matches
//       if (
//         (char === ')' && lastOpeningBracket !== '(') ||
//         (char === '}' && lastOpeningBracket !== '{') ||
//         (char === ']' && lastOpeningBracket !== '[')
//       ) {
//         return false;
//       }
//     }
//   }

//   // Check if there are any unmatched opening brackets left in the stack
//   return stack.length === 0;
// }

// //Solution 2:
// function validBraces(braces) {
//   let i = 0;
//   let check = '';
//   while (i < braces.length) {
//     check += braces[i];
//     i++;
//   }
//   console.log(check);
// }
// console.log(validBraces('(){}[]'));

// //Solution 3:
// function validBraces(braces) {
//   while (/\(\)|\[\]|\{\}/g.test(braces)) {
//     braces = braces.replace(/\(\)|\[\]|\{\}/g, '');
//   }
//   return !braces.length;
// }

// const asiye = 'asiye';
// const pattern = /(?=.*as)(?=.*x)/g; // Looking up  two different pattern, false
// //const pattern = /a|s|ye/g; // Looking up  two different pattern, true
// const result = pattern.test(asiye);
// console.log(result);

// function validBraces(braces) {
//   // While any of the specified brace pairs are found in the string
//   while (
//     braces.indexOf('{}') != -1 ||
//     braces.indexOf('()') != -1 ||
//     braces.indexOf('[]') != -1
//   ) {
//     // Replace each pair of matching braces with an empty string
//     braces = braces.replace('{}', '').replace('()', '').replace('[]', '');
//   }
//   // Check if the resulting string is empty, indicating balanced braces
//   return braces.length == 0;
// }

// // Test cases
// console.log(validBraces('(){}[]')); // true
// console.log(validBraces('([{}])')); // true ([])
// console.log(validBraces('({[()]})')); // true
// console.log(validBraces('(}')); // false
// console.log(validBraces('[(])')); // false
// console.log(validBraces('[({})](]')); // false

// const str = '({})';
// console.log(str.indexOf('()'));

// /* ------------------------------------------------------ */
// /*        Q5:Product of consecutive Fib numbers           */
// /* ------------------------------------------------------ */
// //Solution 1:
// function productFib(prod) {
//   const fibArr = [0, 1];
//   const product = [];
//   for (let i = 0; i < 50; i++) {
//     fibArr.push(fibArr[i] + fibArr[i + 1]);
//     if (fibArr[i] * fibArr[i + 1] === prod) {
//       return [fibArr[i], fibArr[i + 1], true];
//     } else if (fibArr[i] * fibArr[i + 1] > prod) {
//       return [fibArr[i], fibArr[i + 1], false];
//     }
//   }
// }

// //Solution 2:
// function productFib(prod) {
//   const fibArr = [0, 1];
//   let i = 2;
//   while (true) {
//     fibArr.push(fibArr[i - 1] + fibArr[i - 2]);

//     if (fibArr[i - 1] * fibArr[i] === prod) {
//       return [fibArr[i - 1], fibArr[i], true];
//     } else if (fibArr[i - 1] * fibArr[i] > prod) {
//       return [fibArr[i - 1], fibArr[i], false];
//     }
//     i++;
//   }
// }

// //Solution 3:
// function productFib(prod) {
//   var n = 0;
//   var nPlus = 1;
//   while (n * nPlus < prod) {
//     nPlus = n + nPlus;
//     n = nPlus - n;
//   }
//   return [n, nPlus, n * nPlus === prod];
// }

// //Solution 4:
// function productFib(prod) {
//   let [a, b] = [0, 1];
//   while (a * b < prod) [a, b] = [b, a + b];
//   return [a, b, a * b === prod];
// }

// //Test Data:
// console.log(productFib(193864606));
// console.log(productFib(74049690));
// console.log(productFib(84049690));

// /* ------------------------------------------------------ */
// /*                  Q6:Enough is enough!                  */
// /* ------------------------------------------------------ */
// //Solution 1:
// function deleteNth(arr, n) {
//   const occurrences = {};
//   const result = [];
//   for (const element of arr) {
//     if (!occurrences[element]) {
//       occurrences[element] = 1;
//       result.push(element);
//     } else if (occurrences[element] < n) {
//       occurrences[element]++;
//       result.push(element);
//     }
//   }
//   console.log(result);
// }

// //Solution 2:
// function deleteNth(arr) {
//   const occurrences = {};

//   for (let i = 0; i < arr.length; i++) {
//     let count = occurrences[arr[i]] || 0;

//     if (count < 2) {
//       occurrences[arr[i]] = (count || 0) + 1;
//     }
//   }

//   const result = Object.keys(occurrences).map(Number);
//   return result;
// }

// //Solution 3:
// function deleteNth(arr, x) {
//   var cache = {};
//   console.log(cache);
//   return arr.filter(function (n) {
//     cache[n] = (cache[n] || 0) + 1;
//     return cache[n] <= x;
//   });
// }

// //Solution 4:
// function deleteNth(arr, maxOccurrences) {
//   // Create an object to keep track of occurrences of each element
//   const occurrences = {};

//   // Use the filter method to create a new array with the desired elements
//   return arr.filter(element => {
//     // Check the count of the current element in occurrences object
//     const count = occurrences[element] || 0;

//     // If the count is less than the maxOccurrences, include the element
//     if (count < maxOccurrences) {
//       // Increment the count for the current element in occurrences
//       occurrences[element] = count + 1;
//       return true;
//     }

//     // If the count exceeds or equals maxOccurrences, exclude the element
//     return false;
//   });
// }

// //Test Data:
// console.log(deleteNth([20, 37, 20, 20, 20, 21], 2)); //OutPut:[20,37,21]
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

// const deleteNth = (arr, x) =>
//   arr.filter((e, i) => arr.slice(0, i).filter(f => f == e).length < x);

// /* ------------------------------------------------------ */
// /*           Q7:Write Number in Expanded Form             */
// /* ------------------------------------------------------ */
// //Solution 1:
// function expandedForm(num) {
//   const expanded = [];
//   const last = [];
//   for (let i = 1; i < num.toString().length; i++) {
//     const starting = num % 10 ** (num.toString().length - i);
//     expanded.push(starting);
//     if (starting < 10) {
//       last.push(num - expanded[0]);
//       for (let n = 0; n < expanded.length - 1; n++) {
//         last.push(Math.abs(expanded[n] - expanded[n + 1]));
//       }
//       last.push(expanded[expanded.length - 1]);
//       return last.filter(number => number !== 0).join(' + ');
//     }
//   }
// }

// //Solution 2:
// function expandedForm(num) {
//   const numString = num.toString();
//   const expand = [];
//   for (let i = 0; i < num.toString().length; i++) {
//     const placeValue = numString[i] * 10 ** (num.toString().length - i - 1);
//     expand.push(placeValue);
//   }
//   return expand.filter(number => number !== 0).join(' + ');
// }

// //Solution 3:
// function expandedForm(num) {
//   return String(num)
//     .split('')
//     .map((num, index, arr) => +'0'.repeat(arr.length - index - 1))
//     .filter(num => Number(num) != 0)
//     .join(' + ');
// }

// //Solution 4:
// const expandedForm = n =>
//   n
//     .toString()
//     .split('')
//     .reverse()
//     .map((a, i) => a * Math.pow(10, i))
//     .filter(a => a > 0)
//     .reverse()
//     .join(' + ');

// //Solution 5:
// function expandedForm(num) {
//   num = String(num);
//   let result = [];
//   for (var i = 0; i < num.length; i++) {
//     if (num[i] == 0) continue;
//     else result.push(num[i] + '0'.repeat(num.length - i - 1));
//   }
//   return result.join(' + ');
// }

// //Test Data:
// console.log(expandedForm(12));
// console.log(expandedForm(42));
// console.log(expandedForm(42869574603));
// console.log(expandedForm(70304));

// const str2 = 'asiye';
// console.log(str2.split('').map((value, key, map) => value.repeat(5)));

// /* ------------------------------------------------------ */
// /*            Q8:Calculating with Functions               */
// /* ------------------------------------------------------ */
// //Solution 1:
// function number(value) {
//   return function (operation) {
//     return operation ? operation(value) : value;
//   };
// }

// function operation(func, num) {
//   return func ? func(num) : num;
// }

// function zero(operation) {
//   return number(0)(operation);
// }

// function one(operation) {
//   return number(1)(operation);
// }

// function two(operation) {
//   return number(2)(operation);
// }

// function three(operation) {
//   return number(3)(operation);
// }

// function four(operation) {
//   return number(4)(operation);
// }

// function five(operation) {
//   return number(5)(operation);
// }

// function six(operation) {
//   return number(6)(operation);
// }

// function seven(operation) {
//   return number(7)(operation);
// }

// function eight(operation) {
//   return number(8)(operation);
// }

// function nine(operation) {
//   return number(9)(operation);
// }

// function plus(num) {
//   return function (value) {
//     return value + num;
//   };
// }

// function minus(num) {
//   return function (value) {
//     return value - num;
//   };
// }

// function times(num) {
//   return function (value) {
//     return value * num;
//   };
// }

// function dividedBy(num) {
//   return function (value) {
//     return Math.floor(value / num);
//   };
// }

// //Solution 2:
// const [zero, one, two, three, four, five, six, seven, eight, nine] = [
//   ...Array(10),
// ].map((_, idx) => fn => fn ? fn(idx) : idx);
// const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(
//   val => new Function(`b`, `return a => a ${val} b ^ 0`)
// );

// //Solution 3:
// const zero = func => (func ? func(0) : 0);
// const one = func => (func ? func(1) : 1);
// const two = func => (func ? func(2) : 2);
// const three = func => (func ? func(3) : 3);
// const four = func => (func ? func(4) : 4);
// const five = func => (func ? func(5) : 5);
// const six = func => (func ? func(6) : 6);
// const seven = func => (func ? func(7) : 7);
// const eight = func => (func ? func(8) : 8);
// const nine = func => (func ? func(9) : 9);

// const plus = x => num => num + x;
// const minus = x => num => num - x;
// const times = x => num => num * x;
// const dividedBy = x => num => ~~(num / x);

// //Solution 4:
// function number(num) {
//   return function () {
//     if (arguments.length === 0) {
//       return num;
//     } else {
//       return Math.floor(eval(num + arguments[0]));
//     }
//   };
// }

// function method(met) {
//   return val => met + val;
// }

// const zero = number(0),
//   one = number(1),
//   two = number(2),
//   three = number(3),
//   four = number(4),
//   five = number(5),
//   six = number(6),
//   seven = number(7),
//   eight = number(8),
//   nine = number(9),
//   plus = method('+'),
//   minus = method('-'),
//   times = method('*'),
//   dividedBy = method('/');

// //Test Data:
// console.log(seven(times(five()))); // Output: 35
// console.log(four(plus(nine()))); // Output: 13
// console.log(eight(minus(three()))); // Output: 5
// console.log(six(dividedBy(two()))); // Output: 3

// /* ------------------------------------------------------ */
// /*                         Q9:Secret                      */
// /* ------------------------------------------------------ */
// //Solution 1:
// function recoverSecret(triplets) {
//   const uniqueChars = new Set();
//   triplets.forEach(triplet => {
//     triplet.forEach(char => uniqueChars.add(char));
//   });

//   const graph = new Map();
//   uniqueChars.forEach(char => graph.set(char, []));

//   triplets.forEach(triplet => {
//     const [char1, char2, char3] = triplet;
//     graph.get(char1).push(char2);
//     graph.get(char2).push(char3);
//   });

//   const visited = new Set();
//   const result = [];

//   function topologicalSort(node) {
//     if (!visited.has(node)) {
//       visited.add(node);
//       graph.get(node).forEach(neighbor => topologicalSort(neighbor));
//       result.unshift(node);
//     }
//   }

//   uniqueChars.forEach(char => topologicalSort(char));

//   return result.join('');
// }

// // Example Usage:
// const triplets = [
//   ['t', 'u', 'p'],
//   ['w', 'h', 'i'],
//   ['t', 's', 'u'],
//   ['a', 't', 's'],
//   ['h', 'a', 'p'],
//   ['t', 'i', 's'],
//   ['w', 'h', 'a'],
// ];

// console.log(recoverSecret(triplets)); // Output: "whatisup"

// /* ------------------------------------------------------ */
// /*                  Q10:Pyramid Slide Down                   */
// /* ------------------------------------------------------ */
// const pyramid = [
//   [75],
//   [95, 64],
//   [17, 47, 82],
//   [18, 35, 87, 10],
//   [20, 4, 82, 47, 65],
//   [19, 1, 23, 75, 3, 34],
//   [88, 2, 77, 73, 7, 63, 67],
//   [99, 65, 4, 28, 6, 16, 70, 92],
//   [41, 41, 26, 56, 83, 40, 80, 70, 33],
//   [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//   [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//   [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//   [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//   [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//   [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
// ];
// //Solution 1:
// function gett(arr) {
//   if (arr.length === 1) {
//     console.log(arr[0][0]);
//     return;
//   }

//   const lastRow = arr.pop();
//   arr[arr.length - 1] = sum(arr[arr.length - 1], lastRow);

//   return gett(arr);
// }

// //Solution 2: Recursive
// function gett(arr) {
//   if (arr.length === 1) {
//     console.log(arr[0][0]);
//     return;
//   }

//   const lastRow = arr.pop();
//   arr[arr.length - 1] = sum(arr[arr.length - 1], lastRow);

//   return gett(arr);
// }

// function sum(arr1, arr2) {
//   return arr1.map((v, i) => v + Math.max(arr2[i], arr2[i + 1]));
// }

// gett(pyramid);
// //Solution 3:
// function sum(arr1, arr2) {
//   return arr1.map((v, i) => v + Math.max(arr2[i], arr2[i + 1]));
// }

// gett(pyramid);

// function largestSlideDown(pyramid) {
//   for (let row = pyramid.length - 2; row >= 0; row--) {
//     for (let col = 0; col <= row; col++) {
//       pyramid[row][col] += Math.max(
//         pyramid[row + 1][col],
//         pyramid[row + 1][col + 1]
//       );
//     }
//   }
//   return console.log(pyramid[0][0]);
// }
// largestSlideDown(pyramid);

// //Solution 4:
// function largestSlideDown(pyramid) {
//   function updatePyramid() {
//     for (let row = pyramid.length - 2; row >= 0; row--) {
//       console.log(pyramid.length);
//       for (let col = 0; col <= row; col++) {
//         pyramid[row][col] += Math.max(
//           pyramid[row + 1][col],
//           pyramid[row + 1][col + 1]
//         );
//       }
//     }
//   }
//   function printResult() {
//     console.log(pyramid[0][0]);
//   }
//   updatePyramid();
//   printResult();
// }
// largestSlideDown(pyramid);

// //Solution 5:
// function longestSlideDown(pyramid) {
//   return pyramid.reduceRight((last, current) =>
//     current.map((v, i) => v + Math.max(last[i], last[i + 1]))
//   )[0];
// }

// //Solution 6:
// const longestSlideDown = pyramid =>
//   pyramid.reduceRight((lower, current) =>
//     current.map((v, i) =>
//       lower[i] > lower[i + 1] ? v + lower[i] : v + lower[i + 1]
//     )
//   )[0];

// /* ------------------------------------------------------ */
// /*              Q11:Integers: Recreation One              */
// /* ------------------------------------------------------ */
// //Solution 1:
// function listSquaredNumbers(m, n) {
//   function getDiviorsSum(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       if (num % i === 0) {
//         sum += i ** 2;
//       }
//     }
//     return sum;
//   }
//   function isPerfectSquare(num) {
//     const sqrt = Math.sqrt(num);
//     return sqrt === Math.floor(sqrt);
//   }
//   const result = [];
//   for (let i = m; i <= n; i++) {
//     const divisorsSum = getDiviorsSum(i);
//     if (isPerfectSquare(divisorsSum)) {
//       result.push([i, divisorsSum]);
//     }
//   }
//   return result;
// }
// console.log(listSquaredNumbers(42, 250));

// //Solution 2:
// const listSquared = (m, n) => {
//   const res = [];
//   for (let i = m; i <= n; i++) {
//     let sum = 0;
//     for (let j = 1; j <= n; j++) {
//       if (!(i % j)) sum += j ** 2;
//     }
//     if (Number.isInteger(sum ** 0.5)) res.push([i, sum]);
//   }
//   return res;
// };

// //Solution 3:
// function listSquared(m, n) {
//   let chamber = {};
//   function wuTang(x) {
//     let i = 1,
//       odb = [],
//       meth;
//     while (i <= x) {
//       !(x % i) ? (odb.push(i), i++) : i++;
//     }
//     meth = odb.reduce(
//       (a, e) =>
//         (chamber[e] ? chamber[e] : ((chamber[e] = e * e), chamber[e])) + a,
//       0
//     );
//     return !(Math.sqrt(meth) % 1) ? [--i, meth] : null;
//   }
//   return Array.from({ length: n - m }, (e, i) => wuTang(i + m)).filter(e => e);
// }

// /* ------------------------------------------------------ */
// /*                   Q12:Strip Comments                   */
// /* ------------------------------------------------------ */

// //Solution 1:
// function solution(text, markers) {
//   let currentText = [...text];
//   for (let i = 0; i < markers.length; i++) {
//     currentText = currentText.filter(
//       char => char !== markers[i] && char !== markers[i + 1]
//     );
//     console.log(currentText.join(''));
//   }
//   return currentText;
// }
// solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']);

// //Solution 2:
// function solution(text, markers) {
//   const textArray = [...text];
//   const result = textArray
//     .filter(char => !markers.includes(char))
//     .join('')
//     .trim();
//   console.log(result);
// }
// const result = solution(
//   'apples, pears # and bananas\ngrapes\nbananas !apples',
//   ['#', '!']
// );

// //Solution 3:
// function solution(text, markers) {
//   let currentText = text;

//   for (let i = 0; i < markers.length; i++) {
//     const marker = markers[i];
//     currentText = currentText
//       .split('\n')
//       .map(line => {
//         const markerIndex = line.indexOf(marker);
//         return markerIndex !== -1
//           ? line.substring(0, markerIndex).trim()
//           : line;
//       })
//       .filter(line => line.trim() !== '')
//       .join('\n');

//     console.log(currentText);
//   }

//   return currentText;
// }
// const result = //solution("aa bb cc", []);
//   console.log('Final Result:', result);

// /* ------------------------------------------------------ */
// /*                      Q13:Snail                         */
// /* ------------------------------------------------------ */
// //Solution 1:
// function snail(arrays) {
//   /* ----------------------- step 1 ----------------------- */
//   const resultArray = [];
//   resultArray.push(...arrays[0]);

//   /* ----------------------- step 2 ----------------------- */

//   const n = arrays.length;
//   arrays.forEach((element, index) => {
//     if (index > 0 && index < n - 1) {
//       resultArray.push(element[n - 1]);
//     }
//   });

//   /* ----------------------- step 3 ----------------------- */
//   resultArray.push(...arrays[n - 1].reverse());

//   /* ----------------------- step 4 ----------------------- */

//   for (let i = n - 2; i > 0; i--) {
//     if (i === 0) {
//       break;
//     } else {
//       resultArray.push(arrays[i][0]);
//     }
//   }
//   /* ----------------------- stap 5 ----------------------- */
//   if (n < 4) {
//     resultArray.push(arrays[n - 2][n - 2]);
//     return resultArray;
//   } else {
//     const backToBeginArray = [];
//     arrays.forEach((element, index) => {
//       if (index > 0 && index < n - 1) {
//         backToBeginArray.push(element.slice(1, 4));
//       }
//     });
//     const ultimateResult = resultArray.concat(snail(backToBeginArray));
//     return console.log(ultimateResult);
//   }
// }

// //Solution 2:
// function snail(array) {
//   const result = [];

//   while (array.length > 0) {
//     // Traverse top row from left to right
//     result.push(...array.shift());
//     //console.log(result)

//     // Traverse right column from top to bottom

//     for (let i = 0; i < array.length; i++) {
//       result.push(array[i].pop());
//     }

//     // Traverse bottom row from right to left
//     if (array.length > 0) {
//       result.push(...array.pop().reverse());
//     }

//     // Traverse left column from bottom to top
//     for (let i = array.length - 1; i >= 0; i--) {
//       result.push(array[i].shift());
//     }
//   }

//   return result;
// }

// //Solution 3:

// //Test Data:
// const array1 = [
//   [
//     [1, 2, 3, 4, 5, 6, 7],
//     [20, 21, 22, 23, 24, , 10, 7],
//     [11, 19, 32, 33, 34, 25, 8],
//     [12, 18, 31, 36, 35, 26, 9],
//     [13, 17, 30, 29, 28, 27, 10],
//     [14, 16, 15, 14, 13, 12, 11],
//   ],
// ];
// const array0 = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];
// function snail(array) {
//   /****/
//   var vector = [];
//   while (array.length) {
//     vector.push(...array.shift());
//     array.map(row => vector.push(row.pop()));
//     array.reverse().map(row => row.reverse());
//     console.log(array);
//   }
//   console.log(vector);
//   return vector;
// }
// console.log(snail(array0));
// console.log(snail(array1));

// /* ------------------------------------------------------ */
// /*              Q14:Moving Zeros To The End               */
// /* ------------------------------------------------------ */
// //Solution 1:
// function moveZeros(arr) {
//   const withoutZeros = [];
//   const withZeros = [];

//   arr.forEach(char => {
//     if (char !== 0) {
//       withoutZeros.push(char);
//     } else {
//       withZeros.push(char);
//     }
//   });

//   const result = withoutZeros.concat(withZeros);
//   return result;
// }

// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);

// //Solution 2:
// var moveZeros = function (arr) {
//   return arr
//     .filter(function (x) {
//       return x !== 0;
//     })
//     .concat(
//       arr.filter(function (x) {
//         return x === 0;
//       })
//     );
// };

// //Solution 3:
// var moveZeros = function (arr) {
//   return [...arr.filter(n => n !== 0), ...arr.filter(n => n === 0)];
// };

// //Solution 4:
// var moveZeros = function (arr) {
//   return arr.filter(val => val !== 0).concat(arr.filter(val => val === 0));
// };

// /* ------------------------------------------------------ */
// /*                  Q15:Primes in numbers                 */
// /* ------------------------------------------------------ */
// //Solution 1:
// function primeFactors(n) {
//   const factors = [];
//   let divisor = 2;

//   while (n > 1) {
//     if (n % divisor === 0) {
//       factors.push(divisor);
//       n = n / divisor;
//     } else {
//       divisor++;
//     }
//   }
//   const set = new Set(factors);
//   const lastArray = Array.from(set);

//   let counterArray = [];
//   let counter = 1;

//   for (let i = 0; i < factors.length; i++) {
//     if (factors[i] === factors[i + 1]) {
//       counter++;
//     } else {
//       counterArray.push(counter);
//       counter = 1;
//     }
//   }
//   const result = [];
//   for (let j = 0; j < counterArray.length; j++) {
//     const str =
//       counterArray[j] > 1
//         ? `(${lastArray[j]}**${counterArray[j]})`
//         : `(${lastArray[j]})`;

//     result.push(str);
//   }
//   console.log(result.join(''));
// }
// primeFactors(7775460);

// //Solution 2:
// function primeFactors(n) {
//   for (var i = 2, res = '', f; i <= n; i++) {
//     f = 0;
//     while (n % i == 0) {
//       f++;
//       n /= i;
//     }
//     res += f ? '(' + (f > 1 ? i + '**' + f : i) + ')' : '';
//   }
//   return res || '(' + n + ')';
// }

// //Solution 3:
// function primeFactors(n) {
//   for (var s = '', d = 2; n > 1; d++) {
//     for (var k = 0; n % d == 0; k++, n /= d);
//     s += k ? (k == 1 ? `(${d})` : `(${d}**${k})`) : '';
//   }
//   return s;
// }
// console.log(primeFactors(7775460));

// //Solution 4:
// const primeFactors = n => {
//   if (n < 2) return `(${n})`;
//   let factors = '';
//   for (let i = 2; i <= n; i++) {
//     let count = 0;
//     while (n % i === 0) {
//       count++;
//       n /= i;
//     }
//     if (count) {
//       factors += `(${i}`;
//       if (count > 1) factors += `**${count}`;
//       factors += `)`;
//     }
//   }
//   return factors;
// };

// //Solution 5:
// const primeFactors = n => {
//   const obj = {};
//   let i = 2;
//   while (n > 1) !(n % i) ? ((obj[i] = -~obj[i]), (n /= i)) : i++;
//   console.log(obj);
//   return Object.keys(obj).reduce(
//     (pre, val) => pre + `(${val}${obj[val] > 1 ? `**${obj[val]}` : ``})`,
//     ``
//   );
// };

// console.log(primeFactors(7775460));
// //pre: Accumulator variable that holds the accumulated result.

// /* ------------------------------------------------------ */
// /*      Q16:Most frequently used words in a text          */
// /* ------------------------------------------------------ */
// //Solution 1:
// const str =
//   'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extraon Sundays, made away with three-quarters of his income.';

// function topThreeWords(text) {
//   const patternList = text.split(' ').reduce((acc, currentValue) => {
//     acc[currentValue] = (acc[currentValue] || 0) + 1;
//     return acc;
//   }, {});
//   console.log(patternList);
//   for (const key in patternList) {
//     if (!/[a-zA-Z]/.test(key)) {
//       // If the key is not a letter, delete the pair
//       delete patternList[key];
//     }
//   }
//   const maxThreeWords = Object.entries(patternList)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, 3)
//     .map(([key]) => key);

//   return maxThreeWords;
// }

// console.log(topThreeWords(str));
