require 'httparty'
require 'awesome_print'
require 'json'
require 'uri'
require 'date'
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'

set :bind, '0.0.0.0'

get '/' do

  @list = Array.new

  File.open("log.txt", "r") do |f|
    f.each_line do |line|
      @list << line
    end
  end
  erb :index
end

$token = "460770273:AAGcijXpyTVbBcqgTF6OXLMh3RPJ_Ry392w"
$url = "https://api.telegram.org/bot"
response = HTTParty.get("#{$url}#{$token}/getUpdates")
hash = JSON.parse(response.body)
$check_id = hash["result"][0]["message"]["from"]["id"]

def sendMessage(message)
  HTTParty.get("#{$url}#{$token}/sendMessage?chat_id=#{$check_id}&text=#{message}")
end

get '/write' do
  msg = params["msg"]

  File.open("log.txt", "a") do |f|
    f.write(msg + " " +Time.now.to_s)
    f.write("\n")
  end

  msg = URI::encode(msg)
  sendMessage(msg)
  redirect to '/'
end
