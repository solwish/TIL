
public class AccountExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Account account = new Account();
		//�����ϱ�
		account.deposit(10000);
		System.out.println("���ݾ�: "+ account.getBalance());
		//����ϱ�
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
