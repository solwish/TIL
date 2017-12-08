#경로변경
# puts Dir.pwd
Dir.chdir("src")
# puts Dir.pwd

20.times do |n|
  File.open( "#{(n+1)}list.txt", "w") do |f|
    f.write( "#{(n+1)}번째 파일입니다." )
  end
end

# .txt 파일 20개를 만든다.
# 몇번째 파일 + list
# concatenation : 합체 "" + ""
# interpolation : 보간 수술? "()"

# age = 99
# puts "내 나이는 " + age.to_s
# #합체 예시
#
# puts "내 나이는 #{age}"
# #인터폴 예시
