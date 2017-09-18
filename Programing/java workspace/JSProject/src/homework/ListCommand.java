package homework;

public class ListCommand implements Command {

	@Override
	public void execute() {
		System.out.println("------------");
		System.out.println("1.회원 ID 출력");
		System.out.println("2.맴버 ID 검색");
		System.out.println("3.프로그램 종료");
		//리스트 추가시 입력
		System.out.println("------------");

	}

}
