package com.example.student.adapterexample;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import java.util.HashMap;

public class MainActivity extends AppCompatActivity {
	HashMap<Integer, Class> map;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		map = new HashMap<>();
		map.put(R.id.button, SimpleListActivity.class);
	}

	public void onSimple(View view) {
		Class clazz = map.get(view.getId());
		Intent intent = new Intent(this, clazz);
		startActivity(intent);
	}
}
