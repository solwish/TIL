require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "Post의 타이틀은 두 글자 이상이어야 한다" do
    post = Post.new(title: "ada")
    assert post.save #참이될 조건
  end
end
