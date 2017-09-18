package com.example.student.customviewexample;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        setContentView(new SingleTouchView(this, null));

    }

    public void onClick(View view){
        MyView w = new MyView(this);
        setContentView(w);
    }
    public void gotoVC(View view) {
        Intent intent = new Intent(this, TouchEventActivity.class);
        startActivity(intent);

    }
}
