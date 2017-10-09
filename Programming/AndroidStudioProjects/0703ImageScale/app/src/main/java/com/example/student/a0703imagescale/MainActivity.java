package com.example.student.a0703imagescale;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ScaleGestureDetector;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(new MyImageView(this));
    }

    public class MyImageView extends View {
        private Drawable image;

        GestureDetector doubleTap;
        private ScaleGestureDetector gestureDetector;
        private float scale = 1.0f;

        public MyImageView(Context context){
                super(context);
                image = context.getResources().getDrawable(R.drawable.starbucks);
                setFocusable(true);
                image.setBounds(0,0, image.getIntrinsicWidth(), image.getIntrinsicHeight());
                gestureDetector = new ScaleGestureDetector(context, new ScaleListener());

            doubleTap = new GestureDetector(context, new GestureListener());
        }

        @Override
        protected void onDraw(Canvas canvas) {
            super.onDraw(canvas);
            canvas.save();
            canvas.scale(scale, scale);
            image.draw(canvas);
            canvas.restore();
        }

        @Override
        public boolean onTouchEvent(MotionEvent event) {
            gestureDetector.onTouchEvent(event);

            doubleTap.onTouchEvent(event);

            invalidate();
            return true;
        }

        private class GestureListener extends GestureDetector.SimpleOnGestureListener{
            @Override
            public boolean onDoubleTap(MotionEvent e) {
                scale = 1.0f;
                invalidate();
                return true;
            }
        }

        private class ScaleListener extends ScaleGestureDetector.SimpleOnScaleGestureListener{
            @Override
            public boolean onScale(ScaleGestureDetector detector) {
                scale *= detector.getScaleFactor();
                if(scale <0.1f)
                    scale = 0.1f;
                if(scale>10.0f)
                    scale = 10.0f;
                invalidate();
                return true;
            }
        }
    }
}
