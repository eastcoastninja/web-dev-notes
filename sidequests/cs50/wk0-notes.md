# Binary
The decimal notation is calculated in powers of 10.
Binary notation is calculated in terms of base 2. (from left to right)
2^0 = 1
2^1 = 2
2^2 = 4
2^3 = 8
2^4 = 16
2^5 = 32
2^6 = 64
2^7 = 128
2^8 = 256
A byte is 8 bits.
```000001101 = 13```
B-Day in Binary ```0000000001 000011111 001011010```
```101 = 1*2^2 + 0*2^1 + 1*2^0 = 5```
Note how we can multiply the binary digits by their respective powers of two and sum them to convert to a decimal value.
Addition and subtraction in binary works the same way as in decimal. Start on the right, and carry the 1s as needed.
But once we have used up all the places, we need more bits, or binary digit
Computers can conveniently represent a 0 or 1 with electricity, since something can either be turned on or off. And computers have lots of transistors, microscopic switches inside, that can be turned on and off to represent data.
ASCII stores a pattern of bits to represent a letter, symbol, or number.
A series of bits, that represent the numbers 72 73 33 might be the characters H I ! in ASCII, but could also be interpreted by graphics programs as a color.
For both ASCII and RGB, the maximum value that each character or amount of one color can be is 255, because one common standard group of bits is a byte, or 8 bits.
ASCII has been seceded by Unicode to represent more elements.
Most of this low level information has been abstracted away taken care of by others before us for us to focus on higher level problems.
Algoriths - step by step instructions for solving a problem. 
To solve something correctly we need to give the computer precise step by step instructions.
Notice the patterns become more intuitive with how you learn to solve problems
In computer science, a common theme is abstraction, where we start by taking ideas to solve simple problems, and layering these solutions until we can build more and more interesting applications.
In fact, when we write algorithms to solve problems, we need to think about cases when something unexpected happens. 
pseudocode, English-like syntax that is similar in precision to code.
 pick up phone book
 1   open to middle of phone book
 2   look at names
 3   if Smith is among names
 4       call Mike
 5   else if Smith is earlier in book
 6       open to middle of left half of book
 7       go back to step 2
 8   else if "Smith" is later in book
 9       open to middle of right half of book
10       go back to step 2
11   else
12       quit
Words like pick up, open, and look are equivalent to functions in code, like verbs or actions that allow us to do something.
if, else if, and else are the keywords which represent forks in the road, or decisions based on answers to certain questions. These questions are called Boolean expressions, which have an answer of either true or false. For example, Smith among names is a question, as is Smith is earlier in book and Smith is later in book.
go back creates loops, or series of steps that happen over and over, until we complete our algorithm.



*Do good do well*

