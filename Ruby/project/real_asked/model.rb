# need install dm-sqlite-adapter
DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/asked.db")

class Post
  include DataMapper::Resource  # datamapper 객체로 Post란 이름으로 만들겠다
  property :id, Serial
  property :name, String
  property :content, String
  property :created_at, DateTime
end

class User
  include DataMapper::Resource
  property :id, Serial
  property :email, String
  property :password, String
  property :is_admin, Boolean, :default  => false
  property :created_at, DateTime
end

# Perform basic sanity checks and initialize all relationships
# Call this when you've defined all your models
DataMapper.finalize   #데이터 맵퍼 문장을 종료시키겠다 위까지 코드 작성

# automatically create the post table
Post.auto_upgrade!
User.auto_upgrade!
