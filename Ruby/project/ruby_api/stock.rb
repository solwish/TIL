require 'stock_quote'


companies = ['AAPL', 'FB', 'TSLA', 'GOOGL', 'AMZN']

companies.each do |company|
  stock = StockQuote::Stock.quote(company)
  puts stock.name
  puts stock.l
  puts "------------"
end
