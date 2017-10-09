package com.example.student.a0703comunication;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;

public class Main2Activity extends AppCompatActivity {
    EditText editText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        editText = (EditText) findViewById(R.id.editText);

        Intent intent = getIntent();

        String in = intent.getStringExtra("TextIn");

        editText.setText(in);
    }

    public void onResponse(View view) {
        Intent intent = new Intent();
        intent.putExtra("TextOut", editText.getText().toString());

        setResult(RESULT_OK, intent);
        finish();
    }

    public void onCancel(View view) { // 취소 상태로 종료하기
        setResult(RESULT_CANCELED);
        finish();
    }

}
