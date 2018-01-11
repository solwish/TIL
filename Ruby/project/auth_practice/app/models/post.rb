class Post < ActiveRecord::Base
  belongs_to :user
  resourcify
end
