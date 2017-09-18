package com.example.student.a0705member;

import java.io.Serializable;

/**
 * Created by student on 2017-07-05.
 */

public class MemberVO implements Serializable {
    private String name;
    private int age;
    private String phoneNum;
    private String email;
    private String gender;

    public MemberVO() {
    }

    public MemberVO(String name, int age, String phoneNum, String email, String gender) {
        this.name = name;
        this.age = age;
        this.phoneNum = phoneNum;
        this.email = email;
        this.gender = gender;
    }



    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public String getEmail() {
        return email;
    }

    public String getGender() {
        return gender;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "MemberVO{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", phoneNum='" + phoneNum + '\'' +
                ", email='" + email + '\'' +
                ", gender='" + gender + '\'' +
                '}';
    }
}
