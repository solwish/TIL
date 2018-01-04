class SessionsController < ApplicationController

  # 회원가입
  def signup
  end

  def user_signup
    user = User.new(
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )

    if user.save
      redirect_to '/signin', notice: "회원가입 완료!"
    else
      redirect_to :back, notice: "비밀번호가 일치하지 않습니다"
    end

  end

  def check_email
    @email = params[:email]
    @temp = User.find_by(email: params[:email]).nil?
    #유저가 없는 경우(nil) true가 리턴
  end

  # 로그인

  def signin
  end

  def user_signin
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/', notice: "로그인에 성공했습니다."
    else
      redirect_to :back, notice: "이메일이 없거나, 비밀번호가 틀렸습니다."
    end
  end

  #로그아웃
  def signout
    session.delete(:user_id)
    redirect_to '/', notice: "로그아웃 성공!"
  end

end
