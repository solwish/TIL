package com.example.student.customviewexample;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.MotionEvent;
import android.view.View;

public class CustomView1Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }


}

class MyView extends View {
    int key;
    String str;
    int x = -1, y = -1;
    //처음에 안뜨게 하려고

    public MyView(Context context) {
        super(context);
        setBackgroundColor(Color.YELLOW);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        x = (int) event.getX(0);
        y = (int) event.getY(0);
        invalidate();


        return super.onTouchEvent(event);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        if (x == -1) {
            super.onDraw(canvas);
        } else {
            Paint paint = new Paint();
            //    paint.setTextSize(60);
            paint.setColor(Color.RED);
            canvas.drawCircle(x, y, 100, paint);
            //       canvas.drawText("(" + x + "," + y + ") 에서 터치 이벤트가 발생하였음", x, y, paint);
        }
    }


}

