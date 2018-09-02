We want to get you as quickly as possible to the point where you can
write useful programs, and to do that we have to concentrate on the basics: variables and constants, arithmetic, control flow, functions, and the rudiments of input and output

```c
#include <stdio.h>
int main()
{
printf("hello, world");
printf("!!!\n");
}
```
in terminal a c program use the command ```cc name.c``` to compile the code and to run use command ```./a.out``` code above prints hello, world!!!
a program begins executing at the beginning of main. This means that every program must have a main somewhere.
main will usually call other functions to help perform its job, some that you wrote, and others from libraries that are provided for you. The first line of the program,
```#include <stdio.h>```
tells the compiler to include information about the standard input/output library; the line
appears at the beginning of many C source files.
One method of communicating data between functions is for the calling function to provide a
list of values, called arguments, to the function it calls.
An escape sequence like \n provides a general and extensible mechanism for representing hard-to-type or invisible characters.
The range of both int and float depends on the machine you are using; 16-bits ints, which lie between -32768 and +32767, are common, as are 32-bit ints. A float number is typically a 32-bit quantity, with at least six significant digits and magnitude generally between about 10-38 and 1038.
indentation emphasizes the logical structure of the program.
proper indentation and spacing are critical in making programs easy for people to read.
recommend writing only one statement per
line, and using blanks around operators to clarify grouping.
in C, as in many other languages, integer division truncates: any fractional part is discarded.
printf is a general-purpose output formatting function Its first argument is a string of characters to be printed, with each % indicating where one of the other (second, third, ...) arguments is to be substituted, and in what form it is to be printed. For instance, %d specifies an integer argument,
printf is just a useful function from the standard library of functions that are normally accessible to C programs.

```printf("%3.0f %6.1f\n", fahr, celsius); */ 6 characters wide to left.1 digit after the decimal point*/```

A decimal point in a constant indicates that it is floating point so 5.0/9.0 is not truncated because it is the ratio of two floating-point values.
If an arithmetic operator has one floating-point operand and one integer operand, however, the integer will be converted to floating point before the operation is done.
writing
floating-point constants with explicit decimal points even when they have integral values emphasizes their floating-point nature for human readers.

# 1.3 The for statement
