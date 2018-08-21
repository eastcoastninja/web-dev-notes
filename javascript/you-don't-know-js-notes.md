# Foreword
When you strive to comprehend your code, you create better work and become better at what you do.

# Chapter 1: Into Programming

## Statements
```js
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
`console.log` log is a function in which the console is an object reference.

## Input 
The most common way to get input is through text boxes which the user can type into and we can use JS to read those values into the program's variables.

## Operators
### Object property access
Objects are values that hold other values at specific named locations called properties. 
`obj.a` means an object value called obj with a property of name a.
Properties can alternatively be accessed as `obj["a"]`
### Equality
`==`(loose-equals) `===`(strict-equals) `!=`(loose not-equals) `!==`(strict not-equals)

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
`js// This is a single-line comment`

```js
// This is a single-line comment

/* But this is
       a multiline
             comment.
                      */
```

## Variables
