require 'httparty'
require 'awesome_print'
require 'json'
require 'rubygems'

res = HTTParty.get("http://samples.openweathermap.org/data/2.5/weather?q=Seoul,uk&appid=b6907d289e10d714a6e88b30761fae22")
hash_wea = JSON.parse(res.body)

# check_id = hash["result"][0]["message"]["from"]["id"]

ap hash_wea["weather"][0]["main"]
ap hash_wea["weather"][0]["description"]




token = "460770273:AAGcijXpyTVbBcqgTF6OXLMh3RPJ_Ry392w"
url = "https://api.telegram.org/bot"
response = HTTParty.get("#{url}#{token}/getUpdates")
hash = JSON.parse(response.body)
check_id = hash["result"][0]["message"]["from"]["id"]
ap hash["result"][0]["update_id"]
ap hash["result"][0]["message"]["text"]
