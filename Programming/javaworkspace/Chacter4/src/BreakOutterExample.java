
public class BreakOutterExample {

	public static void main(String[] args) {
		
		outter:
			for (char upper = 'A' ; upper <='Z'; upper++){
				for (char lower = 'a';lower<='z';lower++){
					System.out.println(upper+"-"+lower);
					if (lower == 'g'){
					//	break outter;
					//	goto goout;
					}
				}
			}
	goout:
	System.out.println("프로그램 종료");
	}

}
