
public class test {

	public static void main(String[] args) {

		int[] nums = { 10, 20 };

		System.out.println(nums[0]);
		System.out.println(nums[1]);

		swap(nums);

		System.out.println(nums[0]);
		System.out.println(nums[1]);

	}

	static void swap(int[] nums) {
		int temp;
		temp = nums[0];
		nums[0] = nums[1];
		nums[1] = temp;
	}


	
}
