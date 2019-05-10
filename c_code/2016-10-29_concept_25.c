#include <stdio.h>
#include <math.h>

int count = 0;

void search(int x, int y, int z)  {
  printf("x=%d, y=%d, z=%d\n", x, y, z);
  printf("count=%d\n", ++count);
  if (x < y) {
    double t = ceil((x + y)/2.0);
    printf("t=%.1f\n", t);

    if (z >= t)
      search(t, y, z);
    else
      search(x, t - 1, z);

  }
}

void main(){
    search(1, 10, 3);
}
