package com.example.student.a0703simplelistactivity;

import java.io.Serializable;

/**
 * Created by student on 2017-07-03.
 */

public class Article implements Serializable{
    private String title;
    private String writer;
    private String content;

    public Article() {
    }

    public Article(String title, String writer, String content) {
        this.title = title;
        this.writer = writer;
        this.content = content;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {

        return title;
    }

    public String getWriter() {
        return writer;
    }

    public String getContent() {
        return content;
    }
}
