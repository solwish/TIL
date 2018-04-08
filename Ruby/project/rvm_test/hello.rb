require 'launchy'

url = "http://www.naver.com"
search = "https://search.naver.com/search.naver?ie=UTF-8&query="
keywords = ["klid", "한국지역정보개발원", "bitcoin", "전자신문"]

Launchy.open(url)

keywords.each do |key|
  Launchy.open(search + key)
end
