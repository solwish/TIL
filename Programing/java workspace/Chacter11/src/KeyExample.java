import java.util.HashMap;

public class KeyExample {

	public static void main(String[] args) {

//		Key k1 = new Key(10);
//		
//		System.out.println(k1.hashCode());//10������ ǥ��
//		System.out.println(k1.toString());//16������ ǥ��
		
		HashMap<Key, String> hashMap = new HashMap<Key, String>();
		//new key(1)�� ȫ�浿�� ������
		hashMap.put(new Key(1), "ȫ�浿");
		
		//�ĺ�Ű "new Key(11)"�� "ȫ�浹"�� �о��
		String value = hashMap.get(new Key(1));
		System.out.println(value);
		
		Object obj = new Object();
		System.out.println(obj);
		System.out.println(obj.hashCode());

	}

}
