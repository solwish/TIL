# 기본이 되는 정보들
require 'sinatra'

get '/' do
  send_file 'home.html'
end

get '/me' do
  send_file 'me.html'
end

get '/dinner' do
  #점심추천 로직
  #랜덤으로 하나 뽑아 출력
  list = ["참치회", "스테이크", "파이어볼"]
  @choice = list.sample
  @url = {
    "참치회" => "http://thumbnail.egloos.net/720x0/http://pds27.egloos.com/pds/201602/02/32/b0302632_56affbd51c948.jpg",
    "스테이크" => "http://www.hotelavia.net/news/photo/201612/1085_2119_3512.jpg",
    "파이어볼" => "http://lesprit.kr/img_goods/1472611123.jpg"
  }
  #해쉬는 중괄호야
  # url["참치회"]

  # if choice == "참치회"
  #   url = 'http://thumbnail.egloos.net/720x0/http://pds27.egloos.com/pds/201602/02/32/b0302632_56affbd51c948.jpg'
  # elsif choice == "스테이크"
  #   url = 'http://www.hotelavia.net/news/photo/201612/1085_2119_3512.jpg'
  # elsif choice == "파이어볼"
  #   url = 'http://lesprit.kr/img_goods/1472611123.jpg'
  # end

  # "<p>#{choice}</p>
  #   <img src=#{url[choice]}>"
  erb :dinner
  # return list.sample
  #루비는 자동으로 마지막 문장을 리턴으로 보냄
end
