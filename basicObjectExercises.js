'use strict';
// /* ------------------------------------------------------ */
// /*    JavaScript Object - Exercises, Practice, Solution   */
// /* ------------------------------------------------------ */

// /* -------------------------- 1 ------------------------- */
// 1. Write a JavaScript program to list the properties of a JavaScript object.
// //Solution 1:
// const student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };
// function listOfProperties (obj) {
//     const output = Object.keys(obj).join(', ')
// return output
// }
// console.log(listOfProperties(student))

// //Solution 2:
// function _keys(obj)
//  {
//     if (!isObject(obj)) return [];
//     if (Object.keys) return Object.keys(obj);
//     var keys = [];
//     for (var key in obj) if (_.has(obj, key)) keys.push(key);
//     return keys;
//   }
// function isObject(obj)
// {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
//   }
// console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// /* -------------------------- 2 ------------------------- */
// //2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// //Solution 1:
// const student = {
//   name: 'David Rayy',
//   sclass: 'VI',
//   rollno: 12,
// };
// console.log(student)
// delete student.rollno
// console.log(student)

// /* -------------------------- 3 ------------------------- */
// //3. Write a JavaScript program to get the length of a JavaScript object.
// //Solution 1:
// console.log(Object.values(student).length); ////or keys

// //Solution 2:
// Object.objsize = function (myObj) {
//   let oSize = 0,
//     key;
//     for(key in myObj) {
//         if(myObj.hasOwnProperty(key))
//         oSize++

//     }
//     return oSize
// };

// let objsize = Object.objsize(student)
// console.log('Size of the current object: ' + objsize)

// /* -------------------------- 4 ------------------------- */
// //4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// //Solution 1:
// var library = [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true,
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true,
//   },
//   {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     readingStatus: false,
//   },
// ];

// library.map(element => {
//     if(element.readingStatus) {
//         console.log(`Already read ${element.title}`)
//     }else {
//         console.log((`You still need to read ${element.title}`))
//     }
// })

// //Solution 2:
// for (var i = 0; i < library.length; i++) {
//   var book = "'" + library[i].title + "'" + ' by ' + library[i].author + '.';
//   if (library[i].readingStatus) {
//     console.log('Already read ' + book);
//   } else {
//     console.log('You still need to read ' + book);
//   }
// }

// /* -------------------------- 5 ------------------------- */
// //5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// //Solution 1:
// function Cylinder(height, diameter) {
//   this.height = height;
//   this.diameter = diameter;
// }

// Cylinder.prototype.Volume = function () {
//   let radius = this.diameter / 2;
//   return this.height * Math.PI * radius * radius;
// };
// var cyl = new Cylinder(7,4)
// console.log(`volume = ${cyl.Volume().toFixed(4)}`)

// //Solution 2:
// function CylinderVolume(radius, height) {
//     this.radius = radius;
//     this.height = height;
//     this.volume = function() {
//       var vol = Math.PI * this.radius * this.radius * this.height;
//       return vol.toFixed(4);
//     };
// }

// var aCylinder = new CylinderVolume(5, 10);
// console.log(aCylinder.volume() + " cubic centimeters.");

// /* -------------------------- 6 ------------------------- */
////6. Write a bubble sort algorithm in JavaScript. Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
////Solution 1:
// function sortArray(arr) {
//   let temp = 0;
//   let x = 0;
//   let flag = false;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j + 1] < arr[j]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr
// }
// console.log(sortArray([6, 4, 0, 3, -2, 1]));
////Solution 2:
// function ex(arr){
//     for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length-1; j++) {
//     if(arr[j] > arr[j+1]){
//     var temp = arr[j];
//     arr[j] = arr[j+1];
//     arr[j+1] = temp;
//     }
//     }
//     }
//     return arr;
//     }
//     console.log(ex([6,4,0, 3,-2,1]))
////Solution 3:
// function bubble(arr){
//     let chek = true;
//     while(chek){
//         chek = false;
//         for(let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i+1]){
//                 chek = true;
//                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
//             }
//         }
//     }
//     return arr;
// }

// console.log( bubble([6,4,0, 3,-2,1]) );    // [ -2, 0, 1, 3, 4, 6 ]
////Solution 4:
// Array.prototype.bubbleSort = function () {
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 0; i < this.length - 1; i++) {
//       if (this[i] > this[i + 1]) {
//         let temp = this[i + 1];
//         this[n + 1] = this[n];
//         this[n] = temp;
//         isSorted = false;
//       }
//     }
//   }
//   return this
// };
////Solution 5:
// Array.prototype.bubbleSort_algo = function()
// {
// var is_sorted = false;
//  while (!is_sorted)
//  {
//     is_sorted = true;
//     for (var n = 0; n < this.length - 1; n++)
//     {
//       if (this[n] > this[n+1]){
//         var x = this[n+1];
//         this[n+1] = this[n];
//         this[n] = x;
//         is_sorted = false;
//       }
//     }
//   }
//   return this;
// };
// console.log([6,4,0, 3,-2,1].bubbleSort_algo());

// /* -------------------------- 7 ------------------------- */
////7. Write a JavaScript program that returns a subset of a string.
////Solution 1:
// function subString(str) {
//   const subStrings = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length+1; j++) {
//       subStrings.push(str.slice(i, j));
//     }
//   }
//   return subStrings;
// }
// console.log(subString('dog'));

////Solution 2:
// String.prototype.sub_String = function () {
//   var subset = [];
//   for (var m = 0; m < this.length; m++) {
//     for (var n = m + 1; n < this.length + 1; n++) {
//       subset.push(this.slice(m, n));
//     }
//   }
//   return subset;
// };

// console.log('dog'.sub_String());

// /* -------------------------- 8 ------------------------- */
//8. Write a JavaScript program to create a clock. Note: The output will come every second.
////Solution 1:
// function my_Clock() {
//   this.cur_date = new Date();
//   this.hours = this.cur_date.getHours();
//   this.minutes = this.cur_date.getMinutes();
//   this.seconds = this.cur_date.getSeconds();
// }
// my_Clock.prototype.run = function () {
//   setInterval(this.update.bind(this), 1000);
// };
// my_Clock.prototype.update = function () {
//   this.updateTime(1);
//   console.log(this.hours + ':' + this.minutes + ':' + this.seconds);
// };
// my_Clock.prototype.updateTime = function (secs) {
//   this.seconds += secs;
//   if (this.seconds >= 60) {
//     this.minutes++;
//     this.seconds = 0;
//   }
//   if (this.minutes >= 60) {
//     this.hours++;
//     this.minutes = 0;
//   }
//   if (this.hours >= 24) {
//     this.hours = 0;
//   }
// };
// var clock = new my_Clock();
// clock.run();

////Solution 2:
// /* -------------------------- 9 ------------------------- */
////9. Write a JavaScript program to calculate circle area and perimeter. Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
// //Solution 1:
// function Cylinder(height, diameter) {
//   this.height = height;
//   this.diameter = diameter;
// }

// Cylinder.prototype.area = function () {
//   let radius = this.diameter / 2;
//   return 2 * Math.PI * radius;
// };

// Cylinder.prototype.perimeter = function () {
//   let radius =this.diameter /2
//   return Math.PI * radius * radius
// }
// var cyl = new Cylinder(7,4)
// console.log(`area = ${cyl.area().toFixed(4)}`)
// console.log(`perimeter = ${cyl.perimeter().toFixed(4)}`)

// //Solution 2:
// function cylinderAreaPerimeter(radius) {
//     this.radius = radius;
//     this.area = function() {
//       return (Math.PI * this.radius * this.radius).toFixed(4);
//     };
//     this.perimeter = function(){
//       return (2 * Math.PI * this.radius).toFixed(4);
//     }
// }
// var aCylinder = new cylinderAreaPerimeter(5, 10);
// console.log(aCylinder)
// console.log(aCylinder.perimeter())
// console.log(aCylinder.area())

// /* -------------------------- 10 ------------------------- */
/////10. Write a JavaScript program to sort an array of JavaScript objects.
////Solution 1:
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
];

function sortObject(array, propertyName) {
  return array.sort((obj1, obj2) => {
    return obj1[propertyName].localeCompare(obj2[propertyName]);
  });
}
console.log(sortObject(library, 'title'));

////Solution 2:
var sort_by = function (field_name, reverse, initial) {
  var key = initial
    ? function (x) {
        return initial(x[field_name]);
      }
    : function (x) {
        return x[field_name];
      };

  reverse = !reverse ? 1 : -1;

  return function (x, y) {
    return (x = key(x)), (y = key(y)), reverse * ((x > y) - (y > x));
  };
};

var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);
