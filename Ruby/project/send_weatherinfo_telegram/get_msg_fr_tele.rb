require 'httparty'
require 'awesome_print'
require 'json'
require 'uri'
require 'nokogiri'
require 'data_mapper' # metagem, requires common plugins too.
require './model.rb'

$token = "your token number"
$url = "https://api.telegram.org/bot"
response = HTTParty.get("#{$url}#{$token}/getUpdates")
hash = JSON.parse(response.body)
$check_id = hash["result"][0]["message"]["from"]["id"]

def sendMessage(message)
  HTTParty.get("#{$url}#{$token}/sendMessage?chat_id=#{$check_id}&text=#{message}")
end

def getOldUpdate()
  response = HTTParty.get("#{$url}#{$token}/getUpdates")
  hash = JSON.parse(response.body)
  hash["result"].last["update_id"]
end

old_up = hash["result"].last["update_id"]
# 1초 간격으로 보내는 코드
while true

  check_up = getOldUpdate()

    if check_up > old_up
      city = hash["result"].last["message"]["text"]
      city.capitalize!
      res = HTTParty.get("http://samples.openweathermap.org/data/2.5/weather?q=#{city},uk&appid=b6907d289e10d714a6e88b30761fae22")
      hash_wea = JSON.parse(res.body)
      main = hash_wea["weather"].last["main"]
      des = hash_wea["weather"].last["description"]
      sendMessage(main)
      sendMessage(des)

      old_up = getOldUpdate
    end

    Post.first_or_create(:update_id => check_up)
  sleep(1)  #단위 초야
end
