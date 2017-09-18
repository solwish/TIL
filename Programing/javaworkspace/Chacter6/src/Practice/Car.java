package Practice;

public class Car {
	
	int gas;
	
	void Setgas(int gas){
		this.gas=gas;
	}
	
	boolean isLeft(){
		if(gas==0){
		System.out.println("가스가 없습니다.");
		return false;
		}
		System.out.println("가스가 있습니다.");
		return true;
	}
	
	void run(){
		while(true){
			if(gas>0){
				
			}
		}
			
	}
	

}
