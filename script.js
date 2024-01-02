"use strict";
/* ----------------- Q1: Is a number prime? ----------------- */

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
function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

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
