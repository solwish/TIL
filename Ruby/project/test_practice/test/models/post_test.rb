require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  # 사실상 중복이라 커멘트 처리
  # test "Post의 title은 nil이 아니어야 한다" do
  #   post = Post.new(title: "")
  #   refute post.save #assert 참이될 조건
  # end

  test "title은 2글자 이상이어야 한다." do
    post = Post.new(title: "a", content: "aaa")
    refute post.save #refute (assert_not) 거짓조건(아닌것을 확실히 하라)
  end

  test "title은 반드시 100글자 이하여야 한다." do
    post = Post.new(title: Faker::Lorem.words(100))
    refute post.save
  end

  test "content은 2글자 이상이어야 한다." do
    post = Post.new(title: "aaa", content: "a")
    refute post.save
  end

# Faker::Lorem.words(100)는 단어가 100개 배열로 리턴되는거라 글자수 넘을 수 있어
  test "content은 반드시 500글자 이하여야 한다." do
    post = Post.new(title: "aaa", content: Faker::Lorem.words(500))
    refute post.save
  end


  # 1. title은 nil이 아니여야 한다.
  # 2. title은 2글자 이상이어야 한다.
  # 3. title은 반드시 100글자 이하여야 한다.
  # 4. content은 nil이 아니여야 한다.
  # 5. content은 2글자 이상이어야 한다.
  # 6. content은 반드시 100글자 이하여야 한다.

end
