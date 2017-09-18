package com.example.student.buttonevent3;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button button1 = (Button) findViewById(R.id.button3);

        button1.setOnClickListener(this);

        Button button2 = (Button) findViewById(R.id.button4);
        button2.setOnClickListener(this);
    }

    public void onClick(View view){


        int id = view.getId();
        if(id==R.id.button3) {
            Toast.makeText(getApplicationContext(), "위쪽 버튼 눌림", Toast.LENGTH_SHORT).show();
        }else if(id==R.id.button4){
            Toast.makeText(getApplicationContext(), "아래쪽 버튼 눌림", Toast.LENGTH_SHORT).show();
        }else{
            Log.i("shit", "shit");
        }
    }
}
