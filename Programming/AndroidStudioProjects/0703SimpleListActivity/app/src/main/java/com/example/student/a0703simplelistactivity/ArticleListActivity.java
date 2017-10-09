package com.example.student.a0703simplelistactivity;

import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;

public class ArticleListActivity extends ListActivity {


    ArrayList<Article> list;
    ArticleAdapter adapter;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

       // setContentView(R.id.); // 테스트 데이터 구축
        list = new ArrayList<>();
        list.add(new Article("제목 테스트 1", "홍길동", "테스트 1 내용"));
        list.add(new Article("제목 테스트 2", "홍길동", "테스트 2 내용"));
        list.add(new Article("제목 테스트 3", "홍길동", "테스트 3 내용"));
        list.add(new Article("제목 테스트 4", "홍길동", "테스트 4 내용"));
        list.add(new Article("제목 테스트 5", "홍길동", "테스트 5 내용"));
        list.add(new Article("제목 테스트 6", "홍길동", "테스트 6 내용"));
        list.add(new Article("제목 테스트 7", "홍길동", "테스트 7 내용"));
        //       ListView listView = (ListView) findViewById(R.id.list);

        adapter = new ArticleAdapter(this,
                R.layout.item_text_1,
                list);
        setListAdapter(adapter);
        //      listView.setAdapter(adpater);


      /*  listView.setOnItemClickListener(
                new AdapterView.OnItemClickListener() {
                    @Override
                    public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                        String selectStr = list.get(i).toString();
                        Toast.makeText(getApplicationContext(), "선택 : " + selectStr, Toast.LENGTH_SHORT).show();
                    }
                });*/


    }

    final static int ACT_EDIT = 1;

    @Override
    protected void onListItemClick(ListView l, View v, int position, long id) {
        String selectStr = list.get(position).toString();
        Toast.makeText(getApplicationContext(), "선택 : " + selectStr, Toast.LENGTH_SHORT).show();
        Intent intent = new Intent(getApplicationContext(), ArticleEditActivity.class);
        intent.putExtra("index", position);
        intent.putExtra("article", list.get(position));


        startActivityForResult(intent, ACT_EDIT);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {

        switch (requestCode) {
            case ACT_EDIT:
                if (resultCode == RESULT_OK) {
                    list.set(data.getIntExtra("index", -1), (Article) data.getSerializableExtra("article"));
                    //세팅해줘야쥐ㅔ 여기 뭔가 이상해해
                    adapter.notifyDataSetChanged(); //화면갱신

                }
        }
    }
}

