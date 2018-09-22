# Intro 
The moral of this story is that the same program can be expressed in both
long and short, unreadable and readable ways. The first version of the program
was extremely obscure, whereas this last one is almost English

Try to not just glance over the examples—read
them attentively and understand them.

The same goes for
the exercises. Don’t assume you understand them until you’ve actually written
a working solution.

I hope, you’ll be tempted to experiment and go beyond
the exercises.

# Chapter 1
It works the same way
as a decimal number, but instead of 10 different digits, you have only 2, and
the weight of each increases by a factor of 2 from right to left.

## Values
A typical modern computer has more
than 30 billion bits in its volatile data storage (working memory). Nonvolatile
storage (the hard disk or equivalent) tends to have yet a few orders of magnitude
more.
Values - to be able to work with such quantities of bits without getting lost, we must separate them into chunks that represent pieces of information. 

## Numbers
JavaScript uses a fixed number of bits, 64 of them, to store a single number
value. There are only so many patterns you can make with 64 bits, which means
that the number of different numbers that can be represented is limited. With
N decimal digits, you can represent 10N numbers. Similarly, given 64 binary
digits, you can represent 264 different numbers, which is about 18 quintillion
(an 18 with 18 zeros after it). That’s a lot.
Overflow - to end up with a number that did not fit into the given
number of bits.
For very big or very small numbers, you may also use scientific notation by
adding an e (for exponent), followed by the exponent of the number.
many numbers lose some precision when only 64 bits are available to store them.
treat fractional digital numbers as approximations, not as precise values.

## Arithmetic
When operators appear together without parentheses, the order in which
they are applied is determined by the precedence of the operators.
When multiple operators with the same precedence appear next to each other 
they are applied left to right
The remainder operator’s precedence is the same as that of
multiplication and division.

## Strings
whenever a backslash (\) is found inside quoted text, it
indicates that the character after it has a special meaning. This is called
escaping the character.
Strings, too, have to be modeled as a series of bits to be able to exist inside
the computer. The way JavaScript does this is based on the Unicode standard.
This standard assigns a number to virtually every character you would ever
need
When you write something inside in a template literal, its result will be ${} computed, converted to a string, and included at that position.

## Unary Opertators
Operators that use two values are called binary operators, while those that
take one are called unary operators.

## Comparison 
When comparing strings, JavaScript goes over the
characters from left to right, comparing the Unicode codes one by one.

## Logical Operators
 ```||``` the lowest precedence, then comes ```&&```, then the comparison operators ```(>, ==, and so on)```, and then the rest. 
ternary operator The value on the left of the question mark “picks” which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the value on the right.

## Empty Values
the absence of a meaningful value
The difference in meaning between ```undefined``` and ```null``` it doesn’t matter most of the time

## Automatic Type Conversion 
When an operator is applied to the “wrong” type of value, JavaScript will
quietly convert that value to the type it needs this is ```type coercion```
When something that doesn’t map to a number in an obvious way you get the value ```NaN```.
When you want to test whether a value has a real value instead of ```null``` or ```undefined```, you can compare it to ```null ==  (or !=)``` operator. 
When you do not want any type conversionsto happen, there are two additional operators: ```!==```and ```===```

## Short-Circuiting of Logical Operators
The ```||``` operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise
We can use this functionality as a way to fall back on a default value. If you
have a value that might be empty, you can put ```||``` after it with a replacement
value. If the initial value can be converted to false, you’ll get the replacement
instead. The rules for converting strings and numbers to Boolean values state
that 0, NaN, and the empty string ("") count as false, while all the other values
count as true. So ```0 || -1``` produces -1, and ```"" || "!?"``` yields ```"!?"```. The ``&&``operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise
it returns the value on its right. Another important property of these two operators is that the part to their right is evaluated only when necessary. (short-circuit evaluation)

# Chapter 2

## Expressions and Statements
A fragment of code that produces a value is called an expression
Expressions can contain other expressions
This allows us to build expressions that describe arbitrarily complex computations.
If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence.

## Bindings
indicates let that this sentence is going to define a binding. 
You should imagine bindings as tentacles, rather than boxes. They do not contain values; they grasp them

## Binding Names
the name must not start with a digit.
A binding name may include dollar signs ```($)``` or underscores ```(_)``` but no other punctuation or special characters.
may not be used as binding names. (keywords and reserved words)

## The Environment
The collection of bindings and their values that exist at a given time is called the environment.

## Functions 
A function is a piece of program wrapped in a value.
Values given to functions are called arguments.
## Return Values
Showing a dialog box or writing text to the screen is a side effect
Functions may also produce values
When a function produces a value, it is said to return that value.

## Control Flow
When your program contains more than one statement, the statements are
executed as if they are a story, from top to bottom.
```let theNumber = Number(prompt("Pick a number"));```
The function Number converts a value to a number.
functions called String and Boolean convert values to those
types.

## Conditional Execution
a branching road, where the program takes the proper branch based on the situation at hand. This is called **conditional execution**.
we want some code to be executed if, and only if, a certain condition
holds.
```if (!Number.isNaN(theNumber))```
“unless theNumber is not-a-number, do this”.

## While && do While Loops
Looping control flow allows us to go back to some point in the program where we were before and repeat it with our current program state.
while is followed by an expression The loop keeps entering that statement as long as the expression produces a value that gives true
when converted to Boolean. 

*it is a good idea to get used to counting from 0*
a do loop always executes its body at least once, and it starts testing
whether it should stop only after that first execution.
Applying the ```!``` operator will convert a value to Boolean type before negating it, and all strings except ```""``` convert to true.

## Indenting Code
I like to use two spaces for every open block, but tastes differ—some people use four spaces, and some people use tab characters.

## For Loops
the first semicolon initializes the loop, usually by defining a binding.
The second part is the expression that checks whether the loop must continue.
The final part updates the state of the loop after every iteration.

## Breaking out of a Loop
There is a special statement called that has the effect of immediately break jumping out of the enclosing loop.
Using the remainder (%) operator is an easy way to test whether a number
is divisible by another number. If it is, the remainder of their division is zero.
When continue is encountered in a loop body, control jumps out of
the body and continues with the loop’s next iteration.

## Dispatching on a value with switch
The program will start executing at the label that corresponds to the value
that switch was given, or at default if no matching value is found.

## Summary
Statements tend to contain expressions, which themselves can be built out of smaller expressions.
You can introduce disturbances in the flow of control by using conditional (if, else, and switch) and looping (while, do, and for) statements.
Bindings can be used to file pieces of data under a name, and they are useful
for tracking state in your program.
JavaScript systems always put a number of useful standard
bindings into your environment.

### Exercises
See file eloquent-ex-ch2.js

# Chapter 3

## Functions
It gives us a way to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other.

## Defining a Function
A function definition is a regular binding where the value of the binding is
a function.
A return statement determines the value the function returns.
it immediately jumps out of the current function and gives the returned value to the code that called the function.
Parameters to a function behave like regular bindings, but their initial values
are given by the caller of the function, not the code in the function itself.
Functions that don’t have a return statement at all, such as those with console.logs(), return undefined.

## Binding and Scope
Each binding has a scope, which is the part of the program in which the binding
is visible.
bindings defined outside of any function or block, the scope is
the whole program are called global.
bindings created for function parameters or declared inside a function
can be referenced only in that function, so they are known as local bindings.
Every time the function is called, new instances of these bindings are created.
Bindings declared with let and const are in fact local to the block that they
are declared in
In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the var keyword, are visible throughout the global scope, if they are not in a function.
Each scope can “look out” into the scope around it
The exception is when multiple bindings have the same name—in that case, code can see only the innermost one.

## Nested Scope
Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality.
Each local scope can also see all the local scopes that
contain it, and all scopes can see the global scope. This approach to binding
visibility is called lexical scoping.

## Functions as Values
A function binding usually simply acts as a name for a specific piece of the
program.
A function value can do all the things that other
values can do—you can use it in arbitrary expressions, not just call it. It is
possible to store a function value in a new binding, pass it as an argument to a function, and so on.
a binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value..
```javascript
let launchMissiles = function() {
missileSystem.launch("now");
};
if (safeMode) {
launchMissiles = function() {/* do nothing */};
}
```

## Declaration Notation
```javascript
function square(x) {
return x * x;
}
```
This is a function declaration. The statement defines the binding square and points it at the given function.
Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offer the freedom to order code in a way that seems meaningful, without worrying about having to define all functions before they are used.

## Arrow Functions
There’s a third notation for functions the keyword, it uses an arrow (=>) function
The arrow comes after the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”.
When there is only one parameter name, you can omit the parentheses around the parameter list. If the body is a single expression, rather than a block in braces, that expression will be returned from the function.
```javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
```
When an arrow function has no parameters at all, its parameter list is just
an empty set of parentheses.
Arrow functions were added in 2015, mostly to make it possible to write small function expressions in a less verbose way.

## The Call Stack
```javascript
function greet(who) {
	console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
```