
public class DmbCellPhoneExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//dmb���� ��ü ����
		DmbCellPhone dmbCellPhone = new DmbCellPhone("�ڹ���", "����", 10);
		
		//cellPhone ���κ��� ��� ���� �ʵ�
		System.out.println("��: "+ dmbCellPhone.model);
		System.out.println("����: "+ dmbCellPhone.color);
		
		//DmbCellPhone�� �ʵ�
		System.out.println("ä��: "+ dmbCellPhone.channel);
		
		// CellPhone ���κ��� ��� ���� �޼ҵ�
		dmbCellPhone.powerOn();
		dmbCellPhone.bell();
		dmbCellPhone.sendVoice("�������� ����");
		dmbCellPhone.receiveVoice("�� �ű� ��������");
		dmbCellPhone.sendVoice("�� ���� ��������");
		dmbCellPhone.hangUp();
		
		//dmbCellPhone�� �޼ҵ�
		dmbCellPhone.turnOnDmb();
		dmbCellPhone.changeChannelDmb(7);
		dmbCellPhone.turnOffDmb();
		
		
		dmbCellPhone.powerOff();
		

	}

}
