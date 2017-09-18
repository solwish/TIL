
public class VariableScopeExample {

	public static void main(String[] args) {
		
		
		int var1;
		
		if (true) {
			int var2;
			var1 = 10;
			var2 = 20;
		}
		
		var1 = 10;
		
		for (int i = 0; i<1; i++) {
			int var3;
			var1 = 10;
		}

		var1 = 10;
		
		byte var11 = -128;
		byte var12 = -30;
		byte var13 = var11;
		
		
		System.out.println(var13);
	}

	
	
	
}
