require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'data_mapper' # metagem, requires common plugins too.

set :bind, '0.0.0.0'

# need install dm-sqlite-adapter
DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/blog.db")

class Post
  include DataMapper::Resource
  property :id, Serial
  property :title, String
  property :body, Text
  property :created_at, DateTime
end

class User
  include DataMapper::Resource
  property :id, Serial
  property :email, String
  property :password, String
  property :created_at, DateTime
end

# Perform basic sanity checks and initialize all relationships
# Call this when you've defined all your models
DataMapper.finalize

# automatically create the post table
Post.auto_upgrade!
User.auto_upgrade!

get '/' do
  @posts = Post.all.reverse #[1번포스트객체, 2번포스트객체, ...]
  erb :index
end

get '/abap' do
  Post.create(
    :title => params["title"],
    :body => params["content"]
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
  redirect to '/'
end

get '/admin' do
    # 모든 유저를 불러와
    # admin.erb에서 모든 유저를 보여준다.
    @users = User.all
    erb :admin
end
