# Lecture 2
```clang hello.c -lcs50``` link the cs50 library with my code then execute the program
This command along with ```clang -o hello hello.c``` has been abstracted away to make the process easier in the cs50 ide with the command ```make hello```
Take steps when solving a problem. *Do not try to solve it in it's entirety*
Write comments to give yourself answers as to why you made certain decisions so you do not need to re-evaluate and figure out why you did something a certain way.
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

We can use another tool, ```eprintf``` can be used to express what should be happening at that line, if you think something is going to happen tell yourself that it should in your code, and make sure you see what you expect to see. (to provide information to ourselves when our program is running)

We should also use the debugger, by clicking on line numbers to the left of our code:

The red dot is called a breakpoint, which pauses our program at that line.

Then we can run ```debug50 ./filename``` , and the panel on the right automatically opens.
*stepover* mean execute the line

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
        printf("%c %i\n", s[i], (int) s[i]); // make the char character an int 
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
    for (int i = 0, n = strlen(s); i < n; i++) // does not check the string length on each iteration since it is declared in the loop
    {
        if (s[i] >= 'a' && s[i] <= 'z') // if between a and z inclusive
        {
            printf("%c", s[i] - ('a' - 'A')); // lowercase - capital = 32 (capitalize the letter)
        }
        else
        {
            printf("%c", s[i]); // if capital letter just print it out
        }
    }
    printf("\n");
}
```

First, we notice that the ```for``` loop now initializes two variables, ```i``` and ```n```, at the start. ```n``` is set to the length of ```s```, and we can do this once at the beginning of the loop since we know the length won’t change. Then, the loop won’t need to compute the length of the string on each iteration when it compares ```i``` to ```strlen```. Instead, it can just compare it to ```n```, which we already saved.

Within the loop, we check whether each character is lowercase. We can compare the values of one ```char``` with another directly, and use  ```&&``` to indicate a logical ```and``` in C, such both Boolean expressions need to be true for the condition to run. And if it is indeed lowercase, we do some arithmetic to capitalize it. Fortunately, in ASCII, all lowercase letters are offset from the capital counterparts by the same amount. So we can subtract that difference from a lowercase letter, and get the number for the capital version of that letter.

```c
#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("before: ");
    printf("after:  ");
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        if (islower(s[i])) // returns true or false
        {
            printf("%c", toupper(s[i]));
        }
        else
        {
            printf("%c", s[i]);
        }
    }
    printf("\n");
}
```
````islower```` and ```toupper``` are functions from yet another library, ```ctype.h```, that we can use to achieve the same effects as what we manually did earlier.

```islower``` returns a Boolean value, either ```true``` or ```false```, which we can check in our condition. And ```toupper``` returns the uppercase version of the character passed into it.

We can, by looking at the documentation, realize that ```toupper``` will work on any character and only convert it to uppercase if it’s already lowercase, so we don’t even need to make that check ourselves:

we realize that our computer’s memory is just lots and lots of bytes, ordered one after another. We can represent that in a grid

Each of the boxes in the grid are numbered, from 0 to some number in the billions (depending on the amount of memory we have).

And C stores strings in memory with one character in each byte, but also with a terminating, or ending character, at the end of each string. This special null character, or \0, is literally the number 0 (not the ASCII equivalent for the character 0).

If we were to store many strings in our computer’s memory, they might end up being stored like this, one after another.

For other types of data in C, a fixed number of bytes is allocated for them every time, so they do not need a terminating character.
```c
// count each character except \0 (null character)
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string s = get_string();
    int n = 0;
    while (s[n] != '\0')
    {
        n++;
    }
    printf("%i\n", n);
}

In C, we can create arrays, or lists, comprised of elements of the same type of data. Strings, as we’ve seen, are just arrays of characters.

To be more precise, an array is a contiguous chunk of memory of elements of the same type, stored back to back.

```int main(void)```: main is a function that takes ```void```, or nothing, as its arguments, and returns an ```int```.

We can change that so our program takes input not when it runs, but before it runs, at the command-line, We can try the following with argv0.c:
```c
#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[]) // argc = argument cout is the total number of words the user has typed for input argv = argument vector is an array of words the user has wrote at the prompt
{
    if (argc == 2) // first argument the program name ./hello second argument is what is passed in
    {
        printf("hello, %s\n", argv[1]); 
    }
    else
    {
        printf("hello, world\n");
    }
}
```
Notice that ```main``` now takes in two arguments. The first, ```argc```, is a count of how many arguments were passed in. The second, argv, is an array of strings, each of which are the arguments typed at the prompt.

If ```argc```, or the number of arguments, is 2, then we print out the second of those arguments. ```argv[0]```, the first argument, will always be the name of our program.

We can compile and run this program with something like ```./hello Julian```, and see as output ```hello, Julian```.

*Segmentation fault* you touched ram that you should not have

## Cryptography
One way to encrypt, or scramble data, so that it can be decrypted, or unscrambled, is to map each letter in the alphabet to some other letter with a key.

Encrypted data, or ciphertext, is the scrambled version of plaintext, or the original, easily-readable data. To get from plaintext to ciphertext, and vice versa, we need to know the key, or some piece of information, like a number that indicates how many letters we need to shift each letter in our plaintext by.

## Debugging

## Functions
If we aren't implementing the functions ourselves we don't need to know the underlying implementation. 
That's part of the contract of using functions. The behavior is typically preditable based on the name. That's why most functions have clear, obvious names, and are well-documented. 
### Why use functions?
  Organization:
    Functions help break up a complicated problem into manageable subparts.
  Simplification: 
    Smaller components tend to be easier to design, implement, and debug.
  Reusability:
    Functions can be recycled; you need to write them once, but can use them as often as you need!
### Function declarations
The first step when creating a function is to declare it. This give the compiler a heads up that a user written function appears in code.
Function declarations should always go atop your code, before you begin writing ```main()``` 
Function declartion should appear as followed: ```return-type name(argument-list)``` ```float mutli_floats(float a, float b);```
The second step is to define it. 
```c
float mutli_floats(float a, float b)
{
  float product = a * b;
  return product
}
```
### Function calls
To call a function simply pass it arguments and assign its return value to something of the correct type
### Practice Problem 
Outputs true or false depending on whether the three lengths are capable of making a triangle
  A triangle may only have sides with a positive length
  The sum of the lengths of any two sides of the triangle must be greater than the length of the third size
*When calling functions only need the function name and parameters if any do not include type or argument types*
```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Outputs true or false depending on whether the three lengths are capable of making a triangle
//   A triangle may only have sides with a positive length
//   The sum of the lengths of any two sides of the triangle must be greater than the length of the third size

bool valid_triangle(int a, int b, int c); // tells the compiler this function will be defined below
int main(void)
{
  int a , b, c;
  string response ="";
    // checks for positive sides
    do
    {
      a = get_float("What's your first number?\n");
      b = get_float("What's your second number?\n");
      c = get_float("What's your third number?\n");
    }
    while((a <= 0) || (b <= 0) || (c <= 0));

    bool valid = valid_triangle(a, b, c);
    response = valid ? "true" : "false";
    printf("Calculating...\n");
    printf("This is a valid triangle? %s\n", response);
}
  bool valid_triangle(int a, int b, int c)
  {
    bool result;
    // check that the sum of (every pair) of any two sides is greater than the third (all must be greater to be true)
    if((a + b <= c) || (a + c <= b) || (b + c <= a))
    {
      result = false;
    }
    else
    {
      result = true;
    }
    return result;
  }
```
## Variable Scope
Scope is a characteristic of a variable that defines from which that variable may be accessed
	```Local``` accessible within the functions or blocks in which they were created
	```global``` accessible by any function in the program must be defined outside of all functions and any function may refer to it.

Be careful with global variables a value can be changed before you expect it to be changed.
*Local variables in C are passed by value in function calls. 
When variable is passed by value, the callee(the function that receives the variable) receives a copy of the passed variable, not the variable itself.
That means that the variable in the caller is unchanged unless overwritten.* 
When there exists at least one call to another function within it that is the caller.

```c
// passed by value
int main(void) // caller
int a = 10;
set_int(a); // does not overwrite in the caller a = 10;
a = set_int(a);  // overwrites a to the new variable in the caller a = 22;
void set_int(int x) // callee
{
  x = 22;
}
```

Things can get insidious if the same variable name appears in multiple functions which is okay if the variable exist in different scopes

## Arrays
We use arrays to hold values of the same type at contiguous memory locations. 
An array is a block of contiguous space in memory whcih has been partitioned into small identically-sized blocks of space called elements each of which can store a certain amount of data all of the same data type such as int or char and which can be accessed directly by index. The last element is located at index (n-1) 
C will not prevent you from going "out of bounds" of your array; be careful may encount a segmentation fault
Array declaration ```type name [size] // size is how many elements you want your array to contain```
```c
// instantiation syntax do not need to indicate size before creating
bool truthtable[3] = { false, true, true};
// individual element syntax
bool truthtable[3];
truthtable[0] = false;
```
Iterate over an array is best done by using a loop.

### Practice Exercise 
Create an array of 100 integers where every element of the array is it's index
```c
#include <cs50.h>
#include <stdio.h>
// sets each element to the current index [0] = 0 and prints it out
int main(void)
{
    int arr [100]; 
    int length = sizeof(arr)/sizeof(int); // length of an integer array
    for(int n = 0; n < length; n++)
    {
        arr[n] = n;
        printf("%i\n", arr[n]);
    }
}
```
Arrays can consist of more than a single dimension. You can have as many size specifiers as you wish
```bool battleship[10][10]; // think of this as a 10 x 10 grid of cells``` 
In memory it's really just a 100-element one dimensional array
Multi-dimensional arrays are great *abstraction* to help visualize game boards or other complex representations
We cannot treat entire arrays themselves as variables
Cannot assign one array to another using the assingment operator we must instead loop to copy over the elements one at a time
Arrays *are passed by reference* The callee receives the actual array not a local copy of it if it were (passed by value) 

```c
// passed by reference
int main(void) // caller
int a[0] = 10;
set_int(a); // overwrites in the caller a = 22;
a = set_int(a);  // overwrites a to the new variable in the caller a = 22;
void set_int(int x) // callee
{
  x = 22;
}
```

## Command Line Arguments
To collect command-line argumentsfrom the user, declare main as:
```int main(int argc, string argv[])```
These two special arguments let you know what data the user provided and how much data they provided.
```argc``` (argument count) interger type variable will store the number of command-line arguments that the user typed when the program was executed.
```argv``` (argument vector) this array of strings stores, one string per element, the actual text the user typed at the command-line when the program was executed. *Every that is stored in argv is a string* Be careful not to overstep the bounds of your array especially with ```argv``` given its high degree of importance in a program.

Check out Pset Walkthrough to find out how to turn a string into a number

## Magic Numbers
Directly writing constants into our code is sometimes referred to as using *magic numbers* generally want to try to avoid
C provides a *preprocessor directive* (also know as(aka) macro) for creating symbolic constants (giving a name to a constant so it has more meaning).
```#define NAME REPLACEMENT```
At the time your program is compiled, ```#define``` goes through your code and replaces ```NAME``` with ```REPLACEMENT``` 
If ```#include``` is similar to copy/paste, then ```#define``` is analogous to find/replace

At the time your program is compiled, ```#define``` goes through your code and replaces ```PI``` with ```3.14159265``` 
This make creating changes alot simplier since the code is defined at the top and only one change needs to be made. Also there is less of a chance for error when a defined constant is in place for a variable you want to change for specific reasons. ```#define DECKSIZE 52```
