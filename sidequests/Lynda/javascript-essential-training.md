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

# Document Object Model (DOM) 
Browser Object Model (BOM)
Each HTML element is a DOM node 
Head holds all the invisible nodes like (meta,title, link)
Body holds all the visioble nodes in the view port (header, main, footer, and more)
```javascript
// Get the first element matching specified selector(s)
// get the first instance of something
document.querySelector(".main-nav a");

// Get the all element matching specified selector(s)
// get all or a grouping of things to loop over returns an array
document.querySelectorAll(".post-content p");
```
For read only properties on the DOM you can use these methods: add, remove, toggle, contains, and replace; to make changes to the properties (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
# Adding new DOM Elements
1. Create the element
2. Create the text node that goes inside the element
3. Add the text node to the element 
4. Add the element to the DOM tree

(DOM ELEMENT CREATION METHODS)

```javascript
.createElement(); // create an element.
.createTextNode(); // create text node. && do not need if using the newer .append() method
.appendChild(); // Place one child node inside another
```
Example using these methods
```javascript
// gets class featured-image
const FEATURED = document.querySelector(".featured-image");
// gets element inside of featured-image class
const THE_IMAGE = FEATURED.querySelector("img");

// returns the value inside from the alt attribute and stores it
let altText = THE_IMAGE.getAttribute("alt");

let captionElement = document.createElement("figcaption");

// do not need unless supporting older browsers
// creates a node and puts the value from altText inside of the node captionText
// let captionText = document.createTextNode(altText);

// new method not supported by all browsers yet
// appends any string to a specified parent node
captionElement.append(altText);
FEATURED.append(captionElement);

// sets img element attribute alt to an empty string
THE_IMAGE.setAttribute("alt", "");
```

# Add inline CSS to an element 
Add any CSS property to any element via JavaScript using the style attribute  
```javascript
// only returns inline style for this element
// does not include external CSS styles
document.querySelector(".cta a").style 
// if the property name has a - in it the name becomes camelCase
document.querySelector(".cta a").style.backgroundColor = "blue"

// to add multiple style properties you can use the cssText property
document.querySelector(".cta a").style.cssText = "padding: 1em; color: white; background-color: red;"
// this can also be done with the setAttribute method
document.querySelector(".cta a").setAttribute("style", "padding: 1em; color: green; background-color: orange;")
```

Inline CSS overrides whatever CSS is applied to an element
Most case create CSS rules and use JavaScript to manage these classes to apply the rules to the element. 
# Clock Project
```.setInterval()``` repeatly calls a function or executes a code snippet with a fixed delay between each call.
Be careful how you structure you code, look at how the logic reads, and test how different things can impact your end result.

```javascript
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
  console.log(date);
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
  // ((current hour) + (number of minutes added to the clock) / 60 per segment)
  let hrPosition = (hr*(360/12)+(min*(360/60)/12));
  // ((current minute) + (number of seconds added to the clock) / 60 per segment)
  // moves per each second
  let minPosition = (min*(360/60)+(sec*(360/60)/60));
  // sec current of seconds in a minute * (degrees/60seconds <= returns the number of segments)
  // multiply both to show how many segments we want to move
  let secPosition = sec*(360/60);

function runTheClock () {

  // commenting this out and inserting the hrPostion, minPosition, and secPosition will give an odd animation

  // adds an extra second to remove animation
  hrPosition = hrPosition+(3/360) // <= shorthand (30/3600)
  // one sixtienth of the degrees needed 
  minPosition = minPosition+(6/60); // <= shorthand (1/60)*6
  // number of degrees need to display one additional second
  // 360 degrees / 60 seconds = 6 degrees
  secPosition = secPosition+6; 

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

let interval = setInterval(runTheClock, 1000);
```

# Events
Event handler
1. Identify the DOM node the event will be attached to for 
2. Identify the event you to detect, and bind that to the DOM node 
3. Create the function that is trigger when the event is fires.

Typical Events
Browser level events (load, error, online/offline, window resize, scroll ect.)
DOM-level events (mouse events - (click, mouseover, drag, drop), focus, blur, reset/submit, ect.)
*Any event the browser reacts to is an event you can hook into and modify with JavaScript*

```javascript
const  CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");
// We can catch the event attribute in the object that is trigger using passing e for event object
function reveal (e) {
  e.preventDefault();
  CTA.classList.toggle("hide");
  ALERT.classList.toggle("hide");
}
// do not need to call since the event will call when the action is performed
CTA.onclick = reveal;
```

Multiple Event listeners can be attached to a single event or browser level events

Event handlers can only be attached to one event.
```javascript
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// multiple events can be stacked to the same interaction

CTA.addEventListener('click', reveal, false);
CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);
```
An event listener will constanly listen for events and one is triggered it is runs again and again 
# Mouse -Tracker
JS
```javascript
const AREA = document.body;
const CIRCLE = document.querySelector('.circle');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
```
HMTL & CSS
```html
<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>An empty page</title>
    <script src="JS/tracker-script.js" async></script>
    <style>
    body {
        width: 100vw;
        height: 100vh;
    }
    .circle {
        position: absolute;
        top: 1px;
        width: 50px;
        height: 50px;
        color: transparent;
        border: 2px solid red;
        border-radius: 50%;
    }
    </style>
</head>

<body>
    <div class="circle"></div>
</body>

</html>
```
*How to pass in arguments in a regular function*
```javascript
function reveal (e, current) {
  e.preventDefault();
  
  // current refers to the clicked object
  current.innerHTML == "Book Now!" ? CTA.innerHTML =  "Ooops!" : CTA.innerHTML = "Book Now!";
  ALERT.classList.toggle("hide");
}
// monitor click event, bind to reveal function, bind to the most specific node in this case the anchor or the least specific document which is set to true
// last parameter is only relevant when events are piled up one on top of another
// this refers to the object that was clicked the actual linke CTA and runs the function
// e (event object) must be pass downed from the original function
CTA.addEventListener("click", function(e){reveal(e, this);}, false);
CTA.addEventListener("click", function(){ console.log("the button was click!");}, false);
```

# 

# 

# 

# 

# 

# 

# 




















    