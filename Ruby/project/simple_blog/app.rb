#  Simple Blog

## 1. new
# - get '/' => erb :index,
# - <form>을 통해 제목(title), 내용(content) 입력

## 2. Create
# - get 'write' => erb :write,
# - File.open을 통해 내용 쓰기

## 3. Read
# - get 'show' => erb :show
# - File.open을 통해 모든 블로그 내용 읽기

require 'sinatra'

get '/' do
  erb :index
end

get '/write' do
  @title = params["title"]
  @content = params["content"]

  File.open("blog.txt", "a") do |f|
    f.write("title: #{@title}, content: #{@content}")
    f.write("\n")
  end
  erb :write
end

get '/show' do
  @list = Array.new

  File.open("blog.txt", "r") do |f|
    f.each_line do |line|
      @list << line
    end
  end

  erb :show
end
