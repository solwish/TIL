require 'sinatra'
require 'sinatra/reloader'
# require 'rest-client'
require 'httparty'
require 'json'
require 'date'
require 'data_mapper'
require './model.rb'

set :bind, '0.0.0.0'

get '/' do
  erb :index
end

# get '/scrap' do
#
#   days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
#   @webtoons = Array.new
#   days.each do |day|
#     url = "http://webtoon.daum.net/data/pc/webtoon/list_serialized/#{day}"
#     response = HTTParty.get(url)
#     doc = JSON.parse(response.body)
#     toon = {
#       title: doc["title"],
#       img_url: doc["appThumbnailImage"]["url"],
#       url: "http://webtoon.daum.net/webtoon/view/#{webtoon["nickname"]}",
#       desc: doc["introduction"],
#       score: doc["averageScore"]
#     }
#     @webtoons << toon
#   end
# 
#   @webtoons.each do |webtoon|
#     Post.first_or_create(
#       title: webtoon[title:],
#       img_url: webtoon[img_url:],
#       url: webtoon[url:],
#       desc: webtoon[desc:],
#       score: webtoon[score:].to_f
#     )
#   end
#
# end

get '/today' do
# 1. url을 만든다
  time = Time.now.to_i
  week = DateTime.now.strftime("%a").downcase
  url = "http://webtoon.daum.net/data/pc/webtoon/list_serialized/#{week}?timeStamp=#{time}"
  # puts url
# 2. 해당 url에 요청을 보내고 데이터를 받는다.
  response = HTTParty.get(url)
# 3. json형식으로 날아온 데이터를 HASH형식으로 바꾼다.
  doc = JSON.parse(response.body)
  # puts doc.class
# 4. key를 이용해서 원하는 데이터만 수집한다.
# 원하는 데이터: 제목, 이미지, 웹툰 링크, 소개, 평점.
@webtoons = Array.new
  doc["data"].each do |webtoon|
    toon = {
      title: webtoon["title"],
      img_url: webtoon["appThumbnailImage"]["url"],
      url: "http://webtoon.daum.net/webtoon/view/#{webtoon["nickname"]}",
      desc: webtoon["introduction"],
      score: webtoon["averageScore"]
    }
      # puts toon
      @webtoons << toon
  end
  # puts @webtoons

# 5. view에서 보여주기 위해 @webtoons 라는 변수에 담는다.
  erb :webtoon_list
end

get '/week/:day' do

  day = params[:day]
  url = "http://webtoon.daum.net/data/pc/webtoon/list_serialized/#{day}"
  response = HTTParty.get(url)
  doc = JSON.parse(response.body)

  @webtoons = Array.new
  doc["data"].each do |webtoon|
    toon = {
      title: webtoon["title"],
      img_url: webtoon["appThumbnailImage"]["url"],
      url: "http://webtoon.daum.net/webtoon/view/#{webtoon["nickname"]}",
      desc: webtoon["introduction"],
      score: webtoon["averageScore"]
    }
      @webtoons << toon

      Post.first_or_create(
        title: webtoon["title"],
        img_url: webtoon["appThumbnailImage"]["url"],
        url: "http://webtoon.daum.net/webtoon/view/#{webtoon["nickname"]}",
        desc: webtoon["introduction"],
        score: webtoon["averageScore"]
      )
    end

  erb :day
end
