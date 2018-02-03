package swExpert;

import java.util.Scanner;

public class TripleSum {

  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);
    int T = sc.nextInt();

    for (int t_case = 1; t_case <= T; t_case++) {
      long sum = 0;

      long N = sc.nextInt();
      sum = (N * (N + 1)) / 2;

      System.out.println("#" + t_case + " " + sum + " " + (2 * sum - N) + " " + 2 * sum);
    }
  }

}
