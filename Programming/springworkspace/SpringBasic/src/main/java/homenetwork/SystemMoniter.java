package homenetwork;

public class SystemMoniter {

	private long periodTime;
	private SmsSender sender;

	public SystemMoniter() {
		super();
	}

	public SystemMoniter(SmsSender sender) {
		super();
		this.sender = sender;
	}

	public SystemMoniter(long periodTime) {
		super();
		this.periodTime = periodTime;
	}

	public SystemMoniter(long periodTime, SmsSender sender) {
		super();
		this.periodTime = periodTime;
		this.sender = sender;
	}

	public void setPeriodTime(long periodTime) {
		this.periodTime = periodTime;
	}

	public void setSender(SmsSender sender) {
		this.sender = sender;
	}

	@Override
	public String toString() {
		return "SystemMoniter [periodTime=" + periodTime + ", sender=" + sender + "]";
	}

}
