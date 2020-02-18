import pandas as pd
from pandas import Series, DataFrame
import numpy as np

# DataFrame은 2차원리스트(2차원배열) 같은 자료구조
# R언어 data.frame 과 비슷하다

a = pd.DataFrame([
  [1,2,3],
  [4,5,6],
  [7,8,9]
])

print(a)
data = {
  'city':['서울', '부산', '광주', '대구'],
  'year':[2000,2001,2002,2002],
  'pop':[4000,2000,1000,1000]
}

df = pd.DataFrame(data, columns=['year', 'city', 'pop'])
print(df)

#색인 개체

#df2 = pd.DataFrame(data, columns=['year', 'city', 'pop', 'debt'], index=[1,2,3,4])
df2 = pd.DataFrame(data, columns=['year', 'city', 'pop', 'debt'], index=['one', 'two', 'three', 'four'])
print(df2)
print()
print(df2['city'])
print(df2['year'])

print(df2.columns)
print(df2.index)
print()
print(df2.ix['three']) #ix: : 로우(행)의 위치 접근할 때 사용하는 메서드
print()

print(df2['city']['three'])

df2['debt'] = 1000
print(df2)

df2['debt'] = np.arange(1, 8, 2)
print(df2)

val = Series([1000, 2000, 3000, 4000])  #현재 시리즈의 인덱스는 0,1,2,3
df2['debt'] = val
print(df2)  # df2의 인덱스는 원투쓰리포라 안들어가 있음

val = Series([1000, 2000, 3000, 4000], index=['one', 'two', 'three', 'four'])
df2['debt'] = val
print(df2)

val1 = Series([1000, 3000, 5000], index=['one', 'three', 'four'])
df2['debt'] = val1
print(df2)

df2['aaa'] = df2.city == '서울'
print(df2)

del(df2['aaa']) # del df2['aaa']
print(df2.columns)

data2 = { 'seoul' : {2001: 20, 2002: 30},
  'busan':{2000: 10, 2001:200, 2002:300}
}

df3 = DataFrame(data2)
print(df3)

#칼럼과 로우 인덱스 바꾸고 싶으면
print(df3.T)
#df3 = df3.T
#print(df3)

print(df3.values) # 저장된 데이터를 2차원 배열로 리턴

