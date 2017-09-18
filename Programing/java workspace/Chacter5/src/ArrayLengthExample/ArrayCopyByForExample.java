package ArrayLengthExample;

public class ArrayCopyByForExample {

	public static void main(String[] args) {
		
		int[] oldintA={1,2,3};
		int[] newIntA=new int[5];
		for (int i=0; i< oldintA.length;i++){
			newIntA[i] = oldintA[i];
		}

		for (int i=0; i< newIntA.length; i++){
			System.out.print(newIntA[i] + ", ");
		}
		
	}

}
