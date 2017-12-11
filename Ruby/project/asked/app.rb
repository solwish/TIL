require 'sinatra'

get '/' do

  @list = Array.new

  File.open("question.txt", "r") do |f|
    f.each_line do |line|
      @list << line
    end
  end
  erb :index
end

get '/ask' do
  @q = params["question"]
  @id = params["id"]

  File.open("question.txt", "a") do |f|
    f.write(@q + ", " + @id)
    f.write("\n")
  end

  erb :ask
end
