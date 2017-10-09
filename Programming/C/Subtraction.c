#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
main()
{
	int x;	int y;	int d;
	scanf("%d %d", &x, &y);
	if (x>=y)
	{
		d = x - y;	
	}
	else
	{
		d = y - x;
	}
	printf("%d \n", d);
}
