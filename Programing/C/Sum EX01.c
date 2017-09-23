#include <stdio.h>
int main()
{
	char temp;
	int number;
	int sum;
	number = 1;
	sum = 0;
	while (number<=10)
	{
		sum = sum + number;
		number++;
	}
	printf("\n 1+2+....+10 = %d \n", sum);
//	system("pause");
	return 0;
}
