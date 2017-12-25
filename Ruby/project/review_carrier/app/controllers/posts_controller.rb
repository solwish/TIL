class PostsController < ApplicationController

  before_action :authorize

  def index
    @posts = Post.all.reverse
  end

  def new
  end

  def create
    Post.create(
      title: params[:title],
      content: params[:content],
      user_id: session[:user_id],
      avatar: params[:avatar]
    )

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
    redirect_to "/"
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    redirect_to '/'
  end

end
