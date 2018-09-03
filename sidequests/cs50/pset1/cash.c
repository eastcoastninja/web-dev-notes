#include <cs50.h>
#include <stdio.h>
#include <math.h>

int main(void)
{

    int coins = 0;
    float n;
    int change;
    do
    {
        n = get_float("How much do I owe you? \n");
    }
    while (n < 0);  // continue prompt while true less than zero

    change = round(n * 100); // impression occurs converting float to an int use round function to get the nearest integer value
    // printf("%d\n", change);
    while (change > 0)
    {
        if (change >= 25) // change 25 cents
        {
            coins = coins + 1;
            change = change - 25;
            //  printf("quarter\n");
        }
        else if (change >= 10 && change < 25)  // change 10 cents
        {
            coins = coins + 1;
            change = change - 10;
            //  printf("dime\n");
        }
        else if (change >= 5 && change < 10)  // change 5 cents
        {
            coins = coins + 1;
            change = change - 5;
            //  printf("nickel\n");
        }
        else  // change 1 cents
        {
            coins = coins + 1;
            change = change - 1;
            //  printf("penny\n");
        }
    }
    printf("%d\n", coins);
}