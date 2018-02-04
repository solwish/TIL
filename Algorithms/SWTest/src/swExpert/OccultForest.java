package swExpert;

import java.util.Scanner;

public class OccultForest {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int T = sc.nextInt();

    for (int t_case = 1; t_case <= T; t_case++) {
      int N = sc.nextInt();
      int M = sc.nextInt();
      int a = 0;
      int b = 0;

      for (int i = 0; i <= M; i++) {
        a = i;
        b = M - i;

        if (a + 2 * b == N)
          break;
      }
      System.out.println("#" + t_case + " " + a + " " + b);
    }
  }

}
