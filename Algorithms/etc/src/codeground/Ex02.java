package codeground;

import java.util.Arrays;
import java.util.Scanner;

public class Ex02 {
  static int Answer;

  public static void main(String args[]) throws Exception {
    Scanner sc = new Scanner(System.in);
    int T = sc.nextInt();

    for (int test_case = 0; test_case < T; test_case++) {
      Answer = 0;
      int n = sc.nextInt();
      int max = 0;
      int[] A = new int[n];
      for (int i = 0; i < n; i++)
        A[i] = sc.nextInt();
      Arrays.sort(A);

      int[] nextScore = new int[n];
      for (int i = 0; i < n; i++) {
        nextScore[i] = A[i] + (n - i);
        if (nextScore[i] > max)
          max = nextScore[i];
      }
      for (int i = 0; i < n; i++)
        if (A[i] >= (max - n))
          Answer++;

      System.out.println("Case #" + (test_case + 1));
      System.out.println(Answer);
    }
  }

}
