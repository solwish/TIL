package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.util.StringTokenizer;

public class AddNum {

  public static void main(String[] args) throws Exception{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int T = Integer.parseInt(br.readLine());
    StringTokenizer s;
    
    for (int t_case = 1; t_case <= T; t_case++) {
      s = new StringTokenizer(br.readLine());
      BigInteger a = new BigInteger(s.nextToken());
      BigInteger b = new BigInteger(s.nextToken());
      BigInteger sum = a.add(b);
      
      System.out.println("#" + t_case + " " + sum);
    }
  }

}
