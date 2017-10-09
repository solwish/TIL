
public class Audio implements RemoteControl {
	//�ʵ�
	private int volume;
	
	//�Ͽ� �߻� �޼ҵ��� ��ü �޼ҵ�
	@Override
	public void turnOn() {
		System.out.println("Audio�� �մϴ�.");

	}

	@Override
	public void turnOff() {
		System.out.println("Audio�� ���ϴ�.");

	}

	@Override
	public void setVolume(int volume) {
		if(volume > RemoteControl.MAX_VOLUME) {
		this.volume = RemoteControl.MAX_VOLUME;
	}else if(volume < RemoteControl.MIN_VOLUME){
		
		this.volume = RemoteControl.MIN_VOLUME;
	}else {
		this.volume = volume;
	}
	System.out.println("���� Audio ����: "+ volume);
	}

}
