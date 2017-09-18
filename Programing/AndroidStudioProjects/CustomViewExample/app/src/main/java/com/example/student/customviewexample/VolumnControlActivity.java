package com.example.student.customviewexample;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

public class VolumnControlActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_volumn_control);

        VolumeControlView view = (VolumeControlView)findViewById(R.id.volume);
        final TextView textView = (TextView)findViewById(R.id.text123);

        view.setKnobListener(new VolumeControlView.KnobListener() {
            @Override
            public void onChanged(double angle) {
                textView.setText(String.valueOf(angle));

                if(angle>0){
                    //오른쪽
                }else
                    ;//왼쪽
            }
        });
    }
}
