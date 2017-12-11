text = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only."

# text -> 단어별 끊긴 배열을 하나 만든다.
# words = ["it", "was"]
# wf = Hash.new(0)
# hash를 돌면서 각각의 요소(단어)가 몇 번 나왔는지 출력
# words = text.downcase.split(",")
words = text.downcase.split(" ")

wf = Hash.new(0)
words.each do |word|
  if word.include? ","
    # word.gsub!(/,/, "")
    word[-1] = ""
  elsif word.include? "."
    word[-1] = ""
    # word.gsub!(/./, "")
  end
  wf[word] += 1
end
# wf.values.sort!
max=0
wf.each do |k, v|
  max = (max < v) ? v : max
  puts "#{k}: #{v}"
end

print "최댓값은 ", max, "\n"
puts "함수로 최댓값 찾기 #{wf.values.max}"
# puts wf.methods
# hash가 쓸 수 있는 모든 메서드를 출력해줌.
