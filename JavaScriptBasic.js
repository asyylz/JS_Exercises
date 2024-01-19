"use strict";
/* -------------------------- 1.------------------------- */
////Solution 1:
// let today = new Date();
// console.log(today.getDay()); //Returns number
////Solution 2:
// Date.prototype.getDayByNumber = function () {
//   let weekdays = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//   ];
//   return weekdays[this.getDay];
// };
// const date = new Date();
// const hours = date.getHours();
// let amPM;
// if (hours > 12) {
//   amPM = "PM";
// } else {
//   amPM = "AM";
// }
// console.log("Today is: " + date.getDayByNumber() + "\n" + "Current time is: " + hours % 12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + amPM);

////Solution 3:
// const today = new Date();
// console.log(today.toDateString());

/* ------------------------- 2. ------------------------- */
////3.Write a JavaScript program to print the current window contents.
////Solution 1:
// function printCurrentPage() {
//   window.print();
// }

////Solution 2:
//onload= window.print();

/* -------------------------- 3. ------------------------- */
////3. Write a JavaScript program to get the current date. Expected Output: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
////Solution 1:
// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth() + 1;
// let yyyy = today.getFullYear();
// if (dd < 10) {
//   dd = "0" + dd;
// }
// if (mm < 10) {
//   mm = "0" + mm;
// }
// // Format the date as mm/dd/yyyy and log it
// today = mm + '/' + dd + '/' + yyyy;
// console.log(today);
////Solution 2: //ES6
// let today = new Date();
// console.log(today.toLocaleDateString('en-US')); // --> mm/dd/yyyy
// console.log(today.toLocaleDateString('en-GB')); // --> dd/mm/yyyy

/* -------------------------- 4. ------------------------- */
////4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
////Solution 1:
// const triangle = (a, b, c) => {
//   const s = (a + b + c) / 2;
//   const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
//   return area.toFixed(2);
// };
// console.log(triangle(5, 6, 7));

/* -------------------------- 5. ------------------------- */
////5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
////Solution 1:
// function animateString(id){
//     var element = document.getElementById('target');
//     var textNode = element.childNodes[0];
//     var text = textNode.data;
//     text = text.split("");
//     setInterval( function (){
//     text.unshift(text.pop());
//     textNode.data = text.join("");
//     }, 100);
//     }

/* -------------------------- 6. ------------------------- */
////6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
////Solution 1:
// const leapYear = (year) => {
//   return `${year} is ${
//     year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
//       ? "leap"
//       : "not leap"
//   } year`;
// };

// console.log(leapYear(1880));

/* -------------------------- 7. ------------------------- */
////7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
////Solution 1:
// const startDate = new Date(2014, 0, 1);
// const endDate = new Date(2050, 11, 31);
// const yearsWithSunday = [];
// let years;

// for (
//   let currentYear = startDate.getFullYear();
//   currentYear <= endDate.getFullYear();
//   currentYear++
// ) {
//   if (new Date(currentYear, 0, 1).getDay() === 0) {
//     yearsWithSunday.push(currentYear);
//   }
// }
// console.log(yearsWithSunday);

////Solution 2:
// function findSundays () {
//     for(let i = 2014; i<= 2050;i++){
//         let date = new Date (`January 1, ${i}`)
//         if(date.getDay()===0){
//             console.log(date.toLocaleDateString('en',{dateStyle:'full'}))
//         }
//     }
// }
// findSundays()
/* -------------------------- 8. ------------------------- */
////8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched"
////Solution 1:
// function guessMyNumber() {
//   const number = Math.ceil(Math.random() * 5);
//   return number;
// }
// const generatedNumber = guessMyNumber();
// console.log(generatedNumber);
// const n = +prompt("Please enter a number");
// if (n === generatedNumber) {
//   console.log("Good work");
// } else {
//   console.log("Try again");
// }

////Solution 2:
////Solution 3:

/* -------------------------- 9. ------------------------- */
////9. Write a JavaScript program to calculate the days left before Christmas.
////Solution 1:
// function leftForXmax() {
//   const today = new Date();
//   const xmaxDate = new Date(today.getFullYear(), 11, 25);
//   if (today.getMonth() == 11 && today.getDate() > 25) {
//     xmaxDate.setFullYear(xmaxDate.getFullYear() + 1);
//   }
//   const oneDay = 1000 * 60 * 60 * 24;
//   return (
//     Math.ceil((xmaxDate.getTime() - today.getTime()) / oneDay) +
//     " days left until christmas"
//   );
// }
// console.log(leftForXmax());

////Solution 2:
// const now= new Date()
// const xMax = new Date(2024,11,25)
// const diff = xMax.getTime()- now.getTime()
// const leftDays = diff /(60*60*24*1000)
// console.log(leftDays.toFixed(0))

/* -------------------------- 10. ------------------------- */
//10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
////Solution 1:
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

////Solution 3:
