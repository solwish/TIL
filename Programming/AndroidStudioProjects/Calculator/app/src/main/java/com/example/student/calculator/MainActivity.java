package com.example.student.calculator;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {


    EditText num1;
    EditText num2;
    EditText re;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        num1 = (EditText) findViewById(R.id.editText1);
        num2 = (EditText) findViewById(R.id.editText2);
        re = (EditText) findViewById(R.id.editText3);
    }

    public void setView(View view) {
        setContentView(R.layout.keyboard);
    }


    public void onAdd(View view) {
        String a= num1.getText().toString();
        String b= num2.getText().toString();
        int c = Integer.parseInt(a) + Integer.parseInt(b);
        re.setText(String.valueOf(c));

    }

    public void onMinus(View view) {

        String a= num1.getText().toString();
        String b= num2.getText().toString();
        int c = Integer.parseInt(a) - Integer.parseInt(b);
        re.setText(String.valueOf(c));

        Log.i("Calcul", a +" - "+ b +" = "+c);

    }

    public void onMulti(View view) {
        String a= num1.getText().toString();
        String b= num2.getText().toString();
        int c = Integer.parseInt(a) * Integer.parseInt(b);
        re.setText(String.valueOf(c));
    }

    public void onDevide(View view) {
        String a= num1.getText().toString();
        String b= num2.getText().toString();
        int c = Integer.parseInt(a) / Integer.parseInt(b);
        re.setText(String.valueOf(c));
    }

    public void reset(View view) {
        num1.setText("");
        num2.setText("");
        re.setText("");
    }

}
