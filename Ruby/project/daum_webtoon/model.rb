
# need install dm-sqlite-adapter
DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/webtoon.db")

class Post
  include DataMapper::Resource
  property :id, Serial
  property :title, String
  property :img_url, String
  property :url, String
  property :score, Float      #평균같은 작업해줄때 float로 담아놓는게 편해
  property :desc, String
  property :created_at, DateTime
end

# Perform basic sanity checks and initialize all relationships
# Call this when you've defined all your models
DataMapper.finalize

# automatically create the post table
Post.auto_upgrade!
