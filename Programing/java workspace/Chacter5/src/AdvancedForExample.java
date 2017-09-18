
public class AdvancedForExample {

	public static void main(String[] args) {
		
		int[] scores = {95, 71, 84, 93, 87};
		
		int sum = 0;
		for (int s: scores){
			sum = sum + s;
		}
		System.out.println("점수 종합 = " + sum);
		
		double avg = (double) sum/ scores.length;
		System.out.println("점수 평균 = "+avg);
		
		
		
	}

}
