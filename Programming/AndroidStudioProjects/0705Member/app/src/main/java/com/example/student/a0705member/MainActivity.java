package com.example.student.a0705member;

import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends ListActivity{

    ArrayList<MemberVO> list;
    MemberAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);

        list = new ArrayList<>();
        list.add(new MemberVO("홍길동", 21, "010-1234-1234", "test1@naver.com", "남자"));
        list.add(new MemberVO("홍길동", 18, "010-1234-1234", "test1@naver.com", "여자"));
        list.add(new MemberVO("홍길동", 14, "010-1234-1234", "test1@naver.com", "남자"));
        list.add(new MemberVO("홍길동", 28, "010-1234-1234", "test1@naver.com", "여자"));
        list.add(new MemberVO("홍길동", 45, "010-1234-1234", "test1@naver.com", "남자"));
        list.add(new MemberVO("홍길동", 7, "010-1234-1234", "test1@naver.com", "여자"));
        list.add(new MemberVO("홍길동", 31, "010-1234-1234", "test1@naver.com", "여자"));

//        ListView listView = (ListView)findViewById(R.id.list);

        adapter = new MemberAdapter(this, R.layout.layout, list);
        setListAdapter(adapter);
//        listView.setAdapter(adapter);
    }



    final static int ACT_VIEW = 1;

//    @Override
//    protected void onListItemClick(ListView l, View v, int position, long id) {
//        Toast.makeText(getApplicationContext(), "선택 : " + position, Toast.LENGTH_SHORT).show();
//    }


    @Override
    protected void onListItemClick(ListView l, View v, int position, long id) {
        String selectStr = list.get(position).toString();


        Toast.makeText(getApplicationContext(), "선택 : " + selectStr, Toast.LENGTH_SHORT).show();
        Intent intent = new Intent(getApplicationContext(), MemberViewActivity.class);
        intent.putExtra("index", position);
        intent.putExtra("member", list.get(position));

        startActivityForResult(intent, ACT_VIEW);

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {

//        Toast.makeText(getApplicationContext(), data.getIntExtra("index", -1), Toast.LENGTH_LONG).show();
        switch (requestCode) {


            case ACT_VIEW:
//                Toast.makeText(getApplicationContext(), "췍포인트1_" + resultCode, Toast.LENGTH_LONG).show();

                if (resultCode == RESULT_OK) {
                    int index = data.getIntExtra("index", -1);
//                    Toast.makeText(getApplicationContext(), "췍포인트2_" + index, Toast.LENGTH_LONG).show();

                    if (!(index == -1)) {
                        list.set(index, (MemberVO) data.getSerializableExtra("member"));

                    }
                    adapter.notifyDataSetChanged(); //화면갱신

                }
        }
    }
}
