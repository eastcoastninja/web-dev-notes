#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int height;
    do
    {
        printf("Please enter a height between 1 and 24\n");
        height = get_int("Height: ");
    }
    while (height < 0 || height > 23); // prompts user for new number while condition is true (number must be between 0 and 24)

    if (height == 0)
    {
        printf(""); // zero is a valid height and prints nothing
    }

    for (int row = 0; row < height; row++) // prints a new row after each iteration
    {
        for (int spaces = (height - row) - 1; spaces > 0; spaces--) // prints spaces depends of the relationship between height and row
        {
            printf(" ");
        }
        for (int hash = row + 2; hash > 0; hash--) // prints hashes depends of the relationship between height and spaces
        {
            printf("#");
        }
        printf("\n");
    }
    // printf("COURSE CLEAR!\n");
}
// drew a grid to figure out the pattern thanks stackoverflow