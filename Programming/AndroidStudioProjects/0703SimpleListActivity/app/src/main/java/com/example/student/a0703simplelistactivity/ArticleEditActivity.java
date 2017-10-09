package com.example.student.a0703simplelistactivity;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;

public class ArticleEditActivity extends AppCompatActivity {


    EditText editTi;
    EditText editWr;
    EditText editCon;
    Article article;
    int index;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_article_edit);


        editTi = (EditText) findViewById(R.id.title_edit);
        editWr = (EditText) findViewById(R.id.writer_edit);
        editCon = (EditText) findViewById(R.id.content_edit);
        Intent intent = getIntent();

        article = (Article) intent.getSerializableExtra("article");
        intent.getIntExtra("index", -1);

        editTi.setText(article.getTitle());
        editWr.setText(article.getWriter());
        editCon.setText(article.getContent());

    }

    public void onResponse(View view) {
        new AlertDialog.Builder(this)
                .setTitle("대화상자")
                .setMessage("저장하시겠습니까?")
                .setPositiveButton("예", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        Intent intent = new Intent();


                        article.setTitle(editTi.getText().toString());
                        article.setWriter(editWr.getText().toString());
                        article.setContent(editCon.getText().toString());

                        intent.putExtra("articleOut", article);
                        intent.putExtra("index", index);

                        setResult(RESULT_OK, intent);
                        finish();
                    }
                }).setNegativeButton("아니오", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
            }
        }).show();
    }


    public void onCancel(View view) {
        // 취소 상태로 종료하기
        setResult(RESULT_CANCELED);
        finish();
    }


}
