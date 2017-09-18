package com.example.student.buttonexample;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import java.util.HashMap;

public class MainActivity extends AppCompatActivity {

    HashMap<Integer, Class> map;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        map = new HashMap<>();
        map.put(R.id.radioButton, RadioButtonActivity.class);
        map.put(R.id.toggleButton, ToggleButtonActivity.class);
        map.put(R.id.ratingBar, RatingBarActivity.class);
        map.put(R.id.button, SeekBarActivity.class);
    }

    public  void onClick(View view){

        Class clazz = map.get(view.getId());

        Intent intent = new Intent(this, clazz);
        startActivity(intent);
    }


  /*  public void onRadio(View view){
        Intent intent = new Intent(this, RadioButtonActivity.class );
        startActivity(intent);

    }

    public  void  gotoToggle(View view) {
        Intent intent = new Intent(getApplicationContext(), ToggleButtonActivity.class);
        startActivity(intent);
    }

    public  void  gotoRatingBar(View view) {
        Intent intent = new Intent(getApplicationContext(), RatingBarActivity.class);
        startActivity(intent);
    }*/


}
