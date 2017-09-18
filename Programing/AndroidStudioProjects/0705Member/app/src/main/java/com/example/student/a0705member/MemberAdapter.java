package com.example.student.a0705member;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Adapter;
import android.widget.BaseAdapter;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by student on 2017-07-05.
 */

public class MemberAdapter extends BaseAdapter implements Adapter {
    Context context;  //startActivity의 메서드가지고 있음
    int layout;
    ArrayList<MemberVO> list;

    LayoutInflater inflater;

    public MemberAdapter(Context context, int layout, ArrayList<MemberVO> list) {
        this.context = context;
        this.layout = layout;
        this.list = list;

        // 레이아웃 인플레이터 얻기
        inflater =(LayoutInflater)context.getSystemService(
                Context.LAYOUT_INFLATER_SERVICE);
    }

    @Override
    public int getCount() {
        return list.size();
    }

    @Override
    public Object getItem(int i) {
        return list.get(i);
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

        TextView name = (TextView) view.findViewById(R.id.name);
        TextView phone = (TextView) view.findViewById(R.id.phone);
        ImageView genderIcon = (ImageView) view.findViewById(R.id.gendericon);

        ImageButton imgB = (ImageButton) view.findViewById(R.id.imageButton);
        imgB.setFocusable(false);
        imgB.setImageResource(android.R.drawable.stat_sys_phone_call);


        final MemberVO member = (MemberVO)getItem(i);

        name.setText(member.getName());
        phone.setText(member.getPhoneNum());


        if(member.getGender()=="여자"){
            if (member.getAge()<20){
                genderIcon.setImageResource(R.drawable.youngg);
            }else {
                genderIcon.setImageResource(R.drawable.oldg);
            }
        }else{
            if (member.getAge()<20){
                genderIcon.setImageResource(R.drawable.youngm);
            }else {
                genderIcon.setImageResource(R.drawable.oldm);
            }
        }



        imgB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent( Intent.ACTION_DIAL,
                        Uri.parse("tel:" + member.getPhoneNum()));


//                Log.i("e", "ddd");

                context.startActivity(intent);
            }
        });


        return view;



    }
}
