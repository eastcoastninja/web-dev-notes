# Foreword
When you strive to comprehend your code, you create better work and become better at what you do.

# Chapter 1: Into Programming

## Statements
```javascript
let a = 42; // variable
42 // literal variable
```

## Expressions
`2`is a literal value expression
`b` is a variable expression, which means to retrieve its current value
`b * 2` is an arithmetic expression, which means to do the multiplication
`a = b * 2` is an assignment expression, which means to assign the result of the `b * 2` expression to the variable a

## Executing a Program
An interpreter or a compiler is used to translate the code you write into commands a computer can understand.
Some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program is run, which is usually called interpreting the code.
Other languages, the translation is done ahead of time, called compiling the code, so when the program runs later, what's running is actually the already compiled computer instructions ready to go.
It's typically asserted that JavaScript is interpreted, because your JavaScript source code is processed each time it's run. But that's not entirely accurate. The JavaScript engine actually compiles the program on the fly and then immediately runs the compiled code.

## Output
`console.log()`is a function in which the console is an object reference.

## Input 
The most common way to get input is through text boxes which the user can type into and we can use JS to read those values into the program's variables.

## Operators
### Object property access
Objects are values that hold other values at specific named locations called properties. 
`obj.a` means an object value called obj with a property of name a.
Properties can alternatively be accessed as `obj[ "a" ]`
### Equality
`==`( loose-equals ) `===`( strict-equals ) `!=`( loose not-equals ) `!==`( strict not-equals )

## Values & Types
Two different representations for values: **Primitives and Literals**
**6 Primitive data types values: Number, String, Boolean, null, undefined, and Symbol**
Values that are included directly in the source code are called literals. Theses are fixed values, not variables, that you literally provide in your script.
**7 Literal data types are: Array literals, Boolean literals, Floating-point literals, Integers, Object literals, RegExp literals, and String literals**
String literals are surrounded by double qoutes or single quotes.
When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.

## Converting Between Types
If you need to convert a value into a string or vice versa this term is called coercion.
When you try to compare two values that are not already of the same type, which would require implicit coercion. When comparing the string `"99.99"` to the number `99.99` JavaScript will sometimes kick in and implicitly coerce values to the matching types.
It's the same value in two different representations, two different types. You could say they're "loosely equal,"
But using the == is mostly avoided for it's flaws and unexpected bugs. Implicit coercion is the best course to take.

## Code Comments
One of the most important lessons you can learn about writing code is that it's not just for the computer. Code is every bit as much, if not more, for the developer as it is for the compiler. You should strive to write working programs that make sense when examined with good clear variable and function names.
Some guidelines:
Code without comments is suboptimal.
Too many comments (one per line, for example) is probably a sign of poorly written code.
Comments should explain why, not what. They can optionally explain how if that's particularly confusing.

Two types of comments:
```javascript
// This is a single-line comment

/* But this is
       a multiline
             comment.
                      */
```

## Variables
*Static typing* otherwise known as *type enforcement* is cited as a benefit for program correctness by preventing unintended value conversions. *Weak typing* otherwise know as *dynamic typing* allows a variable to hold any type of value at any time. It is typically cited as a benefit for the program flexibility by allowing a single variable to represent a value no matter what form that variable may take during the program's logic flow.
JavaScript uses dynamic typing meaning variables can hold values of any type without any type enforcement. 

```javascript
var amount = 99.99;
Same declaration in Java

// var int amount = 99.99;  // type information int

amount = amount * 2;

// convert amount to a string, and 
// add "$" on the beginning 
amount = "$" + String( amount ); // explicitly coerces the value to a string 
console.log( amount ); // "$199.98"
```

Those that prefer static typing may create a seperate variable to hold the string such as `amountStr = "$199.98"`
The primary purpose of variables is managing program state. State is tracking the changes to values as your program runs. 
*Constants* are when you declare a variable with a value and intend for that value to change throughout the program.
You should declare constants at the top of a program to have one place to go to alter a value if needed. JavaScript variables as constants are usually capitalized with underscores between multiple words.

```javascript
var TAX_RATE = 0.08; // 8% sales tax

var amount = 99.99;

amount = amount * 2;

amount = amount +(amount * TAX_RATE);

console.log( amount );
// 215.9784
console.log( amount.toFixed ( 2 ) ); // to fix rounds to the specified number of decimals and returns a string
// "215.98"
```

const variables can be declared at the top of your code and be used within code blocks.

## Blocks
Block is definded by wrapping more than one statement in a set of curly-braces `{..}` 

## Conditionals 
The if statement requires an expression in between the parentheses `( )` that can evaluate to `true` or `false`
Values that aren't an expected type often coerce to that type. 
JavaScript defines a list of specific values that are considered "falsy" because when coerced to a boolean, they become false -- these include values like 0 and "". Any other value not on the "falsy" list is automatically "truthy" -- when coerced to a boolean they become true. Truthy values include things like 99.99 and "free"
Conditionals appear in other forms than if such as a `switch` statement which can be used as shorthand for a series of `if`..`else` or loops which use a condtional to determine if the loop should continue or stop.

## Loops
A loop includes the test condition as well as a block (typically as `{ .. }`). Each time the loop block executes, that's called an iteration.

For example, the while loop and the do..while loop forms illustrate the concept of repeating a block of statements until a condition no longer evaluates to true:

```javascript
while (numOfCustomers > 0) {
	console.log( "How may I help you?" );

	// help the customer...

	numOfCustomers = numOfCustomers - 1;
}

// versus:

do {
	console.log( "How may I help you?" );

	// help the customer...

	numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);
```
In either form, if the conditional tests as false, the next iteration will not run. That means if the condition is initially false, a while loop will never run, but a do..while loop will run just the first time.

The only practical difference between these loops is whether the conditional is tested before the first iteration (while) or after the first iteration (do..while).

The conditional is tested on each iteration, much as if there is an implied if statement inside the loop.

```javascript
for (var i = 0; i <= 9; i = i + 1) {
	console.log( i );
}
```

* Statement 1 is executed (one time) before the execution of the code block.

* Statement 2 defines the condition for executing the code block.

* Statement 3 is executed (every time) after the code block has been executed.

The for loop has three clauses: the initialization clause (var i=0), the conditional test clause (i <= 9), and the update clause (i = i + 1). So if you're going to do counting with your loop iterations. 
There are other specialized loop forms that are intended to iterate over specific values, such as the properties of an object (see Chapter 2) where the implied conditional test is just whether all the properties have been processed. The "loop until a condition fails" concept holds no matter what the form of the loop.

## Functions

## Scope
