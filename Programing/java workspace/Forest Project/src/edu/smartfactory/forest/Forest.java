package edu.smartfactory.forest;

import java.util.Scanner;

import javax.swing.Spring;

import edu.smartfactory.forest.service.MemberService;

public class Forest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		MemberService memberService = MemberService.getInstance();
		
		memberService.print();
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("���̵� �Է��ϼ���");
		
		String iddd = scanner.nextLine();
		
		//memberService.findMember(iddd);
//		if(memberService.findMember(iddd)==null){
//			System.out.println("ã�� ȸ���� �����ϴ�.");
//		}else{
//			System.out.println("ã�ҽ��ϴ�"+iddd);
//			
//		}
		
	}

	@Override
	public String toString() {
		return "Forest [getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}

}
