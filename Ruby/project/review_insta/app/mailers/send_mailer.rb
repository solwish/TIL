class SendMailer < ApplicationMailer
  default from: "solwish@naver.com"

  def sendmail(from, title, content)
    @content =content
    @from = from
    mail(
      to: "solwish@naver.com",
      subject: title
    )
  end

end
