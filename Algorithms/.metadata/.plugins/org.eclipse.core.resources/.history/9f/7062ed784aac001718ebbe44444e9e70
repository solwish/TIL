package swExpert;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class ZcodeForStudy {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		// test case 10
		for (int i = 1; i <= 10; i++) {
			// read data
			String t = br.readLine();
			boolean[][] ladder = new boolean[100][100];
			int endPoint = 0;
			for (int j = 0; j < 100; j++) {
				String[] temp = br.readLine().split(" ");
				for (int k = 0; k < 100; k++) {
					switch (temp[k]) {
					case "1":
						ladder[j][k] = true;
						break;
					case "2":
						ladder[j][k] = true;
						endPoint = k;
						break;
					default:
						ladder[j][k] = false;
						break;
					}
				}
			}
			// 사다리 오르기
			int nowPoint = endPoint;
			int height = 99;
			while (height != 0) {
				ladder[height][nowPoint] = false;
				// 좌우 길 있는지 확인
				if (nowPoint - 1 >= 0 && ladder[height][nowPoint - 1]) {
					nowPoint--;
				} else if (nowPoint + 1 < 100 && ladder[height][nowPoint + 1]) {
					nowPoint++;
				} else {
					// 위로 오르기
					height--;
				}
			}
			System.out.println("#" + t + " " + nowPoint);
		} // end test case
	}// end main

}// end class