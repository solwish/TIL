require 'httparty'
require 'nokogiri'
url = "http://finance.naver.com/sise/"

response = HTTParty.get(url)

html = Nokogiri::HTML(response.body)
ranking = html.css('#KOSDAQ_now')
puts ranking.text
