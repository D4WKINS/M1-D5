<+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+>
<+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+>
<+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+>

`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 METHODS 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`
       
`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ARRAYS 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`

// To add/remove elements:
Array.shift()               //extracts an item from the beginning
Array.unshift()             //adds items to the beginning 
Array.push()                //adds items to the end 
Array.pop()                 //extracts an item from the end 
Array.concat()              //adds/combines arrays to give a new array
Array.splice(pos, deleteThis, ...items) //at index pos deletes deleteThis elements and inserts items 
Array.slice(start, end) //gives new array, copies elements from index start till end (not inclusive) into it 
// To search among elements:
Array.indexOf(item, pos)    //look for item starting from position pos, return the index or -1 if not found 
Array.lastIndexOf(item, pos)//look for item starting from position pos, return the index or -1 if not found 
Array.includes(value)       //returns true if the array has value, otherwise false
Array.find(func)            //filter elements through the function, return first value that make it return true
Array.filter(func)          //filter elements through the function, return all values that make it return true
Array.findIndex()           //is like find, but returns the index instead of a value
Array.valueOf()             //Returns the primitive value of the specified object
Array,isArray()             //returns true if an array
// other stuff:
Array.forEach(func)         //executes a provided function once for each array element// arr.forEach(item => {console.log(item)})
Array.map(func)             //creates a new array from results of calling func for every element
Array.reduce(func, initial) //executes a provided function for each value of the array to give a single array back. converts an array of objects into a single object
Array.reverse()             //reverses the array in-place, then returns it
Array.join()                //turns array into string
Array.sort()                //sorts elements alphabetically
Array.some(func)            //tests whether at least one element in the array passes the test implemented by the provided function
Array.every()               //tests whether at every element in the array passes the test implemented by the provided function
Array.from(array, func)     //creates an array from elements then allows you to execute a map() function on each element of the array being created
`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 STRINGS 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`

String.charAt()         //Returns a character at a specified position inside a string
String.charCodeAt()     //Gives you the Unicode of a character at that position
String.concat()         //Concatenates (joins) two or more strings into one
String.fromCharCode()   //Returns a string created from the specified sequence of UTF-16 code units
String.indexOf()        //Provides the position of the first occurrence of a specified text within a string
String.lastIndexOf()    //Same as indexOf() but with the last occurrence, searching backward
String.match()          //Retrieves the matches of a string against a search pattern
String.replace()        //Find and replace specified text in a string
String.search()         //Executes a search for a matching text and returns its position
String.slice()          //Extracts a section of a string and returns it as a new string
String.split()          //Splits a string object into an array of strings at a specified position
String.substr()         //Similar to slice() but extracts a substring depending on a specified number of characters
String.substring()      //Also similar to slice() but can’t accept negative indices
String.toLowerCase()    //Convert strings to lower case
String.toUpperCase()    //Convert strings to upper case
String.valueOf()        //Returns the primitive value (that has no properties or methods) of a string object
String.length()         // returns length of the string
`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 OBJECTS 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`

Object.keys()   //creates an array containing the keys of an object
Object.values() //creates an array containing the values of an object
Object.freeze() //prevents properties from being added, removed or modified from an object
Object.seal()   //prevents new properties from being added to an object, but allows the modification of existing properties
Object.create() //method is used to create a new object and link it to the prototype of an existing object
Object.assign() //combines two objects into one new object

`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 MATH 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`

var pi = Math.PI        //3.141592653589793`
Math.round(4.4)         // = 4 - rounded
Math.round(4.5)         // = 5
Math.pow(2,8)           // = 256 - 2 to the power of 8
Math.sqrt(49)           // = 7 - square root 
Math.abs(-3.14)         // = 3.14 - absolute, positive value
Math.ceil(3.14)         // = 4 - rounded up
Math.floor(3.99)        // = 3 - rounded down
Math.sin(0)             // = 0 - sine
Math.cos(Math.PI)       // OTHERS: tan,atan,asin,acos,
Math.max(0, 3, -2, 2)   //= 3 - the highest value
Math.log(1)             // = 0 natural logarithm 
Math.exp(1)             // = 2.7182pow(E,x)
Math.random()           //random number between 0 and 1
Math.floor(Math.random() * 5) + 1;  //random integer, from 1 to 5

`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 DATES 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`

let d = new Date()
a = d.getDay()           `` //getting the weekday
let d = new Date()
d.setDate(d.getDate() + 7); //adds a week to a date

Date.getDate()          //day as a number (1-31)
Date.getDay()           //weekday as a number (0-6)
Date.getFullYear()      //four digit year (yyyy)
Date.getHours()         //hour (0-23)
Date.getMilliseconds()  //milliseconds (0-999)
Date.getMinutes()       //minutes (0-59)
Date.getMonth()         //month (0-11)
Date.getSeconds()       //seconds (0-59)
Date.getTime()          //milliseconds since 1970
Date.setDate()          //day as a number (1-31)
Date.setFullYear()      //year (optionally month and day)
Date.setHours()         //hour (0-23)
Date.setMilliseconds()  //milliseconds (0-999)
Date.setMinutes()       //minutes (0-59)
Date.setMonth()         //month (0-11)
Date.setSeconds()       //seconds (0-59)
Date.setTime()          //milliseconds since 1970)

// Additionally:

parseInt(`3.5 days`)    //returns the first number: 3
parseFloat(`3.5 days`)  //returns 3.5
toString()              //Returns a number as a string
toExponential()         //Returns the string with a rounded number written as exponential notation
toFixed()               //Returns the string of a number with a specified number of decimals
toPrecision()           //String of a number written with a specified length
valueOf()               //Returns a number as a number
`${string}`             //returns variable inside string if backticks are used

5 == "5"         `is true`
5 === "5"        `is false`
"" == false      `is true`
"" === false     `is false`
0 == false       `is true`
0 === false      `is false`

a * (b + c)             // grouping
person.age              // member
person[age]             // member
!(a == b)               // logical not
a != b                  // not equal
typeof a                // type (number, object, function...)
x << 2 , x >> 3         // minary shifting
a = b                   // assignment
a == b                  // equals
a != b                  // unequal
a === b                 // strict equal
a !== b                 // strict unequal
a < b , a > b           // less and greater than
a <= b , a >= b         // less or equal, greater or eq
a += b                  // a = a + b (works with - * %...)
a && b                  // logical and
a || b                  // logical or
?                       // ternary operator , you can use :null to return no falsy
()=>{if}                // arrow function for shorthand function

// var,let,const      const uses least memory so should be used if possible


<+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+>
<+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+>
<+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+><+>
//credit to https://htmlcheatsheet.com/js/ and https://javascript.info/