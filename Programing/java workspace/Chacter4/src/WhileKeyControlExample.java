
public class WhileKeyControlExample {

	public static void main(String[] args) throws Exception {

		boolean run = true;
		int speed = 0;
		int keyCode = 0;

		while (run) {
			if (keyCode != 13 && keyCode != 10) {
				System.out.println("-----");
				System.out.println("1.���� | 2.���� | 3.����");
				System.out.println("------");
				System.out.println("����� ������: ");
			}

			keyCode = System.in.read();

			switch (keyCode) {
			case '1':
				speed++;
				System.out.println("����ӵ�= " + speed);
				break;
			case '2':
				speed--;
				System.out.println("����ӵ�= " + speed);
				break;
			case '3':
				run = false;
				break;
			}

			/*
			 * if (keyCode == '1') {// 1 speed++; System.out.println("����ӵ�= " +
			 * speed); } else if (keyCode == '2') {// 2 speed--;
			 * System.out.println("����ӵ�= " + speed); } else if (keyCode == '3')
			 * {// 3 run = false;
			 * 
			 * }
			 */

		}
		System.out.println("���α׷� ����");
	}
}
