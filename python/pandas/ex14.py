#연산
# DataFrame과 Series간의 연산

import pandas as pd
from pandas import Series, DataFrame
import numpy as np

arr = np.arange(12.).reshape(3,4)

print(arr)
print(arr[0])

print(arr-arr[0])

df = DataFrame(np.arange(12).reshape(4,3), columns=list('bde'),
     index=['seoul','kwangju','daegu','incheon'])
print()
print(df)

s1 = df.ix[0]
print(s1)

print(df-s1)
print('-------------------')
print(df)
s2 = Series(range(3), index=list('bef'))
print(s2)

print(df+s2)

print('-------------')  # 인덱스 갯수가 일치하지 않는 경우
s3 = df['d']
print(s3)
print(df+s3)

# 행에 대한 연산을 수행할 경우 함수(add, sub 등)를 이용
print()
print(df)
print(df.add(s3, axis=0))
print(df.sub(s3, axis=0))
