class HomeController < ApplicationController
  def index
    @posts = Post.all
  end

  def mail
  end

  def sendto
    SendMailer.sendmail(params[:from], params[:title], params[:content]).deliver_now
    flash[:mail] = "성공적으로 보냈습니다."
    redirect_to '/'
  end

end
