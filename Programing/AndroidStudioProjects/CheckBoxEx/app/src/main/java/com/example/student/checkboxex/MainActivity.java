package com.example.student.checkboxex;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText meatName;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        meat = (CheckBox)findViewById(R.id.meat);
        cheese = (CheckBox)findViewById(R.id.cheese);
        meatName = ((EditText)findViewById(R.id.choose_meat));
    }


    public void OnClick(View view) {
        boolean checked = ((CheckBox) view).isChecked();

        if(view.getId() == R.id.meat){
            if(checked){
                meatName.setEnabled(true);
                meatName.setVisibility(View.VISIBLE);
            }else{
                meatName.setText("");
                meatName.setEnabled(false);
                meatName.setVisibility(View.GONE);
            }
        }

        switch (view.getId()) {
            case R.id.meat:
                if (checked)
                    Toast.makeText(getApplicationContext(), "고기 선택", Toast.LENGTH_SHORT).show();
                else
                    Toast.makeText(getApplicationContext(), "고기 선택 안함", Toast.LENGTH_SHORT).show();
                break;
            case R.id.cheese:
                if (checked)
                    Toast.makeText(getApplicationContext(), "치즈 선택", Toast.LENGTH_SHORT).show();
                else
                    Toast.makeText(getApplicationContext(), "치즈 선택 안함", Toast.LENGTH_SHORT).show();
                break;

        }


    }

    CheckBox meat;
    CheckBox cheese;

    public  void Check(View view){
        String what = "";
        if(meat.isChecked())
            what += "고기";
        if(meat.isChecked())
            what += "치즈";
        Toast.makeText(this, what + "를 선택했습니다.", Toast.LENGTH_SHORT).show();
    }

    public void Clear(View view){
        meat.setChecked(false);
        cheese.setChecked(false);
        meatName.setText("");
        meatName.setVisibility(View.INVISIBLE);
    }


}
