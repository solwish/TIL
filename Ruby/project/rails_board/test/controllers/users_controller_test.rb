require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  test "should get login" do
    get :login
    assert_response :success
  end

  test "should get logout" do
    get :logout
    assert_response :success
  end

  test "should get signup" do
    get :signup
    assert_response :success
  end

  test "should get register" do
    get :register
    assert_response :success
  end

  test "should get login_session" do
    get :login_session
    assert_response :success
  end

end
