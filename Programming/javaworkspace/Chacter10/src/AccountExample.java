
public class AccountExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Account account = new Account();
		//예금하기
		account.deposit(10000);
		System.out.println("예금액: "+ account.getBalance());
		//출금하기
	    try {
			account.withdraw(30000);
		} catch (BalanceInsufficientException e) {
			// TODO: handle exception
			String message = e.getMessage();
			System.out.println(message);
		//	System.out.println(e);
			System.out.println();
			e.printStackTrace();
			
		}

	}

}
