
public class DmbCellPhoneExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//dmb셀폰 객체 생성
		DmbCellPhone dmbCellPhone = new DmbCellPhone("자바폰", "빨강", 10);
		
		//cellPhone 으로부터 상속 받은 필드
		System.out.println("모델: "+ dmbCellPhone.model);
		System.out.println("색생: "+ dmbCellPhone.color);
		
		//DmbCellPhone의 필드
		System.out.println("채널: "+ dmbCellPhone.channel);
		
		// CellPhone 으로부터 상속 받은 메소드
		dmbCellPhone.powerOn();
		dmbCellPhone.bell();
		dmbCellPhone.sendVoice("여보세요 나야");
		dmbCellPhone.receiveVoice("응 거기 잘지내니");
		dmbCellPhone.sendVoice("내 거췬 생각끄아");
		dmbCellPhone.hangUp();
		
		//dmbCellPhone의 메소드
		dmbCellPhone.turnOnDmb();
		dmbCellPhone.changeChannelDmb(7);
		dmbCellPhone.turnOffDmb();
		
		
		dmbCellPhone.powerOff();
		

	}

}
