class PostsController < ApplicationController

  before_action :authorize

  def index
    @list = Post.all.reverse
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
  end

  def create

    Post.create(
      user_id: session[:user_id],
      title: params[:title],
      content: params[:content]
    )

    redirect_to '/'
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy

    comment = Comment.find_by(post_id: params[:id])
    comment.destroy

    redirect_to '/'
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    post = Post.find(params[:id])
    post.update(
      title: params[:title],
      content: params[:content]
    )
    redirect_to "/posts/show/#{params[:id]}"
  end

  def add_comment
    Comment.create(
      user_id: current_user.id,
      content: params[:content],
      post_id: params[:id]
    )
    redirect_to :back
  end

end
