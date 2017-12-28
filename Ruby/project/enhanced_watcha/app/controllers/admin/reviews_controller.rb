class Admin::ReviewsController < Admin::ApplicationController

  def index
    @reviews = Review.all
  end

  def delete
    review = Review.find(params[:id])
    review.destroy
    redirect_to :back, notice: "#{params[:id]}번 댓글이 삭제되었습니다"
  end

end
