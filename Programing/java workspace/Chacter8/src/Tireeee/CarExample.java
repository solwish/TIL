package Tireeee;

import java.util.Scanner;

public class CarExample {

	public static void main(String[] args) {
		Car myCar = new Car();
		
		myCar.run();
		/*
		void chageTire(int i,Tire tire){
			this.tires[i]= tire;
		}*/
		
		System.out.println("바꾸실 타이어 위치 선택 0~3");
		Scanner ix = new Scanner(System.in);
		Scanner ex = new Scanner(System.in);
	
		int i = ix.nextInt();
	//	System.out.println("\"금호\"와 \"한국\"중에 선택하세요");
	//	ex.nextLine();
	//	String sel = ex.nextLine();
		Tire select = null;
	//	if(sel.equals("금호")){
			select= new KumhoTire();
	//	}else if(sel.equals("한국")){
	//		select= new HankookTire();
	//	}else{
	//		System.out.println("잘못입력하셨습니다.");
	//	}
		
	//	int i = 2;//타이어 로테이션 선택
	//	Tire select = new KumhoTire(); //금호 한국 선택
		myCar.chageTire(i, select);
//		myCar.chageTire(1, new KumhoTire());
	//	myCar.chageTire(3, new KumhoTire());
	//	myCar.tires[0] = new KumhoTire();
	//	myCar.tires[1] = new KumhoTire();
		
		myCar.run();

	}

	
}
