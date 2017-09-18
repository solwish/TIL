package com.example.student.a0704gridview;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by student on 2017-07-04.
 */

public class ImageAdapter extends BaseAdapter {
    private Context context;
    int layout;
    ArrayList<ImageVO> images;
  //  int[] images;

    LayoutInflater inflater;


    ImageAdapter(Context context, int layout, ArrayList<ImageVO> images) {
        this.context = context;
        this.layout = layout;
        this.images = images;

        // 레이아웃 인플레이터 얻기
        inflater =(LayoutInflater)context.getSystemService(
                Context.LAYOUT_INFLATER_SERVICE);
    }

    @Override
    public int getCount() {
        return images.size();
    }

    @Override
    public Object getItem(int i) {
        return images.get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        if(view == null) {
            view = inflater.inflate(layout, viewGroup, false);
        }
        TextView title = (TextView)view.findViewById(R.id.textView);
        ImageView pig = (ImageView)view.findViewById(R.id.imageView);
        ImageVO image = (ImageVO) getItem(i);
        title.setText(image.getName());
        pig.setImageResource(image.getId());
        return view;

       /* ImageView imageView = (ImageView) view;
        if (imageView == null) {
            imageView = new ImageView(context);
            imageView.setLayoutParams(new GridView.LayoutParams(150, 150));
            imageView.setAdjustViewBounds(false);
            imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
        }
        imageView.setImageResource(images[i]);
        return imageView;*/
    }
}
