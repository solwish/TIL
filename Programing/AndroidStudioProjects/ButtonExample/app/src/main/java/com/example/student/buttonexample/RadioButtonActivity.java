package com.example.student.buttonexample;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.RadioButton;

public class RadioButtonActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_radio_button);
    }

    public void onColor(View view){
        boolean checked = ((RadioButton) view).isChecked();

        switch (view.getId()){
            case R.id.radioRed:
                if(checked){
                    ((LinearLayout)findViewById(R.id.layout)).setBackgroundColor(Color.RED);
                    break;
                }
            case R.id.radioBlue :
                if(checked){
                    ((LinearLayout)findViewById(R.id.layout)).setBackgroundColor(Color.BLUE);
                    break;
                }
            case R.id.radioYello :
                if(checked){
                    ((LinearLayout)findViewById(R.id.layout)).setBackgroundColor(Color.YELLOW);
                    break;
                }

        }
    }
}
