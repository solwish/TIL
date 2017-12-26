class Post < ActiveRecord::Base
  mount_uploader :avatar, AvatarUploader
  belongs_to :user
  validates :title, presence: true
  validates :content, presence: true
end
