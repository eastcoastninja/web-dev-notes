# Week 1 Notes
C builds a foundation for many other languages
Must tell the computer what type of variable you are inputting into your variable.
## for loops
for loops check if the boolean expression is true before running the code block inside. After the code block runs the variable changes via i++, i-- , or ect. Then it will check the second expression only the boolean expression to see if it still evalutates to true until it is no longer valid.
```c
for(int i = 0; i < 50; i++) {
	printf("hello world\n");
}
```
## CS50 IDE
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
## Design & Logic
float allow you to use 32 bits to represent a number
double allow you to use 64 bits to represent a number
Single ```''``` are meant for single characters  
Design is if you did a good job implementing your code equivalent to someone evaluating an essay
Style, or the indentation, comments, and variable naming, is yet another aspect.
We use the if, else if, and else keywords to denote the forks in the road, based on Boolean expressions. else simply captures all the cases that haven’t fit into a previous condition.
integers discard anything after the decimal point, if we try to store some number with a decimal into it.
## Switch
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

## Overflow
In our computers, the number of bytes in our memory is finite. As a result, we can store only so much data. In C, each type of data has a fixed number of bytes allocated to instances of it. For example, every ```int``` has only 4 bytes in the CS50 IDE.
### Bits & Bytes
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

## Greedy Algorithms
According to the National Institute of Standards and Technology (NIST), a greedy algorithm is one "that always takes the best immediate, or local, solution while finding an answer. Greedy algorithms find the overall, or globally, optimal solution for some optimization problems, but may find less-than-optimal solutions for some instances of other problems."

Beware of impression of floats when converting to integer use round function ```change = round(4.2 * 100); // 420 without round 4.2 converts to 4.19 making the value 419``` 

# Week 1 continued
## Command Line
```pwd``` present working directory
```cp filename to destinationfilename``` // copies a file to a new filename
```cp -r``` filename to destinationfilename // recursively dive into the directory and copy everything  
```rm``` short for remove
```rm -r``` // to delete directories 
```rm -f``` // to skip delete confirmation
```mv``` // used to rename files

## Common commands
```
chmod
ln
touch
rmdir
man
diff
sudo
clear
telnet
```

## Data Types and variables
int always take up 4 bytes of memory(32 bits) means the range of values they can store is limited to 32 bits worth of information -2^31 to 2^31-1
Half is for negative ints and the other half is to store positive ints roughly 2 billion each
*unsigned int* doubles the range of positive integers you can take on at the expensive of no longer utilizing negative ints
```unsigned``` is a qualifier that can be applied to certain types to double the positive range 0 to 2^31 to 2^32-1 up to 4 billion
```char``` used to store single characters always take up 1 byte (8 bits)
range is -2^7 to 2^7-1 or -128 to 127
ASCII is a mapping of characters A to numeric values in the positive side 

```float``` used to store floating point values also known as real numbers
use 4 bytes of memory 32 bits *32 bits of precision*

```3.1459999909320932093``` *if the integer part 3 were longer we may be able to be as precise with the floating point part followed by the decimal point*

```double``` used to store floating point values also known as real numbers.
Difference is that doubles are *double precision* they use 8 bytes of memory 64 bits.
With an additional 32 bits of precision relative to a float doubles allow us to specify much more precise real numbers

```void``` is a type not a data type
functions can have a void return type no return value
parameter list of a function can be void meaning it takes no parameters

```bool``` capable of storing values true or false need to include cs50.h library in c to use

```string``` used for variables that will store a series of characters need to include cs50.h library in c to use

```structs``` allows you to group an interger and string into one unit
(defined types) ```typedefs``` allow you to create your own data types
Both of these can afford great flexibility in creating data types you for your programs using the cs50 library in c

### Creating variables 
If you wish to create multiple variables of the same type you can specify the type once and list as many variables as you want
```float sqrt2, sqrt3, pi```

It is good design/practice to only declare variables when you need them.
Simultaneously declaring and setting the value of a variable sometimes referred to as initializing can be done in one step
```int number = 17;```

## Operators
Random number generator(outputs a random number from 0 to ) using with modulus```%``` you can narrow it down. If for example you wanted a number between 0 and 20 you can use % on the random number generator that is generated this will divide it and the value left is a number between 0 and 19
Shorthand can be used in c such as ```*=, +=, ect.```
*In C every nonzero value is equivalent to true and zero is false*
Two main types of Boolean expressions: logical operators and relational operators

Logical operators ```&&``` AND true only if both operands are true otherwise false
Logical operators ```||``` OR  true if and only if at least one operand is true otherwise false
Logical operators ```!``` NOT inverts the value of its operand
Relational operators ```<, <=, <, <=``` 
Relational operators ```==, !=``` test for equality and inequality

## Condtional Statements
Conditional expressions allow your programs to make decisions and take different forks in the road depending on the values of variables or user input

C allows us to implement conditional expressions also known as branches a few different ways

```if(and if-else, and if-else if-if-if...-else statements```
can be *mutually exclusive* meaning one can not be true if the other is true or *non-mutually exclusive* meaning it satify the condition for the  first branch, second branch, but not the third, and satify the condition for the fourth else only the third and four branch are mutually exclusive. The else binds the nearest if only

```switch()``` conditional statement that permits enumeration od discrete cases instead of relying on Boolean expressions.
A switch statement accepts arguments of type char, byte, short, int, and String
Must ```break;``` through each case or will fall through unless that side effect is desired

```Ternary Operator (? :)``` useful for writing trivial short conditional branches *makes your code look fancy*

## Loops
### Use case for Loops
Good design/practice to use loops in the right context
```while``` use when you want a loop to repeat an unknown number of times, and possibly not all // useful for games to keep them in motion
```do-while``` use when you want a loop to repeat an unknown number of times but at least once // prompting a user for input
```for``` use when you want a loop to repeat a discrete number of times though you may not now the number at the moment the program is compile // prompt the user for a number and run the loop specific to the number of given 
```for-each``` commonly used to iterate over an array or a Collections class (eg, ArrayList)

###For-each loop
It starts with the keyword for like a normal for-loop.
Instead of declaring and initializing a loop counter variable, you declare a variable that is the same type as the base type of the array, followed by a colon, which is then followed by the array name.
In the loop body, you can use the loop variable you created rather than using an indexed array element.

```java
for (type var : array) // java format
{ 
    statements using var;
}

//is equivalent to:

for (int i=0; i<arr.length; i++) 
{ 
    type var = arr[i];
    statements using var;
}
```

####Limitations of for-each loop
For-each loops are not appropriate when you want to modify the array
For-each loops do not keep track of index. So we can not obtain array index using For-Each loop
For-each only iterates forward over the array in single steps
For-each cannot process two decision making statements at once
