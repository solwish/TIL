package bro;

import java.util.Scanner;

public class T03 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		Zsquare[] A = new Zsquare[3];

		int x1 = s.nextInt();
		int y1 = s.nextInt();
		int x2 = s.nextInt();
		int y2 = s.nextInt();
		int x3 = s.nextInt();
		int y3 = s.nextInt();
		int x4 = s.nextInt();
		int y4 = s.nextInt();
		int x5 = s.nextInt();
		int y5 = s.nextInt();
		int x6 = s.nextInt();
		int y6 = s.nextInt();

		// 작성
		A[0] = new Zsquare(x1, y1, x2, y2);
		A[1] = new Zsquare(x3, y3, x4, y4);
		A[2] = new Zsquare(x5, y5, x6, y6);

		int x, y, z;
		x = douPart(A[0], A[1]);
		y = douPart(A[0], A[2]);
		z = douPart(A[1], A[2]);
		int ans = (A[0].x2 - A[0].x1) * (A[0].y1 - A[0].y3);
		ans = ans - x - y + z;
		System.out.println(ans);
	}

	// 2부분 겹치는 곳 찾기
	static int douPart(Zsquare A, Zsquare B) {
		int len = 0, high = 0;
		int ss = 0;

		if (A.x1 < B.x1 && B.x1 < A.x4) {
			if (B.y1 < A.y1 && B.y1 > A.y3) {
				B.x4 = A.x4;
				B.y4 = A.y4;
				B.x2 = A.x4;
				B.y3 = A.y4;
			} else if (B.y3 < A.y1 && B.y3 < A.y3) {
				B.x2 = A.x2;
				B.y2 = A.y2;
				B.y1 = A.y2;
				B.x4 = A.x2;
			}
			len = B.x2 - B.x1;
			high = B.y1 - B.y3;
		} else if (A.x1 < B.x2 && B.x2 < A.x2) {
			if (B.y4 < A.y1 && B.y4 > A.y3) {
				B.x1 = A.x1;
				B.y1 = A.y1;
				B.y2 = A.y1;
				B.x3 = A.x1;
			} else if (B.y2 < A.y1 && B.y2 > A.y3) {
				B.x3 = A.x3;
				B.y3 = A.y3;
				B.x1 = A.x3;
				B.y4 = A.y3;
			}
			len = B.x2 - B.x1;
			high = B.y1 - B.y3;
		}
		if (A.x1 == B.x1 && A.y1 == B.y1 && A.x4 == B.x4 && A.y4 == B.y4) {
			len = B.x2 - B.x1;
			high = B.y1 - B.y3;
		}
		ss = len * high;
		return ss;
	}

	static class Zsquare {
		int x1, y1, x2, y2;
		int x3, y3, x4, y4;
		public Zsquare(int x3, int y3, int x2, int y2) {
			this.x1 = x3;
			this.y1 = y2;
			this.x2 = x2;
			this.y2 = y2;
			this.x3 = x3;
			this.y3 = y3;
			this.x4 = x2;
			this.y4 = y3;
		}
	}

}
