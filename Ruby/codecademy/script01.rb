print "What's your first name? "
first_name = gets.chomp

print "What's your last name? "
last_name = gets.chomp

print "What city are you from? "
city = gets.chomp

print "What state or province are you from? "
state = gets.chomp

puts "Your name is #{first_name.capitalize!} #{last_name.capitalize!} and you're from #{city.capitalize!}, #{state.upcase!}!"

puts ""

puts "Your name is #{first_name} #{last_name} and you're from #{city}, #{state}!"
