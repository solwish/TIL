import java.util.HashMap;

public class KeyExample {

	public static void main(String[] args) {

//		Key k1 = new Key(10);
//		
//		System.out.println(k1.hashCode());//10진수로 표시
//		System.out.println(k1.toString());//16진수로 표시
		
		HashMap<Key, String> hashMap = new HashMap<Key, String>();
		//new key(1)로 홍길동을 저장함
		hashMap.put(new Key(1), "홍길동");
		
		//식별키 "new Key(11)"로 "홍길돌"을 읽어옴
		String value = hashMap.get(new Key(1));
		System.out.println(value);
		
		Object obj = new Object();
		System.out.println(obj);
		System.out.println(obj.hashCode());

	}

}
