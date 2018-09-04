# Lecture 2
## C, Continued
If we see an error we don’t understand, we can use a command written by CS50 staff, help50
For example, we could run ```help50 clang hello.c```
By reading the yellow text, we get a hint 

## Compiling
when we’ve used the term compiling, we were actually referring to a process that is made of four steps:

preprocessing:

In C, preprocessing involves replacing the lines that start with ```#include``` with the contents of the actual file.

compiling:

The compiler takes the complete source code and converts it to assembly code, much simpler instructions that look like this:

```assembly
main:                               #   @main
    .cfi_startproc
# BB#0:
    pushq   %rbp
.Ltmp0:
    .cfi_def_cfa_offset 16
.Ltmp1:
    .cfi_offset %rbp, -16
    movq %rsp, %rbp
.Ltmp2:
    .cfi_def_cfa_register %rbp
    subq $16, %rsp
    movabsq $.L.str, %rdi
    movb $0, %al
    callq   printf
...
```
*These lines are single-step arithmetic or memory management instructions that CPUs can perform.*

assembling:

Finally, these lines of assembly are converted to 0s and 1s that the CPU can directly understand.

linking:

We also need to combine into our program the binary file for standard I/O library that we call functions from, and this last step does exactly that. Recall that we only included ```stdio.h```, which is just the header file that declares the functions, not the actual code for them.

By having different stages, we can more closely examine, debug, and work with each layer, so the more complicated systems that we build atop them are cleaner, more secure, and better-designed.

## Printing and Debugging
We notice that for each error, we are told the line number and character or column where the error is.

In C, and other languages, variables have a scope, or level of code where it can be used, based on where it is initialized. For C, we can generally think of scope as being limited to being within the closest set of curly braces.

In the inner for loop, we print # the right number of times for each row, and follow that with a new line. The outer for loop will then repeat that for the right number of rows.

We can use another tool, eprintf, to provide information to ourselves when our program is running:

We should also use the debugger, by clicking on line numbers to the left of our code:

The red dot is called a breakpoint, which pauses our program at that line.

Then we can run debug50 ./filename, and the panel on the right automatically opens.

We can use the buttons on the top of that panel to control our program precisely. The triangle that looks like a play button will let the program resume normally until it reaches another breakpoint, if any. The next button, an arrow in the shape of a half-circle, will run the very next line of code, and pause the program again. The next button, the arrow pointing downwards, allows us to "step into" that line of code, and finally, the last arrow pointing up and to the right allows us to step back out of the next line of code.

## Strings, Arrays

To look up the documentation for these functions and format codes, among other information, we can use the built-in manual in the terminal.

For example, we can type ```man get_string``` 

The CS50 Staff have created https://reference.cs50.net/ is available as a reference link as well.

a string is just an abstraction for a sequence of characters. 
```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("input:  ");
    printf("output: ");
    for (int i = 0; i < strlen(s); i++)
    {
        printf("%c\n", s[i]);
    }
}
```
 we start a for loop since we want to print each character of a string that’s provided as input. The loop should end at the end of the string, so we can determine that with ```strlen(s)```, a function that returns to us the length of the string.

 we include a new library, ```string.h```, that has various functions for working with strings, including ```strlen```.

 *Typecasting* is casting, or converting, variables from a certain type, like int, to another, like char, or vice versa.
```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("Name: ");
    for (int i = 0; i < strlen(s); i++)
    {
        printf("%c %i\n", s[i], (int) s[i]);
    }
}
// Name: Julian            
// J 74
// u 117
// l 108
// i 105
// a 97
// n 110
```
Notice that we are substituting ```(int) s[i]``` for the ```%i``` in the string we print out, and ```(int)``` typecasts the character at ```s[i]``` to an ```int```.

we can work with strings directly. For example, we can capitalize a string, letter by letter:
```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("before: ");
    printf("after:  ");
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        if (s[i] >= 'a' && s[i] <= 'z')
        {
            printf("%c", s[i] - ('a' - 'A'));
        }
        else
        {
            printf("%c", s[i]);
        }
    }
    printf("\n");
}
```

First, we notice that the for loop now initializes two variables, i and n, at the start. n is set to the length of s, and we can do this once at the beginning of the loop since we know the length won’t change. Then, the loop won’t need to compute the length of the string on each iteration when it compares i to strlen. Instead, it can just compare it to n, which we already saved.

Within the loop, we check whether each character is lowercase. We can compare the values of one char with another directly, and use  && to indicate a logical and in C, such both Boolean expressions need to be true for the condition to run. And if it is indeed lowercase, we do some arithmetic to capitalize it. Fortunately, in ASCII, all lowercase letters are offset from the capital counterparts by the same amount. So we can subtract that difference from a lowercase letter, and get the number for the capital version of that letter.

