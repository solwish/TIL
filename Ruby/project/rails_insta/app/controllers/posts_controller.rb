class PostsController < ApplicationController
  def index
    @posts = Post.all.reverse
  end

  def new
  end

  def create
    Post.create(
      user_id: session[:user_id],
      title: params[:title],
      content: params[:content],
      avatar: params[:avatar]
    )

    redirect_to root_path
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy

    # comment = Comment.find_by(post_id: params[:id])
    # comment.destroy

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

  def show
    @post = Post.find(params[:id])
  end

end
