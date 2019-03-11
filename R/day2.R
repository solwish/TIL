#Day 2
read  #외부파일 읽어오기
write #내보내기
load  #내부파일 읽어오기
save  #저장 save.image는 작업환경 전부 저장됨

a1 = c(3, 4, 6, 2)
#setwd("D:/exam") 위에 세션-셋워킹디렉토리리-츄스 디렉토리
getwd()
save(a1, file="data1.Rdata")
save(list=c("a1", "c1"), file="data3.Rdata")  #list옵션을 쓸경우 큰 따옴표
?save
ls()  #data set 이름들
save(list=ls(), file="data2.RData")
save.image("data4.RData")
?rm()
rm(list=ls())  #데이터 셋 지우기
load("data2.RData")

## 공공데이터 분석
# 1차원표기법 요구
vector:a1[2]
matrix:a1[2,3]
array:a1[2,3,4]
#data.frame:a1[2,3], a1["열이름"], a1[1](열단위로 읽기, 벡터)
iris[1]

a1=matrix(1:12, nrow=3, byrow=T)
length(a1)  #데이터 몇개 들어가있나

# list:a1[1], a1[[1]], a1$x

# 87
class(a1)  # 자료형태 확인
str(a1)  # 자료구조(정수, 3행 4열) 확인


#서울열린데이터, kosis, 공공데이터포털
?read.csv
base1=read.csv(choose.files(), header = T, sep = ",")#, encoding = "UTF-8")
str(base1)
dat2017=read.csv(choose.files(), header = T, sep = ",")
dat2017g=read.csv(choose.files(), header = T, sep = ",")
dat2018=read.csv(choose.files(), header = T, sep = ",")
dat2018g=read.csv(choose.files(), header = T, sep = ",")

summary(base1)
summary(dat2017)
#이제 합칠거야
names(dat2017)
names(dat2018)
dat1=rbind(dat2017, dat2018)  ##열(위아래)합치기
dat2=rbind(dat2017g, dat2018g)
install.packages("dplyr")  # 집계, 그룹별 연상 등 라이브러리
library(dplyr)
str(dat1)
dat1$대여일자=as.character(dat1$대여일자)  #자료형 변환
library(stringr)  # char 타입 처리해주는 라이브러리 이미 설치되어있음
help(package="stringr")
dat1$year=str_sub(dat1$대여일자, start=1, end=4)  # 스트링 추출
dat1$month=str_sub(dat1$대여일자, start=5, end=6)  # month 추출
names(dat1)
dat10 <- dat1 %>% select(대여일자, 대여소번호, 이용건수, 운동량, 탄소량, 이동거리.M., 이동시간.분., year, month) %>% group_by(대여일자, 대여소번호) %>% summarise(mean(이용건수), mean(운동량), mean(탄소량), mean(이동거리.M.), mean(이동시간.분.)) #%>% arrange(대여소번호)#%>% arrange(desc(대여소번호))
# 컨트롤 쉬프트 엠 %>% : 순서대로 다음 조건을 처리해줌, select: 열 선택 가능, group_by: 그룹핑, desc: 내림차순, group_by 그룹핑으로 대여서번호,년,월 묶어준다음에 필요한 정보들 평균값 얻은거임
names(dat10)
names(dat2)
# 좌우합치기(연관있는 것끼리 연결)
dat20=merge(dat10, dat2, by = c('대여소번호', '대여일자')) #기준이 되는 변수를 앞쪽에 / all조건은 중복되는것만 합칠지 한번이라도 나온것은 합칠지
# 먼저 dat1과 2로 위아래로 합치고 20으로 좌우도 합친거 by값을 키로 
list1=c("구분", "대여소번호", "위도", "경도", "거치대수")  #목록 편하게 뽑아오기 위해서
names(base1)
dat30=merge(dat20, base1[list1], by="대여소번호")
dat30$year=str_sub(dat30$대여일자, start=1, end=4)
dat30$month=str_sub(dat30$대여일자, start=5, end=6)

#t test : 두개의 집단간 비교할 때 사용
str(dat30)
names(dat30)
dat30$`mean(운동량)`
names(dat30)[3:7] <- c("이용건수", "운동량", "탄소량", "이동거리", "이동시간")
dat30$year = factor(dat30$year) # dat30$year=as.factor(dat30$year)  #자료형 변환
t.test(운동량~year, data=dat30)#, alternative="less", conf.level=0.90)  # ~다음에는 그룹변수가 와야하는데 이건 항상 자료형이 factor이어야 함(범주형 데이터), 컬럼명 한국어면 에러날 수 도 있음
#p-value 5%보다 크면 신뢰해도된다고 판단 

# 분산분석 아노바? 3개 이상의 집단을 비교할 때
dat30_2018=dat30[dat30$year==2018, ]
names(dat30_2018)
str(dat30_2018)
class(dat30_2018$구분)
m1=aov(이용건수~구분, data=dat30_2018) #이용건수가 y축, 구분이 x축
summary(m1)
install.packages("agricolae")
library(agricolae) #시각적으로 볼 수 있는 라이브러리? 
scheffe.test(m1, "구분", console = T)
install.packages("reshape2")
library(reshape2) #p115
?dcast
dat30_2018=dat30_2018[complete.cases(dat30_2018),]
dat4=dcast(dat30_2018, 구분~month, fun.aggregate = mean, value.var = "이용건수")
dat4
m2 = kmeans(dat4[,-1], 4)  #첫번째열 제외하고
dat4$group=m2$cluster
View(dat4)
dat4[dat4$group==4,]
install.packages('party')
library(party)
class(dat4$group)
dat4$group=factor(dat4$group)
m3=ctree(group~., data=dat4[,-1])
plot(m3)  # 의사결정 4번그룹에서 25보다 작을때 클때 그래프와 같은 그룹에서 차이가 있다고 해석??
