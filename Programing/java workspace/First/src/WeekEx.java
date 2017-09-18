import java.util.Calendar;

public class WeekEx {

	public static void main(String[] args) {

		
		Week today=null;
		
		Calendar cal =Calendar.getInstance();
		int i = cal.get(Calendar.DAY_OF_WEEK);
		
		switch (i){
		case 3:
			today = Week.tuesday;
		case 4:
			today = Week.wednesday;
		}
		
		System.out.println(today);
		
	}

	@Override
	public String toString() {
		return "WeekEx []";
	}

}
