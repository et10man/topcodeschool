#include <stdio.h>

int f (int n) {
  int count=0;
  int sum=0;
  if (n<2) {
    return 0;
  }
  for (int i=1; i<=n; i=i+1) {
    sum = sum + i;
    count++;
  }
  printf("count = %d\n", count);
  sum = sum + f(2*n/3);
  return sum;
}
int main(void) {
  f(1000);
}
