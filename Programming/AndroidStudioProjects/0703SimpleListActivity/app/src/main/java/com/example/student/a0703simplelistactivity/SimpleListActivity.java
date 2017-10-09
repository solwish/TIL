package com.example.student.a0703simplelistactivity;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;


public class SimpleListActivity extends AppCompatActivity {

    String[] items = {
            "Java", "Oracle", "HTML5", "CSS3", "Javascript",
            "jQuery", "JSP/Servlet", "Spring", "Android"

    };


    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_simple_list);
        ListView listView = (ListView) findViewById(R.id.list);

        ArrayAdapter<String> adapter = new ArrayAdapter<>(this,
                android.R.layout.simple_list_item_1,
 //               R.layout.item_text_1,
                items);
        listView.setAdapter(adapter);


        listView.setChoiceMode(ListView.CHOICE_MODE_SINGLE);


        listView.setOnItemClickListener(
                new AdapterView.OnItemClickListener() {
                    @Override
                    public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                        String selectStr = items[i];
                        Toast.makeText(getApplicationContext(), "선택 : " + selectStr, Toast.LENGTH_SHORT).show();
                    }
                });
    }


}