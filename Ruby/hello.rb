require 'launchy'
#인쿠르드와 같은거얌

url = "http://www.naver.com"
search = "https://search.naver.com/search.naver?query="
keywords = ["kospi", "아이유", "kosdaq", "nasdaq", "bitcoin"]

Launchy.open(url)

keywords.each do |key|
	Launchy.open(search + key)
end
