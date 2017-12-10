require 'launchy'

url = "http://www.naver.com"
search = "https://search.naver.com/search.naver?query="
keywords = ["kospi", "bitcoin"]

Launchy.open(url)

keywords.each do |key|
  Launchy.open(search + key)
end
