class Admin::UsersController < Admin::ApplicationController

  def index
    @users = User.all
  end

  def to_manager
    user = User.find(params[:id])
    user.update(
      role: "manager"
    )
    redirect_to :back, notice: "매니저로 되었습니다."
  end

  def to_user
    user = User.find(params[:id])
    user.update(
      role: "user"
    )
    redirect_to :back, notice: "유저로 만들었습니다."
  end

end
