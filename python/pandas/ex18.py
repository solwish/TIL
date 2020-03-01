# 기술 통계 계산

# pandas 는 일반적인 수학/통계 메서드를 가지고 있다.
# pandas 의 메서드는 처음부터 누락된 데이터는 제외하고 연산되도록 설계 ex) nan 등
# 하지만 skipna = False 옵션을 이용하면 NA값을 제외시키지 않는다(디폴트값은 True)

import pandas as pd
from pandas import Series, DataFrame
import numpy as np

df = DataFrame([[1.4, np.nan], [7.1, -4.5], [np.nan, np.nan], [0.75, -1.3]],
        index=['a','b','c','d'], columns=['one','two'])

print(df)

# sum() 메서드는 각 컬럼의 합을 더해서 Series 객체를 반환한다
print(df.sum())
print(df.sum(axis=1)) # 각 행의 합을 반환한다(기본이 컬럼합이니 1행별 합)

# skipna
print(df.sum(axis=1, skipna=False))

# idxmin, idxmax : 최솟값, 최댓값을 가지고 있는 색인 값 반환
# (간접 통계를 반환)

print(df.idxmax())
print(df.idxmin())

# cumsum() 누산 메서드 : 누적하여 값을 더해줌
print(df.cumsum())

# 모든 중복된 값을 하나 씩만 출력하는 메서드

s1 = Series(['c', 'a', 'd', 'a', 'a', 'b', 'b', 'c', 'c'])
print(type(s1.unique()))
print(s1.unique())
print(s1.unique().sort())       # unique 함수 값은 정렬되지 않음
print(s1.sort_values().unique())

cnt = s1.value_counts() # 값의 갯수를 계산(도수), 반환값은 Series 객체
print(cnt) # 내림차순으로 정렬된다.

#isin 메서드는 어떤 값이 Series에 있는지 나타내는 메소드
# boolean 값을 반환/ DataFrame, Series 에서 원하는 값을 여부확인 가능
print(s1)
print(s1.isin(['a', 'c']))
mask = s1.isin(['a', 'c'])
print(s1[mask])  #이런식으로 하면 원하는 값만 출력가능

data = DataFrame({'Q1': [1,3,4,3,4],
                  'Q2': [2,3,1,2,3],
                  'Q3': [1,5,2,4,4]})
print(data)
res = data.apply(pd.value_counts)  #.fillna(0)
print(res)
print(res.fillna(0))  # 갯수가 없는곳은 na가 아니라 0으로 처리가능

# 누락된 데이터 처리(pandas의 설계 목표 중 하나는 누락된 데이터를
# 쉽게 처리하는 것)
# pandas에서 누락된 데이터는 실수건 아니건 모두 NaN(not a number) 취급
stringData = Series(['aaa', 'bbb', np.nan, 'ccccc'])
print(stringData)
# NaN의 값은 파이썬의 None값 NA와 같은 값으로 취급됨
print(stringData.isnull())  # null값이 있는지 없는지 확인할 수 있는 메서드

stringData[0] = None
print(stringData.isnull())
