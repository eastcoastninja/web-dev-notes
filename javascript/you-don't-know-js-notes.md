# Foreword
When you strive to comprehend your code, you create better work and become better at what you do.

# Chapter 1: Into Programming

## Statements
```let a = 42; // variable```
```42 // literal variable```

## Expressions
```2``` is a literal value expression
```b``` is a variable expression, which means to retrieve its current value
```b * 2``` is an arithmetic expression, which means to do the multiplication
```a = b * 2``` is an assignment expression, which means to assign the result of the ```b * 2``` expression to the variable a

## Executing a Program
An interpreter or a compiler is used to translate the code you write into commands a computer can understand.
Some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program is run, which is usually called interpreting the code.
Other languages, the translation is done ahead of time, called compiling the code, so when the program runs later, what's running is actually the already compiled computer instructions ready to go.
It's typically asserted that JavaScript is interpreted, because your JavaScript source code is processed each time it's run. But that's not entirely accurate. The JavaScript engine actually compiles the program on the fly and then immediately runs the compiled code.

## Output
```console.log()``` log is a function in which the console is an object reference.

## Input 
The most common way to get input is through text boxes which the user can type into and we can use JS to read those values into the program's variables.

## Operators
### Object property access
Objects are values that hold other values at specific named locations called properties. 
```obj.a``` means an object value called obj with a property of name a.
Properties can alternatively be accessed as ```obj["a"]```
### Equality
```==```(loose-equals) ```===```(strict-equals) ```!=```(loose not-equals) ```!==```(strict not-equals)

## Values & Types
