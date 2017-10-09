package com.example.student.a0703comunication;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    EditText editText;
    final static int ACT_EDIT = 1; //액티비티 요청(호출) 코드

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editText = (EditText)findViewById(R.id.editText);
    }

    public void onCall(View view){
        Intent intent = new Intent(getApplicationContext(), Main2Activity.class);

        //전송데이터 저장
        intent.putExtra("TextIn", editText.getText().toString()); //EditText와 String은 데이터 타입이 다름
        startActivityForResult(intent, ACT_EDIT);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {

        switch (requestCode){
            case ACT_EDIT:
                if(resultCode==RESULT_OK){
                    String result = data.getStringExtra("TextOut");
                    editText.setText("수신데이터 : "+ result);
                }
        }
    }


    //////////////////////////////////////////////////////

    public void onWeb(View view) {
        Intent intent = new Intent(Intent.ACTION_VIEW,
                Uri.parse("http://www.naver.com"));
        startActivity(intent);
    }
    public void onDial(View view) {
        Intent intent = new Intent(Intent.ACTION_DIAL,
                Uri.parse("tel:010-1111-2222"));
        startActivity(intent);
    }

    public void onPicture(View view) {
        Intent intent = new Intent(Intent.ACTION_VIEW);

        String sd = Environment.getExternalStorageDirectory().getAbsolutePath();
        editText.setText(sd);

        //Uri uri = Uri.fromFile(new File(sd + "/test.jpg"));
        // intent.setDataAndType(uri, "image/jpeg");
        // startActivity(intent);
    }




}
