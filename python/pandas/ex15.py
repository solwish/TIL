# 함수적용 및 매핑

import pandas as pd
from pandas import Series, DataFrame
import numpy as np

# numpy.random 모듈에 있는 randn함수는 임의의 정규분포 데이터를 생성
df = DataFrame(np.random.randn(4,3), columns=list('bde'),
    index=['seoul', 'busan', 'daegu', 'incheon'])

# 절댓값
print(df)
print(np.abs(df))

# 각 열마다(bde별로) 최댓값과 최솟값의 차를 구하는 법
f = lambda x:x.max()-x.min()
print(f)
print(df.apply(f))

# 각 행마다(서울, 부산, 대구, 인천 별로) 최댓값과 최솟값의 차를 구하는 법
print(df.apply(f, axis=1))

# 함수적용
def f(x):
    return Series([x.min(), x.max()], index=('min', 'max'))

print(df.apply(f))#, axis=0))

# DataFrame 객체에서 실수 값을 문자열 포맷으로 변환 할 경우 applymap함수를 이용
format = lambda x: '%.2f' % x # 소수점 두자리로 만들겠다는 의미
print(df.applymap(format))

# Series 객체에서 실수 값을 문자열 포맷으로 변환 할 경우 map함수를 이용
print(df['e'].map(format))
