require 'httparty'
require 'json'
require 'uri'
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'

set :bind, '0.0.0.0'

get '/' do
  erb :index
end

$token = "your token number"
$url = "https://api.telegram.org/bot"
response = HTTParty.get("#{$url}#{$token}/getUpdates")
hash = JSON.parse(response.body)
$check_id = hash["result"][0]["message"]["from"]["id"]

def sendMessage(message)
  HTTParty.get("#{$url}#{$token}/sendMessage?chat_id=#{$check_id}&text=#{message}")
end

get '/send' do
  city = params["msg"]
  city.capitalize!

  res = HTTParty.get("http://samples.openweathermap.org/data/2.5/weather?q=#{city},uk&appid=b6907d289e10d714a6e88b30761fae22")
  hash_wea = JSON.parse(res.body)
  main = hash_wea["weather"][0]["main"]
  des = hash_wea["weather"][0]["description"]

  # msg = URI::encode(msg)
  sendMessage(main)
  sendMessage(des)
  redirect to '/'
end
