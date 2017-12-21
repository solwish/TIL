require 'open-uri'
require 'json'

my_numbers = (1..45).to_a.sample(6).sort
# [*1..45].sample 6
# my_numbers = [4,
# 6,
# 15,
# 25,
# 26,
# 33,
# ]

url = 'http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo='

page = open(url).read
hash = JSON.parse(page)

bonus_number = hash["bnusNo"]
lucky_numbers = Array.new

6.times do |i|
  lucky_numbers << hash["drwtNo#{(i+1)}"]
end

# info.each do |k, y| luck<< value if key.include?('drwtNo')

# puts lucky_numbers
check = false

cnt = 0

# 6.times do |i|
#   check = true if bonus_number == my_numbers[i]
#   6.times do |j|
#     cnt += 1 if my_numbers[i] == lucky_numbers[j]
#   end
# end

cnt = (lucky_numbers & my_numbers).count
check = my_numbers.include?(bonus_number)

if cnt == 5
  if check
    puts "2등"
  else
    puts "3등"
  end

  elsif cnt == 6 then puts "1등"
  elsif cnt>= 3 then puts "#{8 - cnt}등"
  else
    puts "꽝"
end

# puts check
# puts "내번호"
# puts my_numbers
# puts "로또 번호"
# puts lucky_numbers
# puts "보너스 번호"
# puts bonus_number
# puts "일치수"
# puts cnt
