require 'geocoder'
require 'forecast_io'

ForecastIO.configure do |configuration|
  configuration.api_key = 'your key'
end

puts "어디가 궁금하세요"
input = gets.chomp
map = Geocoder.coordinates(input)

forecast = ForecastIO.forecast(map[0].to_i, map[1].to_i) if map

f = forecast.currently

def f_to_c(deg)
  deg = deg.to_f
  ((deg - 32) * 5 / 9 ).round(2)
end

puts f.summary
puts f_to_c(f.temperature)
