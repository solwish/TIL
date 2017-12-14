# # Board
#
# 1. get '/' {} : index.erb
#   - 지금까지 써진 모든 글들을 보여준다.
#   - '글쓰기' 링크가 있고 -> '/new'
#
# 2. get '/new' {} : new.erb
#   - 새로운 글을 쑬 수 있는 <form>, title, content, author -> '/create'
#
# 3. get '/create' {} :
#   - new에서 보내준 정보를 바탕으로 Post.create()
#   - redirect -> '/'
#
# 4. 로그인 가능하게
# - 1. 회원가입 'signup' -> 'regiser'
# - 2. 로그인 'login' -> 'login_session'
# - 3. 로그인이 되어 있으면, :author => 로그인 된 유저의 email
# - 4. 로그인이 되어 있지 않으면, :author => '익명'

require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'data_mapper'
require './model.rb'      #.rb 안해줘도 되긴해

set :bind, '0.0.0.0'

enable :sessions

before do
  # check_login
end

def check_login
  unless session[:email]
    redirect to '/'
  end
end

get '/' do
  @posts = Post.all.reverse
  erb :index
end

get '/new' do
  erb :new
end

get '/create' do
  Post.create(
    title: params["title"],
    body: params["content"],
    email: params["author"]
  )
  redirect to '/'
end

get '/destroy/:id' do
  if session[:email] && (Post.get(params[:id]).email == User.first(email: session[:email]).email || User.first(:email => session[:email]).is_admin)
    post = Post.get(params[:id])
    post.destroy
  end
  redirect to '/'
end

get '/edit/:id' do
  @post = Post.get(params[:id])
  erb :edit
end

get '/update/:id' do
  post = Post.get(params[:id])
  post.update(
  title: params["title"],
  body: params["content"]
  )
  redirect to '/'
end

get '/squre/:num' do
  @num = params[:num].to_i**2
  erb :squre
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
    @msg = ""
    if session[:email] && User.first(:email => session[:email]).is_admin
      @users = User.all
    else
      @msg = "접근할 수 없는 페이지입니다"
      redirect to '/'
    end
    erb :admin
end

get '/login' do
  erb :login
end

get '/login_check' do
  @message = ""
  if User.first(:email => params["email"])     #없으면 리턴값이 nil임
     if User.first(:email => params["email"]).password == params["password"]
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
