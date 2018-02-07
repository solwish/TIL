package basicD1D2;

import java.util.Scanner;

public class HealthManagement {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int T = sc.nextInt();
    long L = 0, U = 0, X = 0;
    long ans;

    for (int t_case = 1; t_case <= T; t_case++) {
      L = sc.nextLong();
      U = sc.nextLong();
      X = sc.nextLong();

      ans = (X < L) ? (L - X) : ((L <= X && X <= U) ? 0 : -1);
      System.out.println("#" + t_case + " " + ans);
    }
  }
}
