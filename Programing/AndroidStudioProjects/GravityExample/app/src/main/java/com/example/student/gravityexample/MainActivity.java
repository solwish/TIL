package com.example.student.gravityexample;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    Button b1;
    Button b2;

    EditText t1;
    EditText t2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        b1 = (Button)findViewById(R.id.ok);
        t1 = (EditText)findViewById(R.id.editText);
        t2 = (EditText)findViewById(R.id.editText2);
    }

    public void idcheck(View view){

        if(t1.toString().equals("test")){
            if(t2.toString().equals("1234")) {
                setContentView(R.layout.login);
            }

        }
    }

    public void reset(View view){
        t1.setText("");
        t2.setText("");
    }

}
