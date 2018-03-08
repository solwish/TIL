package forReal;

public class ItsMyDay {

	public static void main(String[] args) {
		char ch[] = new char[27];
		int order[] = new int[14];

		for (int i = 97; i < 97 + 26; i++)
			ch[i - 96] = (char) i;

		order[1] = 9;
		order[2] = 20;
		order[3] = 19;
		order[4] = 13;
		order[5] = 25;
		order[6] = 2;
		order[7] = 9;
		order[8] = 18;
		order[9] = 20;
		order[10] = 8;
		order[11] = 4;
		order[12] = 1;
		order[13] = 25;

		for (int i = 1; i <= 13; i++)
			System.out.print(ch[order[i]]);

	}

}
