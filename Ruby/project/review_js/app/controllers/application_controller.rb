class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :user_signed_in?

  def current_user
    @current_user ||= User.find(session[:user_id])
  end

  def user_signed_in?
    !session[:user_id].nil?
  end

  def authenticate_user!
    if session[:user_id].nil?
      redirect_to '/signin', notice: '로그인이 필요합니다.'
    end
  end

end
