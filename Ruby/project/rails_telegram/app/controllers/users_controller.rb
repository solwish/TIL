class UsersController < ApplicationController

  def signup

  end

  def register
    User.create(
      email: params[:email],
      password: params[:password]
    )
    redirect_to '/'
  end

  def login
  end

  def login_check
    user = User.find_by(email: params[:email])
    $login_msg = ""
    if user  #이메일로 찾아줘
      if user.password == params[:password]
        session[:user_id] = user.id
        redirect_to '/'
      else
        $login_msg = "비번이 틀렸소"
        redirect_to '/users/login'
      end
    else
      $login_msg = "회원가입이 안됐소"
      redirect_to '/users/signup'
    end
  end

  def logout
    session.clear
    redirect_to '/'
  end

end
