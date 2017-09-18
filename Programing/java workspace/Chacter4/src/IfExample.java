
public class IfExample {
	public static void main(String[] args) {
		
		int score = (int)(Math.random()*20)+81;
		
	//	if ((score>=90) ?  System.out.println("점수가 90보다 큼") : System.out.println("점수가 90보다 작습니다."));
		if (score>=90)	{
			if(score>=95){
				System.out.println("점수가 95이상.");
				System.out.println("등급은 A+ 입니다");}
			else {
			System.out.println("점수가 90이상입니다.");
			System.out.println("등급은 A 입니다");
			}
		}
		else if(score>=80){
			if (score>=85){
				//System.out.println("점수가 90보다 작습니다.");
				System.out.println("등급은 B+ 입니다");
			}else{
			System.out.println("점수가 80~89");
			System.out.println("등급은 B 입니다");
					} 
		/*	else if(score>= 70){
			System.out.println("점수가 70~79.");
			System.out.println("등급은 c 입니다");
		} else if(score>=60){

			System.out.println("점수가 60~69보다 작습니다.");
			System.out.println("등급은  D 입니다");
		} else{
			System.out.println("점수가 70보다 작습니다.");
			System.out.println("등급은 F 입니다");
		}
		
		*/
		}}

}
