#include <stdio.h>

void f1 (int m) {
  if (m > 3) {
    printf ("%d\n", m);
    return;
  }
  else {
    printf ("%d\n", m);
    f2(m+2);
    printf ("%d\n", m);
  }
}

void f2 (int n) {
  if (n > 3) {
    printf ("%d\n", n);
    return;
  }
  else {
    printf ("%d\n", n);
    f1(n-1);
    printf ("%d\n", n);
  }
}

int main(void) {
    f1(1);
}
