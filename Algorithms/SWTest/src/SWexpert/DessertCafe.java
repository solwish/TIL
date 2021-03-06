package swExpert;

import java.util.Scanner;

public class DessertCafe {
	int Answer;
	int N;
	int map[][] = new int[20][20];
	boolean isVisit[] = new boolean[101];

	void visitClear() {
		for (int i = 0; i < 101; i++) {
			isVisit[i] = false;
		}
	}

	void init() {
		visitClear();
		Answer = -1;
	}

	void solve() {
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				for (int a = 1; a < N; a++) {
					for (int b = 1; b < N; b++) {
						if (j + a <= N - 1 && i + a + b <= N - 1 && j - b >= 0 && (a + b) * 2 > Answer) {
							visitClear();
							boolean isAble = true;
							int curi = i, curj = j;

							for (int n = 0; n < a; n++) {
								curi++;
								curj++;
								if (!isVisit[map[curi][curj]]) {
									isVisit[map[curi][curj]] = true;
								} else {
									isAble = false;
									break;
								}
							}
							if (!isAble)
								continue;

							for (int n = 0; n < b; n++) {
								curi++;
								curj--;
								if (!isVisit[map[curi][curj]])
									isVisit[map[curi][curj]] = true;
								else {
									isAble = false;
									break;
								}
							}
							if (!isAble)
								continue;

							for (int n = 0; n < a; n++) {
								curi--;
								curj--;
								if (!isVisit[map[curi][curj]])
									isVisit[map[curi][curj]] = true;
								else {
									isAble = false;
									break;
								}
							}
							if (!isAble)
								continue;

							for (int n = 0; n < b; n++) {
								curi--;
								curj++;
								if (!isVisit[map[curi][curj]])
									isVisit[map[curi][curj]] = true;
								else {
									isAble = false;
									break;
								}
							}
							if (!isAble)
								continue;

							Answer = 2 * (a + b);
						}
					}
				}
			}
		}
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for (int test_case = 0; test_case < T; test_case++) {

			DessertCafe dsCafe = new DessertCafe();
			dsCafe.init();

			dsCafe.N = sc.nextInt();
			for (int i = 0; i < dsCafe.N; i++) {
				for (int j = 0; j < dsCafe.N; j++) {
					dsCafe.map[i][j] = sc.nextInt();
				}
			}

			dsCafe.solve();

			System.out.println("#" + (test_case + 1) + " " + dsCafe.Answer);
		}
	}
}
