class BoardsController < ApplicationController
  before_action :set_board, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  # GET /boards
  # GET /boards.json
  def index
    @boards = Board.all.reverse
  end

  # GET /boards/1
  # GET /boards/1.json
  def show
    @like = Like.where(user_id: current_user.id, board_id: params[:id])
    # @comments = Comment.where(board_id: params[:id]).reverse
  end

  # GET /boards/new
  def new
    @board = Board.new
  end

  # GET /boards/1/edit
  def edit
  end

  # POST /boards
  # POST /boards.json
  def create
    @board = current_user.boards.new(board_params)

    respond_to do |format|
      if @board.save
        format.html { redirect_to @board, notice: 'Board was successfully created.' }
        format.json { render :show, status: :created, location: @board }
      else
        format.html { render :new }
        format.json { render json: @board.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /boards/1
  # PATCH/PUT /boards/1.json
  def update
    respond_to do |format|
      if @board.update(board_params)
        format.html { redirect_to @board, notice: 'Board was successfully updated.' }
        format.json { render :show, status: :ok, location: @board }
      else
        format.html { render :edit }
        format.json { render json: @board.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /boards/1
  # DELETE /boards/1.json
    def destroy
    @board.destroy
    respond_to do |format|
      format.html { redirect_to boards_url, notice: 'Board was successfully destroyed.' }
      format.json { head :no_content }
      format.js
    end
  end

  def user_like_board
    #만약에 좋아요를 누른상태라면
    @like = Like.where(user_id: current_user.id, board_id: params[:board_id]).first
    #하나씩만 리턴되는데 first를 써준 이유는 where은 하나가 리턴되도 배열로 리턴된다
    unless @like.nil?
      @like.destroy
    #안누른 누른상태라면
    else
      @like = Like.create(user_id: current_user.id, board_id: params[:board_id])
    end

    @likecnt = Like.where(user_id: current_user.id, board_id: params[:board_id])
    # redirect_to :back
    # sleep(5)
  end

  def create_comment
    @comment = Comment.new(
      user_id: current_user.id,
      contents: params[:contents],
      board_id: params[:id]
    )
    if @comment.save
      puts "성공성공"
    else
      puts "실패실패"
    end
  end

  def delete_comment
    comment = Comment.where(id: params[:comment_id], board_id: params[:id]).first
    if comment.destroy
      puts "성공"
    else
      puts "실패"
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_board
      @board = Board.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def board_params
      params.require(:board).permit(:title, :contents)
    end
end
