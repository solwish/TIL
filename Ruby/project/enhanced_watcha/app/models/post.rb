class Post < ActiveRecord::Base

  mount_uploader :image, PhotoUploader
                #컬럼명, 업도더 이름
  belongs_to :user
  has_many :comments
end
