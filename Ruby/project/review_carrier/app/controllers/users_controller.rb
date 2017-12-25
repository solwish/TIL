class UsersController < ApplicationController

  def login
  end

  def signup
  end

  def register
    User.create(
      email: params[:email],
      password: params[:password]
    )
    redirect_to '/'
  end

  def logout
    session.clear
    flash[:notice] = "성공적으로 로그아웃되었습니다."
    redirect_to '/'
  end

  def login_session
    user = User.find_by(email: params[:email])
    if user
      if user.password == params[:password]
        session[:user_id] = user.id
        redirect_to '/'
      else
        flash[:notice] = "비밀번호가 틀렸습니다."
        redirect_to '/users/login'
      end
    else
      flash[:notice] = "아이디 없습니다."
      redirect_to '/users/signup'
    end
  end

end
