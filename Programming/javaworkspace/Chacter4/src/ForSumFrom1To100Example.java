
public class ForSumFrom1To100Example {
	public static void main(String[] args) {
		int oddsum = 0;
		int evensum = 0;
		
		for (int i=1;i<=100;i++){
			
			if(i%2==0){
			evensum = evensum + i;
			} else {
				oddsum = oddsum +i;
			}
					
		}
		System.out.println("Ȧ�� ��"+oddsum);
		System.out.println("¦�� ��"+evensum);
		
		
	}

}
