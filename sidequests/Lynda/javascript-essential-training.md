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

1. JavaScript is case sensitive
2. use camelCase 
    Variable start with lowercase letter
    Objects and Classes start with an uppercase letter
    Constant are in all caps with multi-words separated by a _
3. JS does not care about whitespace but we should
4. End each statement with a semicolon to keep your code structured

