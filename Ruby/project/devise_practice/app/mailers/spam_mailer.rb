class SpamMailer < ApplicationMailer
  default from: "yourmail@naver.com"

  def hiodk410(receiver, content, text)
    @text = text
    mail(to: receiver, subject: content)
  end
end
