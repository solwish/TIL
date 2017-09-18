
public class FiboExample {

	public static void main(String[] args) {
		/*
		 * int num1=10; int num2=20;
		 * 
		 * System.out.println(num1); System.out.println(num2);
		 * 
		 * for(int i=1; i<=20; i++){ int value; value=num2+num1;
		 * System.out.println(value); num2=num1; num1=value;
		 * 
		 * 
		 * }
		 * 
		 * int change= num1; num1=num2; num2=change;
		 * System.out.println(num1+" "+num2);
		 */

		// int count= (int)(Math.random()*9)+1;
		for (int count = 1; count < 10; count++) {
			System.out.println("***" + count + " ´Ü*****");
			for (int i = 1; i < 10; i++) {
				int value = i * count;

				System.out.println(count + " x " + i + " = " + value);

			}
		}

	}

}
