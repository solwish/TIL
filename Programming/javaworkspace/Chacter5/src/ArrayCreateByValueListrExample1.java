
public class ArrayCreateByValueListrExample1 {

	public static void main(String[] args) {
		// int[] scores = {83, 90, 87};
		/*
		 * int a= 10 ,b= 15; System.out.println(a+b+scores[1]);
		 * 
		 * for(int i=0;i<3;i++){ System.out.println("scores"+i+" "+scores[i]); }
		 * 
		 * //System.out.println(scores[3]); �ƿ����ٿ���ͼ��� ����
		 * 
		 * int sum = 0; for (int i =0; i<3; i++){ sum += scores[i]; }
		 * System.out.println("����: "+sum); double avg = (double) sum/3;
		 * System.out.println("���: "+avg);
		 * 
		 * int sum2 = add(scores);
		 * 
		 * System.out.println("����: " + sum2);
		 * 
		 * public static int add(int[] socres){ int sum = 0; for (int
		 * i=0;i<3;i++){ sum+=0; } return sum; }
		 * 
		 */
		int[] scores;
		scores = new int[] { 83, 90, 87 };
		
	//	int amu = scores.length;
		
		int sum1 = 0;

	//	int sum2 = add(new int[] { 83, 90, 87 });
		int sum2 = add(scores);
		System.out.println("���� : " + sum2);
		System.out.println();
	}
	

	public static int add(int[] scores) {
		int sum = 0;
		for (int i = 0; i < scores.length; i++) {
			sum += scores[i];
		}
		return sum;
	}

}
