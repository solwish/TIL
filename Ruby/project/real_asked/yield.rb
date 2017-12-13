def hello
  puts "hello"
  yield
  puts "welcome"
end

# hello() do
#   puts "john"
# end

hello {puts "john"}
