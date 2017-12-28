class Movie < ActiveRecord::Base

  mount_uploader :poster, PhotoUploader

  has_many :reviews

  def avg
    (self.reviews.count == 0) ? 0 : self.reviews.average(:rating).round(1)
  end

end
