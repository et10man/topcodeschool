#include <stdio.h>

int F (int n) {
    if (n < 4)
        return n;
    else
        //return n * F(n-1);
        return n + F(n-3);
        //return n - F(n-2);
        //return F(3*n+1);
}

void main(){
    printf("F(14) = %d\n", F(14));
}
