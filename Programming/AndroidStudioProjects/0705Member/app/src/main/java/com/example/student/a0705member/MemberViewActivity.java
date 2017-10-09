package com.example.student.a0705member;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;


public class MemberViewActivity extends AppCompatActivity {

    EditText name;
    EditText age;
    EditText phone;
    EditText email;
    EditText gender;
    MemberVO member;
    int index;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_member_view);

        name = (EditText) findViewById(R.id.editName);
        age = (EditText) findViewById(R.id.editAge);
        phone = (EditText) findViewById(R.id.editPhone);
        email = (EditText) findViewById(R.id.editEmail);
        gender = (EditText) findViewById(R.id.editGender);

        Intent intent = getIntent();

        member = (MemberVO) intent.getSerializableExtra("member");
        index = intent.getIntExtra("index", -1);

        name.setText(member.getName());
        age.setText(String.valueOf(member.getAge()));
        phone.setText(member.getPhoneNum());
        email.setText(member.getEmail());
        gender.setText(member.getGender());


    }

    final static int ACT_EDIT = 1;

    public void onEdit(View view) {


                        Intent intent = new Intent(getApplicationContext(), MemberEditActivity.class);

                        intent.putExtra("index", index);
                        intent.putExtra("member", member);

                        startActivityForResult(intent, ACT_EDIT);



    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case ACT_EDIT:
                if (resultCode == RESULT_OK) {
                    member = (MemberVO) data.getSerializableExtra("member");
                    index = data.getIntExtra("index", -1);

//                    name = (EditText) findViewById(R.id.editName);
//                    age = (EditText) findViewById(R.id.editAge);
//                    phone = (EditText) findViewById(R.id.editPhone);
//                    email = (EditText) findViewById(R.id.editEmail);
//                    gender = (EditText) findViewById(R.id.editGender);
//                    name.setText(member.getName());
//                    age.setText(String.valueOf(member.getAge()));
//                    phone.setText(member.getPhoneNum());
//                    email.setText(member.getEmail());
//                    gender.setText(member.getGender());

                    Intent intent = new Intent(getApplicationContext(), MainActivity.class);
                    intent.putExtra("index", index);
                    intent.putExtra("member", member);
                    setResult(RESULT_OK, intent);

                    finish();

                }

        }

    }
}
