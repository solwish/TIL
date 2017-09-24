#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
main()
{
	int k = 0;
	int n = 1;
	int h = 1;
	do
	{
		k += 1;
		n += k;
		h += n;
	} while (k < 9);
	printf("%d \n", h);
}
