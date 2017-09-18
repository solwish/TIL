package com.example.student.hello;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onClick(View view) {

        setContentView(R.layout.activity_main2);

        //   Intent intent = new Intent( Intent.ACTION_VIEW,
     //           Uri.parse("tel:010-1111-1111"));
     //   startActivity(intent);
    }
}
