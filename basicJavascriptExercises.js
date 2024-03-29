"use strict";
/* -------------------------- 1.------------------------- */
//Solution 1:
let today = new Date();
console.log(today.getDay()); //Returns number
//Solution 2:
Date.prototype.getDayByNumber = function () {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  return weekdays[this.getDay];
};
const date = new Date();
const hours = date.getHours();
let amPM;
if (hours > 12) {
  amPM = "PM";
} else {
  amPM = "AM";
}
console.log("Today is: " + date.getDayByNumber() + "\n" + "Current time is: " + hours % 12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + amPM);

//Solution 3:
const today = new Date();
console.log(today.toDateString());

/* ------------------------- 2. ------------------------- */
//3.Write a JavaScript program to print the current window contents.
//Solution 1:
function printCurrentPage() {
  window.print();
}

//Solution 2:
onload= window.print();

/* -------------------------- 3. ------------------------- */
//3. Write a JavaScript program to get the current date. Expected Output: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
//Solution 1:
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
// Format the date as mm/dd/yyyy and log it
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
//Solution 2: //ES6
let today = new Date();
console.log(today.toLocaleDateString('en-US')); // --> mm/dd/yyyy
console.log(today.toLocaleDateString('en-GB')); // --> dd/mm/yyyy

/* -------------------------- 4. ------------------------- */
//4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
//Solution 1:
const triangle = (a, b, c) => {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  return area.toFixed(2);
};
console.log(triangle(5, 6, 7));

/* -------------------------- 5. ------------------------- */
//5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
//Solution 1:
function animateString(id){
    var element = document.getElementById('target');
    var textNode = element.childNodes[0];
    var text = textNode.data;
    text = text.split("");
    setInterval( function (){
    text.unshift(text.pop());
    textNode.data = text.join("");
    }, 100);
    }

/* -------------------------- 6. ------------------------- */
//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
//Solution 1:
const leapYear = (year) => {
  return `${year} is ${
    year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
      ? "leap"
      : "not leap"
  } year`;
};

console.log(leapYear(1880));

/* -------------------------- 7. ------------------------- */
//7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
//Solution 1:
const startDate = new Date(2014, 0, 1);
const endDate = new Date(2050, 11, 31);
const yearsWithSunday = [];
let years;

for (
  let currentYear = startDate.getFullYear();
  currentYear <= endDate.getFullYear();
  currentYear++
) {
  if (new Date(currentYear, 0, 1).getDay() === 0) {
    yearsWithSunday.push(currentYear);
  }
}
console.log(yearsWithSunday);

//Solution 2:
function findSundays () {
    for(let i = 2014; i<= 2050;i++){
        let date = new Date (`January 1, ${i}`)
        if(date.getDay()===0){
            console.log(date.toLocaleDateString('en',{dateStyle:'full'}))
        }
    }
}
findSundays()
/* -------------------------- 8. ------------------------- */
//8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched"
//Solution 1:
function guessMyNumber() {
  const number = Math.ceil(Math.random() * 5);
  return number;
}
const generatedNumber = guessMyNumber();
console.log(generatedNumber);
const n = +prompt("Please enter a number");
if (n === generatedNumber) {
  console.log("Good work");
} else {
  console.log("Try again");
}

//Solution 2:
//Solution 3:

/* -------------------------- 9. ------------------------- */
//9. Write a JavaScript program to calculate the days left before Christmas.
//Solution 1:
function leftForXmax() {
  const today = new Date();
  const xmaxDate = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() == 11 && today.getDate() > 25) {
    xmaxDate.setFullYear(xmaxDate.getFullYear() + 1);
  }
  const oneDay = 1000 * 60 * 60 * 24;
  return (
    Math.ceil((xmaxDate.getTime() - today.getTime()) / oneDay) +
    " days left until christmas"
  );
}
console.log(leftForXmax());

//Solution 2:
const now= new Date()
const xMax = new Date(2024,11,25)
const diff = xMax.getTime()- now.getTime()
const leftDays = diff /(60*60*24*1000)
console.log(leftDays.toFixed(0))

/* -------------------------- 10. ------------------------- */
//10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
//Solution 1:
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const btnMultiply = document.querySelector(".btn__multiply");
const btnDivide = document.querySelector(".btn__divide");
const resultValue = document.querySelector(".result__value");

btnMultiply.addEventListener("click", function (e) {
  e.preventDefault();
  const result = Number(firstNumber.value) * Number(secondNumber.value);
  resultValue.textContent = result;
});

btnDivide.addEventListener("click", function (e) {
  e.preventDefault();
  const result = Number(firstNumber.value) / Number(secondNumber.value);
  resultValue.textContent = result;
});
////Solution 2:
// Define a function to multiply two numbers and display the result
function multiplyBy() {
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    // Set the inner HTML of the element with the id "result" to the product of the two numbers
    document.getElementById("result").innerHTML = num1 * num2;
}

// Define a function to divide two numbers and display the result
function divideBy() {
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    // Set the inner HTML of the element with the id "result" to the quotient of the two numbers
    document.getElementById("result").innerHTML = num1 / num2;
}

/* -------------------------- 11. ------------------------- */
//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
//Solution 1:
/* ----------------------- Celsius ---------------------- */
function celsiusToFahrenheit(F){
    const resultCelsius = ((F-32)/9) * 5
    return resultCelsius.toFixed(0)
}
console.log(fahrenheitToCelsius(250))

/* --------------------- Fahrenheit --------------------- */
function celsiusToFahrenheit(C) {
  const resultFahrenheit = (C / 5) * 9 + 32;
  return resultFahrenheit.toFixed(0);
}
console.log(celsiusToFahrenheit(60));

/* -------------------------- 12. ------------------------- */
//12. Write a JavaScript program to get the website URL (loading page).
//Solution 1:
console.log(document.URL)
console.log(window.location.href)

/* -------------------------- 13. ------------------------- */
//13. Write a JavaScript exercise to create a variable using a user-defined name.
//Solution 1:
const userDefinedName = prompt("tell us a good name for a variable");
eval(`var ${userDefinedName}`)
console.log(`${userDefinedName} has been defined sucessfully!!`);

/* -------------------------- 14. ------------------------- */
14. Write a JavaScript exercise to get the filename extension.
//Solution 1:
function getFileExtension(fileName) {
  const fileNameArray = [...fileName];
  return fileName.slice(fileNameArray.indexOf(".") + 1);
}
console.log(getFileExtension("asiye.js"));
console.log(getFileExtension("asiye.html"));
//Solution 2:
const fileName = "asiye.js";
console.log(fileName.split(".").pop());

/* -------------------------- 15. ------------------------- */
//15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.
//Solution 1:
function diff(number) {
  if (number > 13) {
    return 2 * (number - 13);
  } else {
    return 13 - number;
  }
}
console.log(diff(11));

//Solution 2:
function newDif(n) {
  return n <= 13 ? 13 - n : (n - 13) * 2;
}
console.log(newDif(33));
console.log(newDif(9));

/* -------------------------- 16.------------------------- */
//16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
Solution 1:
const sum = (a, b) => {
 return console.log(a === b ? (a + b) * 3 : a + b);
};
sum(5,6)
sum(5,5)

/* -------------------------- 17.------------------------- */
//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
//Solution 1:
const diff = (a) => {
  return console.log(a < 19 ? 19 - a : a - 19);
};
diff(6);
diff(11);

/* -------------------------- 18.------------------------- */
//18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
//Solution 1:
const trueOrFalse = (a, b) => {
  if (a === 50 || b === 50 || a + b === 50) return true;
  return false;
};
console.log(trueOrFalse(10, 30));
console.log(trueOrFalse(20, 30));

/* -------------------------- 19.------------------------- */
//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
//Solution 1:
const check = (number) => {
  if ((number > 80 && number < 101) || (number > 379 && number < 401)) {
    return true;
  }
  return false;
};
console.log(check(89));
console.log(check(401));

/* -------------------------- 20.------------------------- */
//20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.
//Solution 1:
function checkNegativeOrPozitive(a, b) {
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    return true;
  }
  return false;
}
console.log(checkNegativeOrPozitive(6, -4));
console.log(checkNegativeOrPozitive(-6, 4));
console.log(checkNegativeOrPozitive(6, 6));
console.log(checkNegativeOrPozitive(-6, -6));

/* -------------------------- 21.------------------------- */
21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.
//Solution 1:
function addPy(str) {
  if (str[0] === "P" && str[1] === "y") {
    return str;
  }
  return "Py" + str;
}
console.log(addPy("asiye"));
//Solution 2:
const str = "asiye";
str.startsWith("Py") ? console.log(str) : console.log("Py" + str);

/* -------------------------- 22.------------------------- */
//22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
//Solution 1:
const amendedStr = (str, n) => {
  return str.replace(str[n], '');
};
console.log(amendedStr("asiye", 2));

//Solution 2:
const amendedStr = (str, n) => {
  return str.slice(0, n) + str.slice(n, 1);
};
console.log(amendedStr("asiye", 4));

/* -------------------------- 23.------------------------- */
//23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
//Solution 1:
function swapChars(str) {
  if (str.length > 1) {
    return (
      str.slice(str.length - 1) + str.slice(1, str.length - 1) + str.slice(0, 1)
    );
  }
}
console.log(swapChars("apple"));

/* -------------------------- 24.------------------------- */
//24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
//Solution 1:
function swapChars1(str) {
  if (str.length > 1) {
    return (
        str.slice(0, 1) + str.slice(0, str.length) + str.slice(0, 1)
    );
  }
}
console.log(swapChars1("apple"));

/* -------------------------- 25.------------------------- */
//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
//Solution 1:
const checkDivisor = (num) => {
  if (num% 3 === 0 || num % 7 === 0) {
    return true;
  }
  return false;
};
console.log(checkDivisor(9))
console.log(checkDivisor(14))
console.log(checkDivisor(13))
/* -------------------------- 26.------------------------- */
//26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
//Solution 1:
function swapChars1(str) {
  if (str.length > 2) {
    return (
        str.slice(str.length-3, str.length) + str + str.slice(str.length-3, str.length)
    );
  }
}
console.log(swapChars1("apple"));

//Solution 2:
function lastThree(str) {
  return str.length >= 3
    ? str.slice(-3) + str + str.slice(-3)
    : "must be 3 chars at least";
}
console.log(lastThree("apple"));
/* -------------------------- 27.------------------------- */
//27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
//Solution 1:
const checkJava = (str) => {
str.startsWith("Java") ? console.log(true) : console.log(false);
};
checkJava('JavaScript')

/* -------------------------- 28.------------------------- */
//28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
//Solution 1:
const check50_99 = (n1,n2) => {
    ((n1 <100 && n1 > 49) || (n2 <100 && n2 > 49)) ? console.log(true) : console.log(false)
}
check50_99(55,18)
check50_99(59,67)
/* -------------------------- 29.------------------------- */
//29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.
//Solution 1:
function threeAtRange(...number) {
  let truth = number.filter((num) => num > 49 && num < 100);
  return truth.length > 0;
}
console.log(threeAtRange(13, 79, 78));

/* -------------------------- 30.------------------------- */
//30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.
//Solution 1:
const output = (str) => {
  str.slice(4, str.length) === "script"
    ? console.log(str.slice(0, 4))
    : console.log(str);
};

output("Javascript");

//Solution 2:
function chk(str) {
  if (str.substring(4, str.length) == "Script") {
    return str.substring(0, 4);
  } else {
    return str;
  }
}
console.log(chk("JavaScript"));
console.log(chk("Python"));
