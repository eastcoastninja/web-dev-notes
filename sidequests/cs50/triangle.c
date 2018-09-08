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