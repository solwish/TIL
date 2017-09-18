
public class GarbageValueExample {

	public static void main(String[] args) {
		byte var1 = 125;
		int var2 = 125;
		
		for (int i = 0; i < 5; i++){
			var1++;
			var2++;
			System.out.println("Var1: " + var1 + "\t" + "var2: " + var2);
			System.out.println(i);
		
		}

		char c1 = 'A';
		char c2 = 65;
		char c3 = '\u0041';
		
		char c4 = '°¡';
		char c5 = 44032;
		char c6 = '\uac00';
		
		int uniCode = c1;
		
		System.out.println(c1);
		System.out.println(c2);
		System.out.println(c3);
		System.out.println(c4);
		System.out.println(c5);
		System.out.println(c6);
		System.out.println(uniCode);
		
	}

}
