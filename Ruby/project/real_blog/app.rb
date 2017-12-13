require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'data_mapper' # metagem, requires common plugins too.
require './model.rb'

set :bind, '0.0.0.0'

enable :sessions

get '/' do
  @posts = Post.all.reverse #[1번포스트객체, 2번포스트객체, ...]
  erb :index
end

get '/abap' do
  Post.create(
    :title => params["title"],
    :body => params["content"],
    :email => params["email"]
  )
  redirect to '/'
end

get '/signup' do
  erb :signup
end

get '/register' do
  User.create(
    :email => params["email"],
    :password => params["password"]
  )
  session[:email] = params["email"]
  redirect to '/'
end

get '/admin' do
    # 모든 유저를 불러와
    # admin.erb에서 모든 유저를 보여준다.
    @users = User.all
    erb :admin
end

get '/login' do
  erb :login
end

get '/login_check' do
  @message = ""
  if User.first(:email => params["email"])     #없으면 리턴값이 nil임
     if User.first(:email => params["email"]).password = params["password"]
       session[:email] = params["email"]
       @message = "로그인이 되었습니다"
       redirect to '/'
     else
       @message = "비번이 틀렸어요"
     end
   else
     @message = "해당하는 이메일의 유저가 없습니다"
   end
end

get '/logout' do
  session.clear
  redirect to '/'
end
