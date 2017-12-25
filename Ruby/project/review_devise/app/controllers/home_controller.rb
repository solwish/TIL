class HomeController < ApplicationController
  def index
  end

  def mail
    UserMailer.send_emails(params[:receiver], params[:title], params[:content]).deliver_now
    redirect_to '/'
  end
end
