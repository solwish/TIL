package com.example.student.imgexample2;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.relative_layout);
    }

    //자원은 정수 형식임
    int[] images = {

    R.drawable.a,
    R.drawable.b,
    R.drawable.c,
    R.drawable.d,



    };

    int imageIndex = 0;

    public void left (View view) {
        imageIndex --;
        if (imageIndex <0)
            imageIndex = images.length-1;

        ImageView imageView = (ImageView) findViewById(R.id.imgview);
        imageView.setImageResource(images[imageIndex]);
    }

    public void right(View view) {
        imageIndex ++;
        if (imageIndex >= images.length)
            imageIndex = 0;
        ImageView imageView = (ImageView) findViewById(R.id.imgview);
        imageView.setImageResource(images[imageIndex]);

    }

}
