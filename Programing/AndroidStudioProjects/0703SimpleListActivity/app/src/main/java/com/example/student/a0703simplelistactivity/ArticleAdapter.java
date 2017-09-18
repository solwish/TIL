package com.example.student.a0703simplelistactivity;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by student on 2017-07-03.
 */

public class ArticleAdapter extends BaseAdapter {

    Context context;
    int layout;
    ArrayList<Article> list;

    LayoutInflater inflater;

    public ArticleAdapter(Context context, int layout, ArrayList<Article> list) {
        this.context = context;
        this.layout = layout;
        this.list = list;
        inflater =(LayoutInflater)context.getSystemService(
                Context.LAYOUT_INFLATER_SERVICE);
    }



    @Override
    public int getCount() {
        return list.size();
    }

    @Override
    public Object getItem(int i) {
        return list.get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        if(view == null) {
            view = inflater.inflate(layout, viewGroup, false);

        }
        TextView title = (TextView)view.findViewById(R.id.title);
        TextView subTitle = (TextView)view.findViewById(R.id.subtitle);
        Article article = (Article)getItem(i);
        title.setText(article.getTitle());
        subTitle.setText(article.getWriter());
        return view;
    }
}
