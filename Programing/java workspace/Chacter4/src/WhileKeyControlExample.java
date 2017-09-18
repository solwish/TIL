
public class WhileKeyControlExample {

	public static void main(String[] args) throws Exception {

		boolean run = true;
		int speed = 0;
		int keyCode = 0;

		while (run) {
			if (keyCode != 13 && keyCode != 10) {
				System.out.println("-----");
				System.out.println("1.증속 | 2.감속 | 3.중지");
				System.out.println("------");
				System.out.println("당신의 선택은: ");
			}

			keyCode = System.in.read();

			switch (keyCode) {
			case '1':
				speed++;
				System.out.println("현재속도= " + speed);
				break;
			case '2':
				speed--;
				System.out.println("현재속도= " + speed);
				break;
			case '3':
				run = false;
				break;
			}

			/*
			 * if (keyCode == '1') {// 1 speed++; System.out.println("현재속도= " +
			 * speed); } else if (keyCode == '2') {// 2 speed--;
			 * System.out.println("현재속도= " + speed); } else if (keyCode == '3')
			 * {// 3 run = false;
			 * 
			 * }
			 */

		}
		System.out.println("프로그램 종료");
	}
}
