package Phone;

public class PhoneExample {

	public static void main(String[] args) {
		//Phone phone =new Phone();   (x)
		
		SmartPhone smartPhone = new SmartPhone("ȫ�浿");
		
		smartPhone.turnOn(); // ���� �޼���
		smartPhone.internetSearch();
		smartPhone.turnOff(); //���� �޼���
		
		Phone phone = new SmartPhone("ȫ�浿");//��ĳ����
		
		phone.turnOn(); //���� �޼���
		((SmartPhone)phone).internetSearch();//�ٿ�ĳ���� ���ͳ� �˻� �޼ҵ带 ��������
		phone.turnOff();
				
		

	}

}
