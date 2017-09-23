#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
main()
{
	int j = 90;
	switch (j/10)
	{
	case 10:
	case 9:
		printf("A학점");
		break;
	case 8:
		printf("B학점");
		break;
	default:
		printf("C학점");
		break;
	}
	printf("\n");
}
