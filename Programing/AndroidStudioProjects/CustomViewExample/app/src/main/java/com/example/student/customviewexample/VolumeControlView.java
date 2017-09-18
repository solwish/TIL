package com.example.student.customviewexample;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.support.annotation.Nullable;
import android.support.v7.widget.AppCompatImageView;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

/**
 * Created by student on 2017-06-30.
 */

public class VolumeControlView
        extends AppCompatImageView implements View.OnTouchListener {




    private double angle = 0.0;
    private KnobListener listener;
    float x, y;
    float mx, my;

    public  interface KnobListener {
        public void onChanged(double angle);
    }

    public void setKnobListener(KnobListener lis){
        listener = lis;
    }

    public VolumeControlView(Context context) {
        super(context);
        this.setImageResource(R.drawable.knob);
        this.setOnTouchListener(this);
    }

    public VolumeControlView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        this.setImageResource(R.drawable.knob);
        this.setOnTouchListener(this);
    }



    @Override
    public boolean onTouch(View view, MotionEvent motionEvent) {
        x = motionEvent.getX();
        y = motionEvent.getY();
        angle = getAngle(x, y);
        listener.onChanged(angle);

        invalidate();
    /*    if(listener != null){
            listener.onChanged(angle);
        }*/
        return true; //다음녀석 처리하지 마라
    }

    @Override
    protected void onDraw(Canvas canvas) {

        Paint paint = new Paint();
        canvas.save();

        canvas.rotate((float)angle, getWidth()/2, getHeight()/2);
        super.onDraw(canvas);
        canvas.restore();
    }

    private double getAngle(float x, float y) {
        mx = x - (getWidth()/2.0f);
        my = (getHeight()/ 2.0f)-y;

        double degree = Math.atan2(mx, my) * 180.0 / 3.141592;
        return degree;
    }

}
