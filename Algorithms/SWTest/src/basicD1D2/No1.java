package basicD1D2;

import java.util.Scanner;

public class No1 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int T = sc.nextInt();

    for (int t_case = 1; t_case <= T; t_case++) {
      int a = sc.nextInt();
      int b = sc.nextInt();
      int c = sc.nextInt();
      int ans = 0;
      ans = (a == b) ? c : (b == c ? a : b);

      System.out.println("#" + t_case + " " + ans);
    }
  }
}
