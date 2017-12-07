require 'httparty'
require 'nokogiri'


url = "http://webtoon.daum.net/ranking"

#HTTParty 대소문자 주의 
response = HTTParty.get(url)

html = Nokogiri::HTML(response.body)
ranking = html.css('#daumFoot > div.service_reference > a.btn_comm.link_appdown')

puts ranking.text