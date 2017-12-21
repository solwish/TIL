require 'forecast_io'




ForecastIO.configure do |configuration|
  configuration.api_key = 'your key'
end

forecast = ForecastIO.forecast(37.501498, 127.039876)

f = forecast.currently

def f_to_c(deg)
  deg = deg.to_f
  ((deg - 32) * 5 / 9 ).round(2)
end

puts f.summary
puts f_to_c(f.temperature)
