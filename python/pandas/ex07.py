# Pandas : 데이터 분석 기능을 제공하는 라이브러리
# 예를 들면, CSV파일 등의 데이터를 읽고 원하는 데이터 형식으로 변환해줌

# pandas 자료구조 : Series, DataFrame
# Series는 일차원 배열 같은 자료구조

import pandas as pd
from pandas import Series, DataFrame

obj = Series([3, 22, 34, 11])
print(obj)
print(obj[1])

print(obj.values)
print(obj.index)

obj2 = Series([4,5,6,2], index=['d', 'c', 'e', 'f'])
print(obj2)

print(obj2['c'])
print(obj2[['d', 'f', 'c']])  #리스트이기 때문에 대괄호 주의

print(obj2*2)

print('b' in obj2)
print('c' in obj2)

t1 = Series(['a', 'b', 'c', 'd'])
#print(t1)

data = {'kim':3400, 'hong':2000, 'kang':1000, 'lee':2400} # 파이썬의 사전형 데이터
obj3 = Series(data)
print(obj3)

name = ['woo', 'hong', 'kang', 'lee']
obj4 = Series(data, index = name)
print(obj4)

# 누락된 데이터를 찾을 때 사용하는 함수 isnull, notnull

print(pd.isnull(obj4))
print(pd.notnull(obj4))