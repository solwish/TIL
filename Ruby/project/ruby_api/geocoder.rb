require 'geocoder'

input = gets.chomp
p Geocoder.coordinates(input)
