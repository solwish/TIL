movies = {
  StarWars: 4.8,
  Divergent: 4.7
  }

puts "What would you like to do? "

choice = gets.chomp

case choice
when "add"
  puts "What movie would you like to add? "
  title = gets.chomp
  puts "What rating does the movie have? "
  rating = gets.chomp
  if movies[title.to_sym] == nil
  	movies[title.to_sym] = rating.to_i
  else
    puts "the movie already exists"
  end
when "update"
  puts "What movie would you like to update? "
  title = gets.chomp
  puts "What rating does the movie have? "
  rating = gets.chomp
  movies[title.to_sym] = rating.to_i
when "display"
  movies.each do |movie, rating|
		puts "#{movie}: #{rating}"
	end
when "delete"
  puts "What movie would you like to delete? "
  title = gets.chomp
  movies.delete(title)
else
  puts "Error!"
end
