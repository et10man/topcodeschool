/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/
#include <stdio.h>

int f1(int a[], int value) {
  int count = 0;
  int r_value = -1;
  int i = 0;
  while (i < 100) {
    count+=1;
    if (a[i] == value) {
      printf("index = %d\n", i);
      r_value = i;
      break;
    }
    i = i + 1;
  }
  printf("n1 = %d\n", count);
  return r_value;
}

int f2(int a[], int value) {
  int count = 0;
  int r_value = -1;
  int low = 0,
  high = 99;
  int mid;
  while (low <= high) {
    mid = (low + high)/2;
    printf("mid = %d\n", mid);
    count += 1;
    if (a[mid] == value) {
      r_value = mid;
      break;
    }
    else if (a[mid] < value) {
      low = mid + 1;
    }
    else {
      high = mid - 1;
      }
    }
    printf("n2 = %d\n", count);
    return r_value;
}

int main(void) {
  int a[100];
  for(int i=0; i<100; i+=1){
    a[i] = 3*i+1;
  }
  f1(a, 100);
  f2(a, 100);
}
