require 'sinatra'
require 'httparty'
require 'nokogiri'
require 'uri'
require 'csv'
require 'date'

get '/' do
  erb :index
end

get '/search' do
  @id = params["id"]

  @encoded = URI.encode(@id)
  response = HTTParty.get("http://www.op.gg/summoner/userName=" + URI.encode(@id))

  html = Nokogiri::HTML(response.body)
  @win = html.css('#SummonerLayoutContent > div.tabItem.Content.SummonerLayoutContent.summonerLayout-summary > div.SideContent > div.TierBox.Box > div.SummonerRatingMedium > div.TierRankInfo > div.TierInfo > span.WinLose > span.wins').text
  @losses = html.css('#SummonerLayoutContent > div.tabItem.Content.SummonerLayoutContent.summonerLayout-summary > div.SideContent > div.TierBox.Box > div.SummonerRatingMedium > div.TierRankInfo > div.TierInfo > span.WinLose > span.losses').text
  @tier = html.css('#SummonerLayoutContent > div.tabItem.Content.SummonerLayoutContent.summonerLayout-summary > div.SideContent > div.TierBox.Box > div.SummonerRatingMedium > div.TierRankInfo > div.TierRank > span')

  #w는 write / append, read도 쓸 수 있음
  File.open( "log.txt", "a+") do |f|
    f.write( "#{@id}, #{@win}, #{@losses}, #{@tier.text}" + "\n")
    # 아이디, 승, 패, 티어
  end

  CSV.open("log.csv", "a+") do |csv|
    csv << [@id, @tier.text, @win, @losses, Time.now.to_s]
  end

  erb :search
end
