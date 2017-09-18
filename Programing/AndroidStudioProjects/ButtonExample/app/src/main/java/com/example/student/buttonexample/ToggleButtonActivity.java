package com.example.student.buttonexample;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Switch;
import android.widget.Toast;
import android.widget.ToggleButton;

public class ToggleButtonActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_toggle_button);
    }

    public  void onToggle(View view){
        boolean on =((ToggleButton)view).isChecked();

        if(on){
            Toast.makeText(getApplicationContext(), "checked", Toast.LENGTH_SHORT).show();
        }else {
            Toast.makeText(getApplicationContext(), "not checked", Toast.LENGTH_SHORT).show();
        }
    }

    public  void onSwitch(View view){
        boolean on =((Switch)view).isChecked();

        if(on){
            Toast.makeText(this, "checked", Toast.LENGTH_SHORT).show();
        }else {
            Toast.makeText(this, "not checked", Toast.LENGTH_SHORT).show();
        }
    }
}
