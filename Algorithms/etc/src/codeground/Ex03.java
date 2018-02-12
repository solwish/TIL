package codeground;

import java.util.Arrays;
import java.util.Scanner;

public class Ex03 {

  static int Answer;

  public static void main(String args[]) throws Exception {

    Scanner sc = new Scanner(System.in);

    int T = sc.nextInt();
    for (int test_case = 0; test_case < T; test_case++) {
      Answer = 0;

      int N = sc.nextInt();
      int K = sc.nextInt();
      int[] score = new int[N];
      for (int i = 0; i < N; i++)
        score[i] = sc.nextInt();
      Arrays.sort(score);

      for (int i = 0; i < K; i++)
        Answer += score[N - 1 - i];

      System.out.println("Case #" + (test_case + 1));
      System.out.println(Answer);
    }
  }
}