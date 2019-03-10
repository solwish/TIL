install.packages("KoNLP")  # 패키지 설치

KoNLP::extractnoun
library(KoNLP)
extractNoun("아버지가 방에 들어 가신다")  #명사 추출 
SimplePos09("아버지가 방에 들어 가신다")
?SimplePos09
a1=readLines(choose.files(), encoding ="UTF-8")
a1
a1[97]
a1[98]  #98번째 문장 
a2=extractNoun(a1)
a2[98]
a3=table(unlist(a2)) #빈도수 언리스트는 문장단위로 나눠주던거 안하게 하는 함수인듯 //unlist(a2), a2 비교
a4=data.frame(a3)  #excel 형식으로 데이터 저장
# wordcloud2 텍스트 시각화 하는 함수
install.packages("wordcloud2")
library(wordcloud2)
wordcloud2(a4)
?wordcloud2
wordcloud2(a4, shape = 'star')
sort(a3, decreasing = TRUE)[1:100]  #1~100위 내림차순으로 추출한 값
a5 = data.frame(sort(a3, decreasing = TRUE)[1:100])
wordcloud2(a5, shape = 'diamond', size=1, fontWeight = 'normal')
example("wordcloud2")
help(package="wordcloud2")

# 데이터 형
3.5+2
"ABC"
'abc'
TRUE
T
T + T +T

# 전처리 맛보기
View(iris)  #아이리스 꽃받침의 너비 등 150개의 데이터
summary(iris)  # 요약 최솟값 및 최댓값, 평균 1,3분기점 등
boxplot(iris[1:4])  # 데이터 시각화
quantile(iris$Sepal.Length)  # dataflame 의 구조는 $를 써줄 수 있음
quantile(iris$Sepal.Length, c(0.05, 0.95)) # c를 통해 특정 값 알 수 있음
iris$Sepal.Length>7.2
iris[iris$Sepal.Length>7.2,]
boxplot(Sepal.Width~Species, data=iris)  # y축, x축 설정, 데이터 설정
install.packages("Rlof")  # 아웃라이어 함수값을 구해주는 패키지
library(Rlof)
lof1=lof(iris[1:4], 5)
ir1=iris[lof1<2,]
boxplot(ir1)

#교재 p42~
b1=3
b1[1] # 1차원 배열인듯
print(b1)
(b2=5)
#p54~ vector
(b3=100:1)
(b4 = c(3,8,9,2,5))
mean(b4)
b4[-2]  #두번째 값 제외하고 보여줘
b5=c(b4, NA)  # b4값에 NA데이터 하나 추가
b5
mean(b5)
is.na(b5)
sum(is.na(b5))
mean(b5, na.rm = TRUE)  #na값 제거 가능
?ifelse()
b6 = ifelse(is.na(b5), mean(b5, na.rm = TRUE), b5)
names(b6)
names(b6)=c("A","B","C","D","E","F")
b6["D"]  # b6[4]
b6[c(2,4,6)]

#행렬(Matrix) p67~
#matrix(백터, 행수, 열수, 방향)
b7=matrix(1:20, 4, 5)  ## 행열중 하나만 입력해도 자동으로 채워줌 
b7[1, 2]
(b8=matrix(31:50, ncol = 5, byrow = TRUE))
b9=matrix(b8, nrow = 1)
dim(b9)  ##차원 나타내주는 함수
b9
dim(b7)
dim(b8)
b10=rbind(b7, b8)
b11=cbind(b7, b8)
b7[2,2]
b7[6]
b8[6]
b8

#array p66~
#array(데이터, dim=c(행,열,면,))
c1 = array(1:60, dim=c(4,5,3))
dim(c1)
c1
#jpeg는 3차원, png는  불투명까지 4차원  //외부 이미지 가지고 올꺼야 
install.packages("jpeg")
library(jpeg)
img1=readJPEG(choose.files())
dim(img1)
img1[,,1]=img1[,,1]*0.5
img2=img1[80:300,100:450,] #자름
writeJPEG(img2, target = "D:\\exam/img2.jpg")  #백슬러시는 두번써줘야해
#rownames()
#colnames()
#dimnames()

c2 = matrix(1:9, 3)
c3 = matrix(1:6, 3)
c4 = matrix(1:9, 3, byrow = T)
# 곱하기 두종류 * = 같은 자리끼리의 곱, %*% 행렬의 곱
c2
c4
c2*c4
c2%*%c4
b6
b6 %in% c(3,5) #b6중에 값이 3 or 5인거

# p75~
install.packages("doBy") #그룹에 따라 데이터 일부를 추출하는 패키지
# 층하추출 통계기법 사용할거야, 그룹별로 고르게 데이터를 추출
library(doBy)
set.seed(1234)  #무작위지만 이거 먼저치면 아랫줄 항상 같음(시드값 설정)
sample(1:45, 6, replace = F) #무작위 추출
sort(sample(1:45, 6, replace = F), decreasing = F)
ind1 = sample(1:150, 150*0.7, replace = F)
train=iris[ind1,]
nrow(train)
table(train$Species)

sampleBy(~Species , 0.7, data=iris, )  #왼쪽에 그룹변수, 층하추출
train2=sampleBy(~Species , 0.7, data=iris, )
table(train2$Species)

# list 구조 p81~
d1=list(a=4, b=c(3,5,2), d=c1, f=iris[1:10,]) #스칼라, 백터, 어레이, 데이터프레임
d1
# 아까 쓴 unlist는 이 리스트구조를 깨고 백터구조로 바꾸는 함수
