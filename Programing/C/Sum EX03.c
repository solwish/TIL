#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
main()
{
	int i = 0, odd = 0;
	while (1)
	{
		i++;
		if (i > 10)
			break;
		if (i % 2 ==0)
			continue;	
		odd += i;
	}
	printf("\n %d \n", odd);
}
