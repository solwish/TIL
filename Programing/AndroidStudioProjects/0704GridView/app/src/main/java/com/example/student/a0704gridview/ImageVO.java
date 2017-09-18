package com.example.student.a0704gridview;

/**
 * Created by student on 2017-07-04.
 */

public class ImageVO {
    int id;
    String name;

    public ImageVO(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public ImageVO() {

    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "ImageVO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
