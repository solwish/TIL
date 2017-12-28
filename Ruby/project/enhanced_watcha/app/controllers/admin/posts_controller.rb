class Admin::PostsController < Admin::ApplicationController

  def index
    @posts = Post.all
  end

  def delete
    post = Post.find(params[:id])
    post.destroy
    redirect_to :back, notice: "#{params[:id]}번 글이 삭제되었습니다"
  end

end
