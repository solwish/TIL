class UsersController < ApplicationController

  def signup
  end

  def register
    @email = params[:email]
    @password = params[:password]

    User.create(
      email: params[:email],
      password: params[:password]
    )
    redirect_to '/'
  end

  def list
    @users = User.all.reverse
  end

  def login
  end

  def login_check
    user = User.find_by(email: params[:email])
    if user
       if user.password == params[:password]
         session[:email] = params[:email]
         redirect_to '/'
       else
         render :fail
       end
     else
         render :fail
     end
  end

  def logout
    session.clear
    redirect_to '/'
  end
end
