package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class PadobanSeries {

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int T = Integer.parseInt(br.readLine());
    long[] A = new long[101];

    for (int i = 0; i <= 3; i++)
      A[i] = 1;
    A[4] = 2;
    A[5] = 2;

    for (int i = 6; i <= 100; i++) {
      A[i] = A[i - 1] + A[i - 5];
    }

    for (int t_case = 1; t_case <= T; t_case++) {
      int N = Integer.parseInt(br.readLine());

      System.out.println("#" + t_case + " " + A[N]);
    }
  }

}
