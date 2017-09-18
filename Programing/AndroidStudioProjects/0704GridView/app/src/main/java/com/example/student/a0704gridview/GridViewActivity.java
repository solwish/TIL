package com.example.student.a0704gridview;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.AdapterView;
import android.widget.GridView;

import java.util.ArrayList;

public class GridViewActivity extends AppCompatActivity {

    ArrayList<ImageVO> images;


//    {
//        R.drawable.picture1,
//                R.drawable.picture2,
//                R.drawable.picture3,
//                R.drawable.picture4,
//                R.drawable.picture5,
//                R.drawable.picture1,
//                R.drawable.picture2,
//                R.drawable.picture3,
//                R.drawable.picture4,
//                R.drawable.picture5,
//                R.drawable.picture1,
//                R.drawable.picture2,
//                R.drawable.picture3,
//                R.drawable.picture4,
//                R.drawable.picture5
//    };



    @Override
    protected void onCreate(Bundle savedInstanceState) {


        images = new ArrayList<>();
        images.add(new ImageVO(R.drawable.picture1, "사진1"));
        images.add(new ImageVO(R.drawable.picture2, "사진2"));
        images.add(new ImageVO(R.drawable.picture3, "사진3"));
        images.add(new ImageVO(R.drawable.picture4, "사진4"));
        images.add(new ImageVO(R.drawable.picture5, "사진5"));
        images.add(new ImageVO(R.drawable.picture1, "사진1"));
        images.add(new ImageVO(R.drawable.picture2, "사진2"));
        images.add(new ImageVO(R.drawable.picture3, "사진3"));
        images.add(new ImageVO(R.drawable.picture4, "사진4"));
        images.add(new ImageVO(R.drawable.picture5, "사진5"));
        images.add(new ImageVO(R.drawable.picture1, "사진1"));
        images.add(new ImageVO(R.drawable.picture2, "사진2"));
        images.add(new ImageVO(R.drawable.picture3, "사진3"));
        images.add(new ImageVO(R.drawable.picture4, "사진4"));
        images.add(new ImageVO(R.drawable.picture5, "사진5"));
        images.add(new ImageVO(R.drawable.picture1, "사진1"));
        images.add(new ImageVO(R.drawable.picture2, "사진2"));
        images.add(new ImageVO(R.drawable.picture3, "사진3"));
        images.add(new ImageVO(R.drawable.picture4, "사진4"));
        images.add(new ImageVO(R.drawable.picture5, "사진5"));
        images.add(new ImageVO(R.drawable.picture1, "사진1"));
        images.add(new ImageVO(R.drawable.picture2, "사진2"));
        images.add(new ImageVO(R.drawable.picture3, "사진3"));
        images.add(new ImageVO(R.drawable.picture4, "사진4"));
        images.add(new ImageVO(R.drawable.picture5, "사진5"));

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_grid_view);
        GridView grid = (GridView) findViewById(R.id.grid);

        ImageAdapter adpater = new ImageAdapter( this, R.layout.item_image_layout, images);

        grid.setAdapter(adpater);
        grid.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView,
                                    View view, int i, long l) {
                Intent intent = new Intent(getApplicationContext(), ImageViewActivity.class);
                intent.putExtra("imageId", images.get(i).getId());
                startActivity(intent);
            }
        });
    }
}
