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
		
		System.out.println("�ٲٽ� Ÿ�̾� ��ġ ���� 0~3");
		Scanner ix = new Scanner(System.in);
		Scanner ex = new Scanner(System.in);
	
		int i = ix.nextInt();
	//	System.out.println("\"��ȣ\"�� \"�ѱ�\"�߿� �����ϼ���");
	//	ex.nextLine();
	//	String sel = ex.nextLine();
		Tire select = null;
	//	if(sel.equals("��ȣ")){
			select= new KumhoTire();
	//	}else if(sel.equals("�ѱ�")){
	//		select= new HankookTire();
	//	}else{
	//		System.out.println("�߸��Է��ϼ̽��ϴ�.");
	//	}
		
	//	int i = 2;//Ÿ�̾� �����̼� ����
	//	Tire select = new KumhoTire(); //��ȣ �ѱ� ����
		myCar.chageTire(i, select);
//		myCar.chageTire(1, new KumhoTire());
	//	myCar.chageTire(3, new KumhoTire());
	//	myCar.tires[0] = new KumhoTire();
	//	myCar.tires[1] = new KumhoTire();
		
		myCar.run();

	}

	
}
