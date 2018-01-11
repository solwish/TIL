require 'test_helper'

class FootprintsControllerTest < ActionController::TestCase
  setup do
    @footprint = footprints(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:footprints)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create footprint" do
    assert_difference('Footprint.count') do
      post :create, footprint: { content: @footprint.content, title: @footprint.title, user_id: @footprint.user_id }
    end

    assert_redirected_to footprint_path(assigns(:footprint))
  end

  test "should show footprint" do
    get :show, id: @footprint
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @footprint
    assert_response :success
  end

  test "should update footprint" do
    patch :update, id: @footprint, footprint: { content: @footprint.content, title: @footprint.title, user_id: @footprint.user_id }
    assert_redirected_to footprint_path(assigns(:footprint))
  end

  test "should destroy footprint" do
    assert_difference('Footprint.count', -1) do
      delete :destroy, id: @footprint
    end

    assert_redirected_to footprints_path
  end
end
