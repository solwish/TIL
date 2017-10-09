package com.example.student.imagebutton;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onClick(View target) {
        Toast.makeText(getApplicationContext(), "버튼이 눌려졌습니다.", Toast.LENGTH_SHORT).show();

    }
}
