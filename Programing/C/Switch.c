#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
main()
{
	int j = 90;
	switch (j/10)
	{
	case 10:
	case 9:
		printf("A����");
		break;
	case 8:
		printf("B����");
		break;
	default:
		printf("C����");
		break;
	}
	printf("\n");
}
