require 'httparty'
require 'awesome_print'
require 'json'
require 'rubygems'

url = "https://api.telegram.org/bot"
token = "460770273:AAGcijXpyTVbBcqgTF6OXLMh3RPJ_Ry392w"
response = HTTParty.get("#{url}#{token}/getUpdates")
hash = JSON.parse(response.body)

# check_id = hash["result"][0]["message"]["from"]["id"]

ap hash["result"][0]["message"]["from"]["id"]
