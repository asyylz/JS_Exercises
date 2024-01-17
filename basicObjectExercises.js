'use strict';
/* ------------------------------------------------------ */
/*    JavaScript Object - Exercises, Practice, Solution   */
/* ------------------------------------------------------ */

/* -------------------------- 1 ------------------------- */
1. Write a JavaScript program to list the properties of a JavaScript object.
//Solution 1:
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
function listOfProperties (obj) {
    const output = Object.keys(obj).join(', ')
return output
}
console.log(listOfProperties(student))

//Solution 2:
function _keys(obj)
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj)
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

/* -------------------------- 2 ------------------------- */
//2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
//Solution 1:
const student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};
console.log(student)
delete student.rollno
console.log(student)

/* -------------------------- 3 ------------------------- */
//3. Write a JavaScript program to get the length of a JavaScript object.
//Solution 1:
console.log(Object.values(student).length); ////or keys

//Solution 2:
Object.objsize = function (myObj) {
  let oSize = 0,
    key;
    for(key in myObj) {
        if(myObj.hasOwnProperty(key))
        oSize++

    }
    return oSize
};

let objsize = Object.objsize(student)
console.log('Size of the current object: ' + objsize)

/* -------------------------- 4 ------------------------- */
//4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
//Solution 1:
var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

library.map(element => {
    if(element.readingStatus) {
        console.log(`Already read ${element.title}`)
    }else {
        console.log((`You still need to read ${element.title}`))
    }
})

//Solution 2:
for (var i = 0; i < library.length; i++) {
  var book = "'" + library[i].title + "'" + ' by ' + library[i].author + '.';
  if (library[i].readingStatus) {
    console.log('Already read ' + book);
  } else {
    console.log('You still need to read ' + book);
  }
}

/* -------------------------- 5 ------------------------- */
//5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
//Solution 1:
function Cylinder(height, diameter) {
  this.height = height;
  this.diameter = diameter;
}

Cylinder.prototype.Volume = function () {
  let radius = this.diameter / 2;
  return this.height * Math.PI * radius * radius;
};
var cyl = new Cylinder(7,4)
console.log(`volume = ${cyl.Volume().toFixed(4)}`)

//Solution 2:
function CylinderVolume(radius, height) {
    this.radius = radius;
    this.height = height;
    this.volume = function() {
      var vol = Math.PI * this.radius * this.radius * this.height;
      return vol.toFixed(4);
    };
}

var aCylinder = new CylinderVolume(5, 10);
console.log(aCylinder.volume() + " cubic centimeters."); 