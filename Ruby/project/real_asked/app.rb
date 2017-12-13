require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'data_mapper' # metagem, requires common plugins too.
require './model.rb'  #DB 관련 model

set :bind, '0.0.0.0'

enable :sessions  #내가 앱에서 세션을 활용할거야

get '/' do
  erb :index
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
  redirect to '/home'
end

get '/home' do
  @posts = Post.all.reverse
  erb :home
end

get '/create' do
  Post.create(
    :name => params["name"],
    :content => params["content"]
  )
  redirect to '/home'
end

get '/admin' do
  @users = User.all
  erb :admin
end

get '/login' do
  @message = ""
 if User.first(:email => params["email"])     #없으면 리턴값이 nil임
   if User.first(:email => params["email"]).password = params["password"]
     session[:email] = params["email"]
     @message = "로그인이 되었습니다"
     redirect to '/home'
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
