import pandas as pd
import numpy as np
from numpy import nan as NA
from pandas import Series, DataFrame

# Series 누락된 데이터 골라내기
# dropna 함수(이거 말고도 여러 방법이 있음)
data = Series([1, NA, 3.4, NA, 8])
print(data.dropna())

da = Series([1, NA, 3.4, NA, 8]).dropna()
print(da)

# boolean 색인 이용
print(data.notnull())
print(data[data.notnull()])

# DataFrame에서 Missing Data 작업
# dropna는 기본적으로 NA값이 하나라도 있는 로우는 제외
data = DataFrame([[1,5,5.3], [1,NA,NA],[NA,NA,NA],[NA,3.3,3]])
print(data)
print()
print(data.dropna()) # na가 하나라도 있으면 행 전체가 날아감
# how='all' 옵션을 주면 전체 구성요소가 NA인 행만 제거됨
print(data.dropna(how='all'))

data[4] = NA
print(data)
print(data.dropna(how='all', axis=1))

data2 = DataFrame([[1,2,3,NA],
                   [NA,33,11,NA],
                   [11,NA,NA,NA],
                   [43,NA,NA,NA]])
print(data2)

# 몇개의 value가 들어 있는 행을 가져오고 싶을 경우 사용되는 인자는 thresh
print(data2.dropna(thresh=2))

# 누락된 값을 채우기
# Dataframe에서는 누락된 데이터를 완벽하게 골라낼 수 없어 다른 값도 버려지게 됨
# 이경우에는 fillna메서드를 활용하여 채울 수 있음
print(data2.fillna(0))

# fillna의 활용에 따라 각 칼럼마다 다른 값을 채워넣을 수 있음
print(data2.fillna({1: 10,
                    3: 30}))
print()
print(data2)
print()
print(data2.fillna(method='ffill', limit=1)) #바로 앞행의 값을 쓰되, 1번까지만 씀

# 평균값으로 채우기
data3 = Series([1, NA, 3.5, NA, 7])
print(data3.fillna(data3.mean()))
