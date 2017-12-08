require 'httparty'
require 'nokogiri'


url = "http://finance.naver.com/sise/"

#HTTParty 대소문자 주의 
response = HTTParty.get(url)

html = Nokogiri::HTML(response.body)
kospi = html.css('#KOSPI_now')

puts kospi.text