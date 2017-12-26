class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  # before_action(:set_post, {only: [:show, :edit, :update, :destroy]})
  before_action :authenticate_user!


  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params
      # title: params["post"]["title"],
      # content: params["post"]["content"]
    )

    @post.user_id = current_user.id

    if @post.save
      redirect_to '/'
    else
      flash[:alert] = "제목과 내용은 필수입니다."
      redirect_to :back
    end
  end

  def show
  end

  def edit
  end

  def update
    @post.update(post_params)
    redirect_to @post
    # redirect_to "/posts/#{@post.id}"
  end

  def destroy
    @post.destroy
    redirect_to '/'
  end

  #스코프 이 클래스 내부에서만 써줄거라. 위에 애들은 뷰랑 라우트에서 써줌
  private
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :content, :avatar)
    end

end
