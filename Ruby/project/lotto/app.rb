# 2. 로또 번호 추천 사이트를 만든다.
# - get '/' {} : '로또 추천'라는 버튼을 만들고 -> '/lotto'
# - get '/lotto' {} : 로또 추천을 매번 추천된 번호를 lotto.txt 파일에 저장.

require 'sinatra'

get '/' do
  erb :index
end

get '/lotto' do
  @result = (1..45).to_a.sample(6).sort
  File.open( "lotto.txt", "a+") do |f|
    f.write( "#{@result}" + "\n")
    # f.write(@result)
    # f.write("\n")
  end
  erb :lotto
end
