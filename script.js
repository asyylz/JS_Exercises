"use strict";
/* ------------------------------------------------------ */
/*                 Q1: Is a number prime?                 */
/* ------------------------------------------------------ */

//Solution 1:
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

//Solution 2:
//Math.sqrt(num) as the upper limit for the loop. This is because any divisor larger than the square root of the number would have a corresponding divisor smaller than the square root. This change reduces the number of iterations, making the function more efficient.

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

//Solution 3:
// const isPrime = (num) => {
//   for (let i = 2; i <= num ** 0.5; i++) {
//     if (!(num % i)) return false;
//   }
//   return num > 1; // it returns true (indicating the number is prime).
// };
// console.log(isPrime(2));

/* ------------------------------------------------------ */
/*              Q2: Fibonacci bigger brother              */
/* ------------------------------------------------------ */
//Solution 1:
// const tribonacci = function (signature, n) {
//   const output = [...signature];
//   for (let i = 3; i < n; i++) {
//     output.push(output[i - 3] + output[i - 2] + output[i - 1]);
//   }
//   return output.slice(0, n);
// };

// const result = tribonacci([3, 2, 1], 10);
// console.log(result)
// tribonacci([3, 2, 1], 10);

//Solution 2:
function tribonacci1(signature, n) {
  const result = signature.slice(0, n);
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
  }
  return result;
}
console.log(tribonacci1([3, 2, 1], 10));

//Solution 3:
// function tribonacci2(s, n) {
//   var arr = [];
//   for (var i = 0; i < n; i++) {
//     arr.push(i < 3 ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
//   }
//   return arr;
// }

//Solution 4:
// function tribonacci3(signature, n) {
//   while (signature.length < n) {
//     signature.push(signature.slice(-3).reduce((a, b) => a + b));
//   }
//   return signature.slice(0, n);
// }
/* ------------------------------------------------------ */
/*               Q3:Build a pile of Cubes                 */
/* ------------------------------------------------------ */
//Solution 1:
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
//   return -1 // If no such n is found
// }

//Solution 2:
// function findNb(m) {
//   var n = 0;
//   while (m > 0) m -= (++n) ** 3;
//   return m ? -1 : n; // Return -1 if m is non-zero (sum not found), otherwise return n
// }
// console.log(findNb(4183059834009));

//Solution 3:
// function findNb(m) {
//   let n = 0;
//   let sum = 0;
//   while (sum < m) {
//     n++;
//     sum += Math.pow(n, 3);
//   }
//   return sum === m ? n : -1;
// }

/* ------------------------------------------------------ */
/*                   Q4:Like an item                      */
/* ------------------------------------------------------ */
//mplement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//Solution 1:
// function likes(name) {
//   if (name.length === 0) {
//     return "no one likes this";
//   } else if (name.length === 1) {
//     return `${name[0]} likes this`;
//   } else if (name.length === 2) {
//     return `${name[0]} and ${name[1]} like this`;
//   } else if (name.length === 3) {
//     return `${name[0]}, ${name[1]} and ${name[2]} like this`;
//   } else if (name.length > 3){
//     return `${name[0]}, ${name[1]} and ${name.length - 2} others like this`;
//   }
// }
//Solution 2:
// function likes(names) {
//   return {
//     0: "no one likes this",
//     1: `${names[0]} likes this`,
//     2: `${names[0]} and ${names[1]} like this`,
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//   }[Math.min(4, names.length)];
// }

//Solution 3:
function likes(names) {
  var templates = [
    "no one likes this",
    "{name} likes this",
    "{name} and {name} like this",
    "{name}, {name} and {name} like this",
    "{name}, {name} and {n} others like this",
  ];
  var idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === "{name}" ? names.shift() : names.length;
  });
}

//Solution 4:
// function likes(names) {
//   names.length === 0 && (names = ["no one"]);
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
// console.log(likes(["Peter"])); // "Peter likes this"
// console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this"
// console.log(likes(["Max", "John", "Mark"])); // "Max, John, and Mark like this"
// console.log(likes(["Max", "John", "Mark", "Max"])); // "Max, John, and 2 others like this"

/* ------------------------------------------------------ */
/*                    Q5: Valid Braces                    */
/* ------------------------------------------------------ */
//Solution 1:
// function isValid(str) {
//   const stack = [];
//   const openingBrackets = ['(', '{', '['];
//   const closingBrackets = [')', '}', ']'];

//   for (let char of str) {
//       if (openingBrackets.includes(char)) {
//           stack.push(char);
//       } else if (closingBrackets.includes(char)) {
//           const lastOpeningBracket = stack.pop();

//           // Check if the corresponding opening bracket matches
//           if (
//               (char === ')' && lastOpeningBracket !== '(') ||
//               (char === '}' && lastOpeningBracket !== '{') ||
//               (char === ']' && lastOpeningBracket !== '[')
//           ) {
//               return false;
//           }
//       }
//   }

//   // Check if there are any unmatched opening brackets left in the stack
//   return stack.length === 0;
// }

//Solution 2:
// function validBraces(braces) {
//   let i = 0;
//   let check = "";
//   while (i < braces.length) {
//     check += braces[i];
//     i++;
//   }
//   console.log(check);
// }
// console.log(validBraces("(){}[]"));

//Solution 3:
// function validBraces(braces){
//   while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
//   return !braces.length;
//  }

// const asiye = 'asiye';
// const pattern = /(?=.*as)(?=.*x)/g; // Looking up  two different pattern, false
// //const pattern = /a|s|ye/g; // Looking up  two different pattern, true
// const result = pattern.test(asiye);
// console.log(result);

function validBraces(braces) {
  // While any of the specified brace pairs are found in the string
  while (
    braces.indexOf("{}") != -1 ||
    braces.indexOf("()") != -1 ||
    braces.indexOf("[]") != -1
  ) {
    // Replace each pair of matching braces with an empty string
    braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  }
  // Check if the resulting string is empty, indicating balanced braces
  return braces.length == 0;
}

// Test cases
console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true ([])
console.log(validBraces("({[()]})")); // true
console.log(validBraces("(}")); // false
console.log(validBraces("[(])")); // false
console.log(validBraces("[({})](]")); // false

const str = "({})";
console.log(str.indexOf("()"));

/* ------------------------------------------------------ */
/*        Q5:Product of consecutive Fib numbers           */
/* ------------------------------------------------------ */
//Solution 1:
// function productFib(prod) {
//   const fibArr = [0, 1];
//   const product = [];
//   for (let i = 0; i < 50; i++) {
//     fibArr.push(fibArr[i] + fibArr[i + 1]);
//     if (fibArr[i] * fibArr[i + 1] === prod) {
//       return [fibArr[i], fibArr[i + 1], true];
//     } else  if (fibArr[i] * fibArr[i + 1] > prod){
//       return [fibArr[i], fibArr[i + 1], false]
//     }
//   }
// }

//Solution 2:
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

//Solution 3:
// function productFib(prod){
//   var n = 0;
//   var nPlus = 1;
//   while(n*nPlus < prod) {
//     nPlus = n + nPlus;
//     n = nPlus - n;
//   }
//   return [n, nPlus, n*nPlus===prod];
// }

//Solution 4:
function productFib(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

//Test Data:
console.log(productFib(193864606));
console.log(productFib(74049690));
console.log(productFib(84049690));

/* ------------------------------------------------------ */
/*                  Q6:Enough is enough!                  */
/* ------------------------------------------------------ */
//Solution 1:
function deleteNth(arr, n) {
  const occurrences = {};
  const result = [];
  for (const element of arr) {
    if (!occurrences[element]) {
      occurrences[element] = 1;
      result.push(element);
    } else if (occurrences[element] < n) {
      occurrences[element]++;
      result.push(element);
    }
  }
  console.log(result);
}

//Solution 2:
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

//Solution 3:
function deleteNth(arr, x) {
  var cache = {};
  console.log(cache);
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

//Solution 4:
// function deleteNth(arr, maxOccurrences) {
//   // Create an object to keep track of occurrences of each element
//   const occurrences = {};

//   // Use the filter method to create a new array with the desired elements
//   return arr.filter((element) => {
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

//Test Data:
console.log(deleteNth([20, 37, 20, 20, 20, 21], 2)); //OutPut:[20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

//const deleteNth = (arr,x) => arr.filter((e,i)=> arr.slice(0,i).filter(f=>f== e).length < x );

/* ------------------------------------------------------ */
/*           Q7:Write Number in Expanded Form             */
/* ------------------------------------------------------ */
//Solution 1:
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

//Solution 2:
// function expandedForm(num) {
//   const numString = num.toString();
//   const expand = [];
//   for (let i = 0; i < num.toString().length; i++) {
//     const placeValue = numString[i] * 10 ** ((num.toString().length) - i - 1);
//     expand.push(placeValue)
//   }
//   return expand.filter(number => number !== 0).join(' + ');
// }

//Solution 3:
// function expandedForm(num) {
//   return String(num)
//     .split("")
//     .map((num, index, arr) => +"0".repeat(arr.length - index - 1))
//     .filter((num) => Number(num) != 0)
//     .join(" + ");
// }

//Solution 4:
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

//Solution 5:
function expandedForm(num) {
  num = String(num);
  let result = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] == 0) continue;
    else result.push(num[i] + "0".repeat(num.length - i - 1));
  }
  return result.join(" + ");
}

//Test Data:
console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(42869574603));
console.log(expandedForm(70304));

const str2 = "asiye";
console.log(str2.split("").map((value, key, map) => value.repeat(5)));

/* ------------------------------------------------------ */
/*            Q8:Calculating with Functions               */
/* ------------------------------------------------------ */
//Solution 1:
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

//Solution 2:
const [zero, one, two, three, four, five, six, seven, eight, nine] = [
  ...Array(10),
].map((_, idx) => (fn) => fn ? fn(idx) : idx);
const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(
  (val) => new Function(`b`, `return a => a ${val} b ^ 0`)
);

//Solution 3:
// const zero  = (func) => func ? func(0) : 0;
// const one   = (func) => func ? func(1) : 1;
// const two   = (func) => func ? func(2) : 2;
// const three = (func) => func ? func(3) : 3;
// const four  = (func) => func ? func(4) : 4;
// const five  = (func) => func ? func(5) : 5;
// const six   = (func) => func ? func(6) : 6;
// const seven = (func) => func ? func(7) : 7;
// const eight = (func) => func ? func(8) : 8;
// const nine  = (func) => func ? func(9) : 9;

// const plus      = (x) => (num) => num + x;
// const minus     = (x) => (num) => num - x;
// const times     = (x) => (num) => num * x;
// const dividedBy = (x) => (num) => ~~(num / x);

//Solution 4:
// function number(num) {
//   return function () {
//     if (arguments.length === 0) {
//       return num
//     } else {
//       return Math.floor(eval(num + arguments[0]))
//     }
//   }
// }

// function method(met) {
//   return (val) => met + val
// }

// const zero = number(0),
// one = number(1),
// two = number(2),
// three = number(3),
// four = number(4),
// five = number(5),
// six = number(6),
// seven = number(7),
// eight = number(8),
// nine = number(9),
// plus = method('+'),
// minus = method('-'),
// times = method('*'),
// dividedBy = method('/');

//Test Data:
//console.log(seven(times(five()))); // Output: 35
//console.log(four(plus(nine()))); // Output: 13
//console.log(eight(minus(three()))); // Output: 5
//console.log(six(dividedBy(two()))); // Output: 3

/* ------------------------------------------------------ */
/*                         Q9:Secret                      */
/* ------------------------------------------------------ */

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
//   ['w', 'h', 'a']
// ];

// console.log(recoverSecret(triplets)); // Output: "whatisup"

/* ------------------------------------------------------ */
/*                   Pyramid Slide Down                   */
/* ------------------------------------------------------ */
//Solution 1:
// function longestSlideDown(pyramid) {
//   const sum = new Map([pyramid[0]]);
//   pyramid.forEach((array) => {
//     array.length === 1
//       ? sum.set(array[array.length - 1])
//       : sum.set(array[array.length - 2]);
//   });
//   const totalSum = Array.from(sum.keys()).reduce((acc,value) => acc + value,0)
//   console.log(totalSum)
// }

//Solution 2:
const pyramid = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
];

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
// largestSlideDown(pyramid)

//Solution 3:
function largestSlideDown(pyramid) {
  function updatePyramid() {
    for (let row = pyramid.length - 2; row >= 0; row--) {
      console.log(pyramid.length);
      for (let col = 0; col <= row; col++) {
        pyramid[row][col] += Math.max(
          pyramid[row + 1][col],
          pyramid[row + 1][col + 1]
        );
      }
    }
  }
  function printResult() {
    console.log(pyramid[0][0]);
  }
  updatePyramid();
  printResult();
}
largestSlideDown(pyramid);

//Solution 4:
// function longestSlideDown (pyramid) {
//   return pyramid.reduceRight((last,current)=>current.map(
//     (v,i)=>v+Math.max(last[i],last[i+1])
//   ))[0];
// }

//Solution 5:
// const longestSlideDown = pyramid => (
//   pyramid.reduceRight((lower, current) => (
//     current.map((v, i) => (lower[i] > lower[i+1]) ? v + lower[i] : v + lower[i+1])
//   ))[0]
// );