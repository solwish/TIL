Dir.chdir("src")

puts Dir.pwd

#ls와 같은 기능이야. Array로 만들어서 보내줌
# puts Dir.entries(Dir.pwd)
# puts Dir.entries('C:/Users/student/project/src')

list = Dir.entries('C:/Users/student/project/src').reject {|name| name[0] == "."}
# 파일명중에 첫글자가 .으로 시작되는건 지워줘
# puts list.class

# list.each do |faker|
#   puts faker
#   File.rename("faker")
#   #.과 ..때문에 22번을 돔
# end

puts list.length
# File.rename("1list.txt", "sap_1list.txt")

# list.each do |f|
#   File.rename(f, "2017_sap" + f)
# end
