require 'httparty'
require 'awesome_print'
require 'json'
require 'rubygems'

url = "https://api.telegram.org/bot"
token = ""
response = HTTParty.get("#{url}#{token}/getUpdates")
hash = JSON.parse(response.body)

# check_id = hash["result"][0]["message"]["from"]["id"]

ap hash["result"][0]["message"]["from"]["id"]
