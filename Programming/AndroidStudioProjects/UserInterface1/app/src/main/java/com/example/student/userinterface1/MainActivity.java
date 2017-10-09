package com.example.student.userinterface1;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button b1 = (Button) findViewById(R.id.button1);
      //  b1.setText("코드에서도 변경 가능");

        Button b2 = (Button) findViewById(R.id.button2 );
        b2.setEnabled(false);

    /*    LinearLayout container = new LinearLayout(this);
        container.setOrientation(LinearLayout.VERTICAL);

        Button b1 = new Button(this);
        b1.setText("첫번째 버튼 ");
        container.addView(b1);

        Button b2 = new Button(this);
        b2.setText("두번째 버튼");
        container.addView(b2);

        setContentView(container);*/

    }
}
