# Week 1 Notes
C builds a foundation for many other languages
Must tell the computer what type of variable you are inputting into your variable.
# for loops
for loops check if the boolean expression is true before running the code block inside. After the code block runs the variable changes via i++, i-- , or ect. Then it will check the second expression only the boolean expression to see if it still evalutates to true until it is no longer valid.
```c
for(int i = 0; i < 50; i++) {
	printf("hello world\n");
}
```
# CS50 IDE
Machines only understand 0's and 1's they do not understand code. We must translate (compile) the source code to machine code (0's and 1's) via a compiler for the computer to interpret it.
IDE(Intergrated development environment)
In most industry it is common to have uniform development environments
to compile in the cs50 ide
use the command ```clang name.c```
the file that is output is the machine code file a.out
to run it ```./a.out``` . look in the current directory / is use to seperate folder names.
any changes made to the file must be recompile to update the machine code
CLI (command line interface)
```clang -o hello hello.c``` command line arguments -output a file called hello and take as input a file called hello.c
to run the outputted file use ```./filename```
in the cs50 ide any green file is an executable that can run with the ./name
the white files are text files
With values you need to specify what type of value you will be using
cs50 ```make filename``` same as ```clang -o```
creates an executable filename
The first error maybe the most important since the other errors maybe dependencies of the first error
```#include <cs50.h>``` adds the cs50 library to get input
```#include <stdio.h>``` adds the standardio library to print output
.h file is a header file it's a summary of functionality
# Design & Logic
float allow you to use 32 bits to represent a number
double allow you to use 64 bits to represent a number
Single ```''``` are meant for single characters  
Design is if you did a good job implementing your code equivalent to someone evaluating an essay
Style, or the indentation, comments, and variable naming, is yet another aspect.
We use the if, else if, and else keywords to denote the forks in the road, based on Boolean expressions. else simply captures all the cases that haven’t fit into a previous condition.
integers discard anything after the decimal point, if we try to store some number with a decimal into it.
# Switch
A switch is another construct in C where the value of a variable is compared to various cases, and the indented code beneath a matching case will be executed.
Notice that we use break to indicate that the switch should end. Otherwise, once a matching case is found, all of the code below it will run.

```c
// Return value

#include <cs50.h>
#include <stdio.h>

int square(int n); // prototype

int main(void)
{
    int x = get_int("x: ");
    printf("%i\n", square(x));
}

// Return square of n
int square(int n)
{
    return n * n;
}
```
Line 50 declares the prototype, or definition, of a function we will write, called square. The int before square indicate that square will return an int, and int n inside the parentheses indicate that square takes in an int that it will refer to as n. We need a prototype because our compiler for C reads in files from top to bottom, and the main function calls square before it’s defined unless we have that line above it.

Line 55 calls square, passing in x, and the return value is not stored but passed directly to printf, which will substitute it in the string and print it to the screen. We could define a variable like int squaredvalue above, and then substitute it in, but since we are only using it once after we create it, it’s considered better design to include it directly where we use it.

# Overflow
In our computers, the number of bytes in our memory is finite. As a result, we can store only so much data. In C, each type of data has a fixed number of bytes allocated to instances of it. For example, every ```int``` has only 4 bytes in the CS50 IDE.
## Bits & Bytes
In general: add 1 bit, double the number of patterns
Mathematically: n bits yields 2n patterns (2 to the nth power)
8 bits - 256 - one byte (2^8)
One Byte - 256 Patterns (demo)
1 byte is group of 8 bits
8 bits can make 256 different patterns
How to use the 256 patterns?
How to store a number in a byte?
Start with 0, go up, one pattern per number, until run out of patterns
0, 1, 2, 3, 4, 5, ... 254, 255
One byte can hold a number between 0 and 255
i.e. with 256 different patterns, we can store a number in the range 0..255
Really good for storing characters/letters.
Bytes
"Byte" - unit of information storage
A document, an image, a movie .. how many bytes?
1 byte is enough to hold about 1 typed character, e.g. 'b' or 'X' or '$'
All storage is measured in bytes, despite being very different hardware
Kilobyte, KB, about 1 thousand bytes
Megabyte, MB, about 1 million bytes
Gigabyte, GB, about 1 billion bytes
Terabyte, TB, about 1 trillion bytes (rare)
## Back to Overflow
As a result, one problem we can run into is *integer overflow*. Imagine that we have a binary number with 8 bits:

```1 1 1 1 1 1 1 0``` 1 byte = 8 bits (bits are 0s and 1s) 

one byte can store one character

If we added 1 to that, we’ll get ```1 1 1 1 1 1 1 1 = 255```, but what happens if we add another 1 to that? We’ll start carrying over all the 0s to get ```0 0 0 0 0 0 0 0 = overflow everything turn to zero```, but we don’t have an extra bit to the left to actually store that larger value.
Floats have a finite number of bits. But there are an infinite number of real numbers, so a computer has to round and represent some numbers inaccurately.
There are several examples in the real world where these issues create limitations or even dangerous bugs.

```int n``` good practice to use n for variables that stand for number

