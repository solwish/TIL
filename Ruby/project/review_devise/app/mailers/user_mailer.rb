class UserMailer < ApplicationMailer
  def send_emails(receiver, title, content)
    @content = content
    mail(to: receiver, subject: title)
  end
end
