class Post < ActiveRecord::Base
  validates :title, presence: true,
                    length: {minimum: 2, maximum: 100 }

  validates :content, presence: true,
                    length: {minimum: 2, maximum: 500 }
end
