#include <stdio.h>

int f(int a[], int n) {
  int index = 0;
  for(int i=1; i<=n-1; i=i+1) {
    if (a[i] >= a[index]) {
      index = i;
      printf("%d\n", index);
      }
    }
  return index;
}

int main(void) {
    int a[10]= { 1, 3, 9, 2, 5, 8, 4, 9, 6, 7 };
    printf("answer = %d", f(a, 10));
}
