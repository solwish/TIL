
public interface RemoteControl {

	//  ���
	int MAX_VOLUME = 10;
	int MIN_VOLUME = 0;
	
	

	//�߻� �޼ҵ� - �޼��� ����θ� �ۼ�
	void turnOn();
	void turnOff();
	void setVolume(int volume);
//	void mute(); �׷��� ����Ʈ �޼ҵ� ��

	//������
	default void setMute(boolean mute) {
		if(mute){
			System.out.println("���� ó��");
		}else{
			System.out.println("���� ����");
		}
	}
	
	//���� �޼ҵ�
	static void changeBattery(){
		System.out.println("������ ��ȯ");
	}
	
	
	
}
