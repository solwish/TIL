package com.example.student.customviewexample;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

import static android.R.attr.action;

/**
 * Created by student on 2017-06-30.
 */


    public class SingleTouchView extends View {
        private Paint paint = new Paint();
        private Path path = new Path();


        public SingleTouchView(Context context, @Nullable AttributeSet attrs) {
            super(context, attrs);

            paint.setAntiAlias(true);

            paint.setStrokeWidth(10f);
            paint.setColor(Color.BLUE);
            paint.setStyle(Paint.Style.STROKE);
            paint.setStrokeJoin(Paint.Join.ROUND);


        }

        @Override
        protected void onDraw(Canvas canvas) {
            canvas.drawPath(path, paint);
        }

        @Override
        public boolean onTouchEvent(MotionEvent event) {
            float eventX = event.getX();
            float eventY = event.getY();

            switch (action) {
                case MotionEvent.ACTION_DOWN:
                    path.moveTo(eventX, eventY);

                    break;
                case MotionEvent.ACTION_MOVE:
                    path.lineTo(eventX, eventY);
                    break;
                case MotionEvent.ACTION_UP:
                    // path.moveTo(eventX, eventY);
                    break;
                default:
                    return false;

            }
            invalidate();
            return true;
        }


    }
