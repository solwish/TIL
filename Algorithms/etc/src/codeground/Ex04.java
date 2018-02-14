package codeground;

import java.util.Scanner;

class Axis {
  int x, y;

  public Axis(int x, int y) {
    this.x = x;
    this.y = y;
  }
}

public class Ex04 {
  static int Answer;
  static int A, B, C, D, E, N;

  public static void main(String args[]) throws Exception {
    Scanner sc = new Scanner(System.in);
    int[] score = { 6, 13, 4, 18, 1, 20, 5, 12, 9, 14, 11, 8, 16, 7, 19, 3, 17, 2, 15, 10 };

    int T = sc.nextInt();
    for (int test_case = 0; test_case < T; test_case++) {
      Answer = 0;
      A = sc.nextInt();
      B = sc.nextInt();
      C = sc.nextInt();
      D = sc.nextInt();
      E = sc.nextInt();
      N = sc.nextInt();
      Axis[] axis = new Axis[N];
      for (int i = 0; i < N; i++)
        axis[i] = new Axis(sc.nextInt(), sc.nextInt());
      double[] length = new double[N];
      for (int i = 0; i < N; i++)
        length[i] = Math.sqrt(axis[i].x * axis[i].x + axis[i].y * axis[i].y);

      int[] tmp = new int[N];

      for (int i = 0; i < N; i++)
        if (length[i] <= A)
          tmp[i] = -1;
        else if (length[i] <= B)
          tmp[i] = 1;
        else if (length[i] <= C)
          tmp[i] = 3;
        else if (length[i] <= D)
          tmp[i] = 1;
        else if (length[i] <= E)
          tmp[i] = 2;
        else
          tmp[i] = 0;

      for (int i = 0; i < N; i++) {
        double theta = Math.atan(axis[i].y / (double) axis[i].x);
        theta *= (180 / Math.PI);
        if (axis[i].x < 0)
          theta += 180;
        theta += 9;
        theta = (theta + 360) % 360;
        int t = (int) (theta / 18);
        if (tmp[i] == -1)
          Answer += 50;
        else
          Answer += tmp[i] * score[t];
      }

      System.out.println("Case #" + (test_case + 1));
      System.out.println(Answer);
    }
  }
}
