require 'httparty'
require 'awesome_print'
require 'json'
require 'uri'
require 'nokogiri'

$token = "token numbers"
$url = "https://api.telegram.org/bot"

response = HTTParty.get("#{$url}#{$token}/getUpdates")
hash = JSON.parse(response.body)        #json코드를 루비 해쉬코드로 바꿔줌

# ap hash                     #어썸 프린트 위에 루비 코드를 이쁘게 출력

$check_id = hash["result"][0]["message"]["from"]["id"]

msg = "친구야"
encoded = URI::encode(msg)

# # 5초 간격으로 보내는 코드
# while true
#   HTTParty.get("#{$url}#{$token}/sendMessage?chat_id=#{$check_id}&text=#{encoded}")
#   sleep(5)  #단위 초야
# end

def sendMessage(message)
  HTTParty.get("#{$url}#{$token}/sendMessage?chat_id=#{$check_id}&text=#{message}")
end

#코스피 지수 스크랩
res = HTTParty.get("http://finance.naver.com/sise/")
html = Nokogiri::HTML(res.body)
kospi = html.css('#KOSPI_now').text
# puts kospi
sendMessage(kospi)

#이번주 로또 번호 가지고 오기
getNum = HTTParty.get("http://nlotto.co.kr/common.do?method=main")
htmlNum = Nokogiri::HTML(getNum.body)
num = htmlNum.css('#lottoDrwNo').text
# puts num
res = HTTParty.get("http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=#{num}")
hashlotto = JSON.parse(res.body)
lotto = Array.new
for i in 1..6 do
  lotto << hashlotto["drwtNo#{i}"]
end
# puts lotto

str = "이번주 로또 번호는 #{lotto.to_s} 보너스번호는 #{hashlotto["bnusNo"].to_s}"
encoded = URI.encode(str)
# puts str
sendMessage(encoded)
