package com.example.student.a0705member;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;

public class MemberEditActivity extends AppCompatActivity {

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
        setContentView(R.layout.activity_member_edit);

        name = (EditText)findViewById(R.id.editName);
        age = (EditText)findViewById(R.id.editAge);
        phone = (EditText)findViewById(R.id.editPhone);
        email = (EditText)findViewById(R.id.editEmail);
        gender = (EditText)findViewById(R.id.editGender);

        Intent intent = getIntent();

        member = (MemberVO) intent.getSerializableExtra("member");
        index = intent.getIntExtra("index", -1);

        name.setText(member.getName());
        age.setText(String.valueOf(member.getAge()));
        phone.setText(member.getPhoneNum());
        email.setText(member.getEmail());
        gender.setText(member.getGender());
    }

    public void onEdit(View view){
//        Toast.makeText(getApplicationContext(),""+index,Toast.LENGTH_SHORT).show();
        new AlertDialog.Builder(this)
                .setTitle("대화상자")
                .setMessage("수정하시겠습니까?")
                .setPositiveButton("예", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        Intent intent = new Intent(getApplicationContext(), MemberViewActivity.class);
                        member.setName(name.getText().toString());
                        member.setAge(Integer.parseInt(age.getText().toString()));
                        member.setPhoneNum(phone.getText().toString());
                        member.setEmail(email.getText().toString());
                        member.setGender(gender.getText().toString());

                        intent.putExtra("index", index);
                        intent.putExtra("member", member);
                        setResult(RESULT_OK, intent);


                        finish();

                    }
                })
                .setNegativeButton("아니오", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                    }
                }).show();
    }
}
