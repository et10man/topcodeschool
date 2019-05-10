#include <stdio.h>
int A[8]={0, 2, 4, 6, 8, 10, 12, 14};

int Search (int x) {
  int high = 7;
  int low = 0;
  while (high > low) {
    int mid = (high + low)/2;
    if (A[mid] <= x) {
      low = mid + 1; }
    else {
      high = mid;
    }
    printf("high=%d, low=%d\n", high, low);
  }
  return A[high];
}

void main(){
    printf("Search(-1) = %d\n", Search(-1));
    printf("Search(0) = %d\n", Search(0));
    printf("Search(10) = %d\n", Search(10));
    printf("Search(16) = %d\n", Search(16));
}
