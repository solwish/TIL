
public class AdvancedForExample {

	public static void main(String[] args) {
		
		int[] scores = {95, 71, 84, 93, 87};
		
		int sum = 0;
		for (int s: scores){
			sum = sum + s;
		}
		System.out.println("���� ���� = " + sum);
		
		double avg = (double) sum/ scores.length;
		System.out.println("���� ��� = "+avg);
		
		
		
	}

}
