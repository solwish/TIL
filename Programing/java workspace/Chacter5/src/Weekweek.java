import java.util.Calendar;

public class Weekweek {

	public static void main(String[] args) {
		
	Week today = null;
	
	Calendar cal = Calendar.getInstance();
	int week = cal.get(Calendar.DAY_OF_WEEK);
	
//	today=9; 오류뜸 convert 변환해줄수없다하네
	
	
	switch (week) {
	case 1:
		today = Week.SUNDAY;
		break;
	case 2:
		today = Week.MONDAY;
		break;
	case 3:
		today = Week.TUESDAY;
		break;	
	case 4:
		today = Week.WEDNESDAY;
		break;	
	case 5:
		today = Week.THURSDAY;
		break;	
	case 6:
		today = Week.FRIDAY;
		break;	
	case 7:
		today = Week.SATURDAY;
		break;
	}
	
	
	System.out.println("오늘요일은 "+today);
		
	
	if (today==Week.TUESDAY){
	System.out.println("화욜ㄹㄹ");
	}
	
	}

}
