require 'stock_quote'
require 'eu_central_bank'

@bank = EuCentralBank.new

def exchange(money)
  @bank.update_rates
  rate = @bank.exchange(100, "USD","KRW").to_f
  return (money.to_f * rate).round(1)
end

# ARGV.each do |company|
DATA.each do |company|
  # p company
  company.chomp!
  stock = StockQuote::Stock.quote(company)
  puts "#{stock.name} 은 #{exchange(stock.l)}원"
  puts "----------------------------------------------"
end

# puts DATA.class
# p DATA.methods
# puts DATA.inspect
# # 입력받는 법 gets.chomp
# input = gets
# puts input
# p input
# 엔터도 들어가기 때문에 gets.chomp





__END__
AAPL
FB
TSLA
GOOGL
AMZN
