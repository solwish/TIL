# 정렬과 순위

# 행의 색인이나, 열의 색인 순으로 정렬하는 등의 기준 필요

import pandas as pd
from pandas import Series, DataFrame
import numpy as np

df = DataFrame(np.random.randn(4,3), columns=list('bde'),
        index=['seoul','busan','daegu','incheon'])

format = lambda x: '%.2f' % x

print(df['e'].map(format))

s1 = df['e'].map(format)
print(s1.sort_index()) # index 순으로 정리해서 보고싶으면 sort_index()

df2 = DataFrame(np.arange(8).reshape(2,4), index=['three', 'one'],
        columns=['d','a','b','c'])

print(df2)
print(df2.sort_index())       # 로우를 기준으로 정렬
print(df2.sort_index(axis=1)) # 컬럼을 기준으로 정렬
print(df2.sort_index(axis=0).sort_index(axis=1))

# index 정렬의 디폴트값은 오름차순으로 정렬됨.
# 내림차순으로 하고싶으면 ascending = False 로 설정
print(df2)
print(df2.sort_index(axis=1, ascending=False))

# value 정렬할 경우 sort_values 메서드를 사용
obj = Series([4, 7, -3, 1])
print(obj.sort_values())

# NaN은 가장 마지막에 출력됨
obj2 = Series([4,np.nan, 8, np.nan, -10, 2])
print(obj2.sort_values())

# 정렬 순위
frame = DataFrame({'b':[4,7,-5,2], 'a':[0,1,0,1]})
print(frame.sort_values(by='b')) # by옵션에 정렬하고자 하는 컬럼명 명시
print(frame.sort_values(by=['a']))
print(frame.sort_values(by=['a','b'])) #a를 먼저 기준으로 하고 그 다음에 b를 기준

print('--------------------------------')
# 순위 정하는 함수는 rank() 이다
obj3 = Series([7,-2,7,4,2,0,4])
print(obj3)
print('--------rank 함수---------')
print(obj3.rank())  # 4와 7이 두개라 두 순위에 평균값으로 연산되어 순위표현됨

print(obj3.rank(method='first'))  #method='first'는 데이터의 순서에 따라 순위 결정
# 같은 값일때 데이터 순위에 따라 순위가 정해짐

# 내림차순으로 순위를 정하기
print(obj3.rank(ascending=False))

# 값은 값일 때, 순서(인덱스 오른차순)에 따라 순위 정하기
print(obj3.rank(ascending=False, method='first'))

print('-------------------------------')
# 그룹지어서 순위를 매김
print(obj3)
print(obj3.rank(ascending=False, method='max')) # 최고값 동점자가 있으면 둘 다 2등
print(obj3.rank(ascending=False, method='min')) # 최고값 동점자가 있으면 둘 다 1등
