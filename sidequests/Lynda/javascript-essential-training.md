# Separation of Concerns
HTML Markup: Content Layer
CSS Rules: Presentation Layer
JavaScript: Presentation (Interactive) Layer

# Java vs JavaScript
Java: a programming language used to write apps for computers and other devices
JavaScipt: a scripting language used to interact with content in a web browser and more recently in other places. (Interactive websites)

ECMAScript 5.1 outdated
ES6 Spotty support
*When running ES6 need to run through a transpiler like Babel in order for the code to be translated back to regular JavaScript.*
ES7 in development no real support(need to use babel)

# jQuery
Library of JS functions 
Introduces CSS-like syntax and several visual and UI Enhancements
Simplifies the use of JS in websites
Abstraction of the core language

# JavaScript Frameworks
AngularJS, React, Vue.js are front-end application frameworks used to simplify the building of advanced web-based apps.

# Runtime Environment
Node.js used to run advanced operations and applications on servers and computers using js

# Requesting list of items
What is return is a list starting at 0 
```javascript
// use date.getMonth()+1 since months are represent from 0 to 11
document.body.innerHTML = 
  "<h1>The date today is " 
  + (date.getMonth()+1) 
  + "/" + date.getDate() 
  + "/" 
  + date.getFullYear() 
  + "</h1>";
```

# Script Placement
If you want the javascript to run before the contents of the page are rendered add it to the head. If you want it to run after the page is rendered add it after the body.
*Since Javascript may change HTML and/or CSS anytime a broswer encounters a JavaScript file reference it stops the rendering until the script file is downloaded and executed.*
Know as *JavaScript render blocking* and it can slow down the performance of a site significantly. 

Emerging protocal for the web HTTP/2 partially solves by allowing the browser to download multiple assets in parallel. But if the file is referenced in the header render blocking will still happen just taking less time. 

# JavaScript loading methods
*Right away loading* (js render blocking)
  html will parse until it reaches a reference to javascript
    js is loaded
      js is execute
        html continues parsing 

*Asynchronous loading (loads along side with html)*
```<script src="script.js" async></script>```
the js file will be downloaded along side the html and render blocking only kicks in when the script is executed

*Deferred loading (until everything else is loaded)*
```<script src="script.js" defer></script>```
js loading and execution will only happen when everything else is loaded.

# Good Practice 
1. JavaScript is case sensitive
2. use camelCase 
    Variable start with lowercase letter
    Objects and Classes start with an uppercase letter
    Constant are in all caps with multi-words separated by a _
3. JS does not care about whitespace but we should
4. End each statement with a semicolon to keep your code structured 
5. Use Comments Liberally
Anytime you declare a variable use the var or let prefix so it is not defined in the global scope

# Types
using ```typeof()``` is useful for trying to figure out the value of a variable
```javascript
var negInteger = -3.14159265359;
var escQuote = "Quotes can also be \"escaped\".";
var theSunIsWarm = true;
var emptyInside = null;
var justAnotherVariable; // undefined

// Try this in your console:
console.log(typeof insertVariableName);
```
# Incrementing 
a = 1
a++ post-increment shows 1 but value of a is 2
++a pre-increment shows 2 and value of a is 2

# Conditional
```javascript
// all return false if a is true
if( a == false ) {} // longhand
if( a != true ) {} // reverse psychology
if( !a ) {} // Shorthand. Literally "NOT a"
```
# XOR
Either a or b are true, but not both are true.
Must nest a conditional statement inside a conditional statement
```if ( ( a == b || c == d ) && ( ( a == b) != ( c == d ) ) ) {}```

# Ternary Operator
```
// ? = if : = else
// condition ? true : false  
a == b ? console.log("Match") : console.log("No match");
```

# Array Properties and Methods
Property - meta information about the object
*Methods*
use ```arr.slice()``` to make a copy of an array or to copy elements 
to it
```arr.join()``` returns a string adding string with something or nothing inside will include a separator ```" "```   

More methods here https://sdras.github.io/array-explorer/

# Functions and Objects
Parameters are defined when creating a function.
Arguments are used when a function is called.
Script is a list of steps to be completed in a specific order 
Three Types of functions
1. Named functions executed when called by name
2. Anonymous fucntions run once they are triggered by a specific event (must be tied to something a variable or event or something similar to run)
3. Immediately invoked function expressions run the moment the browser encounters them.

```javascript
// Regular function, called explicitly by name:
function multiply() {
    var result = 3 * 4;
    console.log("3 multiplied by 4 is ", result);
}
multiply();

// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
var divided = function() {
    var result = 3 / 4;
    console.log("3 divided by 4 is ", result);
}
divided();

// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function() {
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is ", result);
}())
```
*returned values are either stored in a variable or immediately used in another function*

```javascript
function findBiggestFraction (a, b) {
  let result;
  a > b ? result = ["firstFraction", a] : result = ["secondFraction", b];
  return result;
}

let firstFraction = 3/4;
let secondFraction = 5/7;

let fractionResult = findBiggestFraction(firstFraction, secondFraction);
console.log(`First fraction result ${firstFraction}`);
console.log(`Second fraction result ${secondFraction.toFixed(2)}`);
// fractionResult = result and result is an array which contains a string and number value
console.log(`Fraction ${fractionResult[0]} with a value of ${fractionResult[1]} is the biggest`);
console.log(fractionResult);
```

```javascript
// anonymous function
let a = 3/4;
let b = 5/7;

let theBiggest = function (a, b) {
  let result;
  a > b ? result = ["a", a.toFixed(4)] : result = ["b", b.toFixed(4)];
  // console.log(result);
  return result;
}
console.log(theBiggest(7/9, 13/25));
```
When hooking anonymous functions to events you want the function to be returned

When using an immediately invoked function wrap the function in () followed by () at the end to call it with arguments if any are needed.
```javascript
var firstFraction = 3/4;
var secondFraction = 5/7;

let theBiggest = (function (a, b) {
  let result;
  a > b ? result = ["a", a.toFixed(3)] : result = ["b", b.toFixed(3)];
  // console.log(result);
  return result;
})(firstFraction, secondFraction)

console.log(theBiggest);
```
External variables must be definded before immediately invoked functions.

Benefits?
Runs immediately where located in the code and produces a direct output.
On first run it is unaffected by code that is runned further down in the script.
Works great for quickly populating a variable or argument in a larger function or property in an object often hooked to event listeners for an immediate output.

# Scope
Two types: 
Global 
Local
  return values are used to package up the value inside a local variable to be used outside the local scope.
  Local variable only use memory while the script is running. They are used and discarded when we leave the scope. 

# Variables
const - constant (can't be changed once defined)
let - block scope variable (smaller scope than var) its scope is where it is defined plus it's children. So if defined in the root it can be used in functions and root.  

# Objects
Used when you want to create a cluster of related data and maybe perform actions or operations on that data.
Use object constructor for creating multiple course else use object declartion to create one course.

Allow to combine methods and properties in a more structured way.
```javascript
// creates one object
var course = {
  title: "JSE",
  instructor: "Guy",
  level: 1,
  published: true,
  views: 1,
  updateViews: function () {
    return ++course.views;
  }
}

console.log(course.updateViews());

// used for creating an object constructor for multiple objects
// create an array that intializes two new objects
let courses = [
  new Course("JSE", "Guy", 1, true, 1),
  new Course("CS101", "Julian", 1, true, 1),
]

function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  };
}
console.log(courses);
console.log(courses[0].instructor, courses[1].updateViews());
```

# Dot Notation vs Bracket Notation
Dot notation works well properly named properties
Bracket notation works well when we might have to convert the property name into a string.

```javascript
// bracket and dot notation can be mixed together
function Course(title, instructor, level, published, views) {
  this["title"] = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  };
```

# Closures
Closure is a function inside a function that relies on variables in the outside function to work.

```javascript
function giveMeEms(pixels) {
  var baseValue = 16;

  function doTheMath() {
    return pixels/baseValue;
  }
  return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log(`Small size: ${smallSize()}`);
console.log(`Medium size: ${mediumSize()}`);
console.log(`Large size: ${largeSize()}`);
console.log(`Extra-Large size: ${xlargeSize()}`);
```


















    