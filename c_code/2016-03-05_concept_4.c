#include <stdio.h>

int main(void) {
  int a[101], b[101];
  for(int i=1; i<=100; i=i+1) {
    b[i] = i;
  }
  a[0] = 0;
  for(int i=1; i<=100; i=i+1) {
    a[i] = b[i] + a[i-1];
  }
  printf ("%d\n",  a[50]-a[30]);
}
