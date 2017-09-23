#include <stdio.h>
int main()
{
	int i = 0;
	int sum = 0;
	do {
		i = i + 2;
		sum = sum + i;
	} while (i < 10);
	printf("%d \n", sum);

	i = 0;
	sum = 0;
	do
	{
		i = i + 1;
		if (i % 2 == 0)
			sum = sum + i;
	} while (i < 10);
	printf("%d \n", sum);

	i = 10;
	int even = 0;
	int odd = 0;
	for (int k = 0; k <= i; k++)
	{
		if ((k % 2) == 0)
			even += k;
		else
			odd += k;
	}
	printf("%d \t %d \n", even, odd);
}
