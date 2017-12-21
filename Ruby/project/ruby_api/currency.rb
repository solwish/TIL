require 'eu_central_bank'

@bank = EuCentralBank.new

# from = 'USD'
# to = 'KRW'

# # 백센트 단위로 해줘야 1달러임
# result = bank.exchange(100, from, to)
# puts result

def exchange(from)
  @bank.update_rates
  @bank.exchange(100, from, "KRW")
end

puts "$1 은 #{exchange('USD')}원"
