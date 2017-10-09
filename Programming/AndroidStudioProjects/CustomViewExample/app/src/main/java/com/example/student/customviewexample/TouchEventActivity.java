package com.example.student.customviewexample;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;

public class TouchEventActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        MyView myView = new MyView(this);
        setContentView(myView);
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);

        MyView myView = new MyView(this);
        setContentView(myView);
    }

    protected class MyView extends View {
        int x = 100;
        int y = 100;
        String str;

        public MyView(Context context) {
            super(context);
            setBackgroundColor(Color.YELLOW);
        }

        @Override
        protected void onDraw(Canvas canvas) {
            Paint paint = new Paint();
            paint.setColor(Color.MAGENTA);
            canvas.drawRect(x, y, x+100, y+100, paint);
            paint.setTextSize(50);
            canvas.drawText("액션의 종류 : " + str, 0, 100, paint);

            canvas.drawLine(sx,sy,ex,ey,paint);
        }

        int sx, sy, ex, ey;

        @Override
        public boolean onTouchEvent(MotionEvent event) {
            x= (int) event.getX();
            y = (int) event.getY();

            int action = event.getAction();
            switch(action) {
                case MotionEvent.ACTION_DOWN :
                    sx = x; sy = y;
                    str = "ACTION_DOWN";
                    break;
                case MotionEvent.ACTION_MOVE :
                    str = "ACTION_MOVE";
                    ex=x; ey = y;
                    break;
                case MotionEvent.ACTION_UP :
                    str = "ACTION_UP";
                    ex=x; ey = y;
                    break;

            }
            invalidate();
            return true;
        }
    }
}
