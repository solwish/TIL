package com.example.student.buttonevent1;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {


/*    class Listener implements View.OnClickListener {
        public void onClick(View view){

            Toast.makeText(getApplicationContext(), "버튼이 눌려졌습니다", Toast.LENGTH_SHORT).show();
            //Log.i(Toast.LENGTH_SHORT)
        }
    };*/

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final Button button = (Button) findViewById(R.id.button);

/*        Listener listener = new Listener();
        button.setOnClickListener(listener);*/




        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Toast.makeText(getApplicationContext(), ((Button)view).getText().toString()+"버튼이 눌려졌습니다.", Toast.LENGTH_SHORT).show();

            }
        });

       final Button button2 = (Button) findViewById(R.id.button2);

       button2.setOnClickListener(new View.OnClickListener() {
           @Override
           public void onClick(View view) {
               Toast.makeText(getApplicationContext(), button2.getText().toString()+"이 눌려졌습니다", Toast.LENGTH_LONG).show();
               //button2가 지역변수라 이 메서드가 호출될때는 없기때문에 final을 써줘야해
           }
       });

    }
}
