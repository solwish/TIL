puts "Text:"
text = gets.chomp

words = text.split
frequencies = Hash.new(0)

words.each do |word|
  frequencies[word] += 1
end

frequencies = frequencies.sort_by do |a, b|
  b
end

frequencies.reverse!
frequencies.each do |x, y|
  puts x + " " + y.to_s
end
