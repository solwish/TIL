package com.example.student.a0704alertdialog;

import android.content.DialogInterface;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onAlert(View view) {
        AlertDialog dialog = new AlertDialog.Builder(this)
                .setTitle("대화상자")
                .setIcon(R.mipmap.ic_launcher_round)
                .setMessage("안녕하세요")
                .setNeutralButton("닫기", null).setNegativeButton("부정", null).setPositiveButton("긍정", null)
                //    .show();
                .create();

        // 대화상자 밖에 클릭했을 때 닫기 안되게 false지정
        dialog.setCanceledOnTouchOutside(false);
        // Back 버튼 눌렸을 때 닫기 안되게
        dialog.setCancelable(false);
        dialog.show();
        Toast.makeText(this, "show() 뒤에서 호출", Toast.LENGTH_SHORT).show();
    }

    public void onButtons(View view) {
        new AlertDialog.Builder(this)
                .setTitle("대화상자")
                .setMessage("종료하시겠습니까?")
                .setPositiveButton("예", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        finish();
                    }
                }).setNegativeButton("아니오", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
            }
        }).setNeutralButton("취소", null).show();
    }

    String[] items = {"Java", "Oracle", "HTML5", "CSS3", "Javascript", "jQuery", "JSP/Servlet", "Spring", "Android"};

    public void onItems(View view) {
        new AlertDialog.Builder(this).setTitle("대화상자").setItems(items, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {

                Toast.makeText(getApplicationContext(), items[i], Toast.LENGTH_SHORT).show();
            }
        }).show();
    }

    public void onSingle(View view) {
        new AlertDialog.Builder(this)
                .setTitle("대화상자")
                .setSingleChoiceItems(items, -1,
                        new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialogInterface, int i) {
                                Toast.makeText(getApplicationContext(), items[i],
                                        Toast.LENGTH_SHORT).show();
                            }
                        })
                .setNeutralButton("닫기", null)
                .show();
    }

    //  boolean[] check = {false, false, false, false, false, false, false, false, false};
    boolean[] check = new boolean[items.length];


    public void onMultiple(View view) {
        //    check = new boolean[items.length];  //이러면 닫기 하고 새로 열때 항상 false로 세팅 위에서의 check는 변수 선언만
        new AlertDialog.Builder(this)
                .setTitle("대화상자")
                .setMultiChoiceItems(items, check,
                        new DialogInterface.OnMultiChoiceClickListener() {
                            @Override
                            public void onClick(DialogInterface dialogInterface,
                                                int i, boolean b) {
                                check[i] = b;

                            }
                        })
                .setNeutralButton("닫기", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        String selectItem = "";
                        for (int ix = 0; ix < items.length; ix++) {
                            if (check[ix]) {
                                if (selectItem.equals("")) {
                                    selectItem += items[ix];
                                } else {
                                    selectItem += ", " + items[ix];
                                }


                            }
                        }
                        Toast.makeText(getApplicationContext(), selectItem + " 를 선택하셨습니다.",
                                Toast.LENGTH_LONG).show();
                    }
                })
                .show();
    }


    View root;

    public void onCustom(View view) {
        LayoutInflater inflater = getLayoutInflater();
        root = inflater.inflate(R.layout.dialog_login, null); //부모 없어서 null 줌

        new AlertDialog.Builder(this)
                .setTitle("로그인 창")
                //        .setView(R.layout.dialog_alert)  //이걸 사용했을때 findbyviewId 못해줌
                .setView(root)
                //        .setMessage("셋 메세지부분")
                .setNeutralButton("닫기", null)
                .setPositiveButton("로그인", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {

                        EditText id = (EditText) root.findViewById(R.id.userID);
                        EditText pass = (EditText) root.findViewById(R.id.password);

                        Toast.makeText(getApplicationContext(), "유저 id: " + id.getText() + " 비밀번호: " + pass.getText(), Toast.LENGTH_LONG).show();
                    }
                })
                .show();
    }


}
