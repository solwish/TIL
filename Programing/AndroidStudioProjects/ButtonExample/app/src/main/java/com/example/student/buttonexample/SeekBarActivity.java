package com.example.student.buttonexample;

import android.graphics.Color;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.SeekBar;

import static com.example.student.buttonexample.R.id.seekBarB;

public class SeekBarActivity extends AppCompatActivity {


     SeekBar seekBar;
    LinearLayout layout;
    EditText editText;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_seek_bar);

        seekBar = (SeekBar)findViewById(seekBarB);
        layout = (LinearLayout)findViewById(R.id.layout);
        editText = (EditText)findViewById(R.id.editText);

        seekBar.setOnSeekBarChangeListener(
                new SeekBar.OnSeekBarChangeListener() {
                    @Override
                    public void onProgressChanged(SeekBar seekBar, int i, boolean b) {
                        if(b) {

                            layout.setBackgroundColor(Color.rgb(i, 0, 0));
                       //     editText.setText("현재값 : " + i);
                            editText.setText(""+i);
                       //     editText.setText(String.valueOf(i));

                        }

                    }

                    @Override
                    public void onStartTrackingTouch(SeekBar seekBar) {

                    }

                    @Override
                    public void onStopTrackingTouch(SeekBar seekBar) {

                    }
                }
        );
    }

    public void seekClick(View view) {
        int value = seekBar.getProgress();
        if(view.getId() == R.id.minus){
                value -= 5;

        }else if(view.getId() == R.id.plus){
            value += 5;
        }else{}

        if (value>255){
            value=255;
        }
        if (value<0){
            value=0;
        }

        seekBar.setProgress(value);
        layout.setBackgroundColor(Color.rgb(value, 0, 0));
        //     editText.setText("현재값 : " + i);
        editText.setText(""+value);
    }


}
