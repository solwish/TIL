
public class IfExample {
	public static void main(String[] args) {
		
		int score = (int)(Math.random()*20)+81;
		
	//	if ((score>=90) ?  System.out.println("������ 90���� ŭ") : System.out.println("������ 90���� �۽��ϴ�."));
		if (score>=90)	{
			if(score>=95){
				System.out.println("������ 95�̻�.");
				System.out.println("����� A+ �Դϴ�");}
			else {
			System.out.println("������ 90�̻��Դϴ�.");
			System.out.println("����� A �Դϴ�");
			}
		}
		else if(score>=80){
			if (score>=85){
				//System.out.println("������ 90���� �۽��ϴ�.");
				System.out.println("����� B+ �Դϴ�");
			}else{
			System.out.println("������ 80~89");
			System.out.println("����� B �Դϴ�");
					} 
		/*	else if(score>= 70){
			System.out.println("������ 70~79.");
			System.out.println("����� c �Դϴ�");
		} else if(score>=60){

			System.out.println("������ 60~69���� �۽��ϴ�.");
			System.out.println("�����  D �Դϴ�");
		} else{
			System.out.println("������ 70���� �۽��ϴ�.");
			System.out.println("����� F �Դϴ�");
		}
		
		*/
		}}

}
