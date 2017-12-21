class Post < ActiveRecord::Base
  has_many :comments
  belongs_to :user
  mount_uploader :avatar, AvatarUploader
end
