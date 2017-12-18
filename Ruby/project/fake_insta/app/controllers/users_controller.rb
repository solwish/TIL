class UsersController < ApplicationController

  def signup
  end

  def register
    @email = params[:email]
    @password = params[:password]

    User.create(
      :email => params[:email],
      :password => params[:password]
    )
    redirect_to '/'
  end

  def list
    @users = User.all.reverse
  end

end
