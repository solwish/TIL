# 1. 사람 이름, 투표한 것
# - action='/vote'
# - 'vote.csv'에 결과를 쓴다.
# 2. '/result'
# - 'vote.csv'의 결과물을 보여준다

require 'sinatra'
require 'csv'
# require 'date'

get '/' do
  erb :index
end

get '/vote' do
  @name = params["name"]
  @vote = params["vote"]

  CSV.open("vote.csv", "a") do |csv|
  csv << [@name, @vote]
  end

  erb :vote
end

get '/result' do
  @count = Hash.new(0)
  puts "aaaa"
  CSV.foreach("vote.csv") do |row|
    @count[row[1]] += 1
    # @list << row
  end
  # puts @count.inspect
  # 어떤 상태인지 볼 수 있는 함수인듯
  erb :result
end
