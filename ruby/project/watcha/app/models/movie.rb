class Movie < ActiveRecord::Base
  has_many :reviews

  def avg
    (self.reviews.count == 0) ? 0 : self.reviews.average(:rating).round(1)
  end

end
