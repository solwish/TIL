# 연산
# 색인이 다른 객체를 더하는 산술연산

import pandas as pd
from pandas import Series, DataFrame
import numpy as np

s1 = Series([5,6,-1,2], index=['a','c','d','e'])

s2 = Series([3,4,-1,2,7], index=['a','c','e','f','g'])

print(s1+s2)

df1 = DataFrame(np.arange(9).reshape(3,3), columns=list('bcd'),
      index = ['seoul', 'busan', 'kwangju'])

df2 = DataFrame(np.arange(12).reshape(4,3), columns=list('bde'),
      index=['incheon', 'seoul', 'busan', 'suwon'])

print(df1)
print()
print(df2)
print()
print(df1+df2)

df3 = DataFrame(np.arange(12).reshape(3,4), columns=list('abcd'))
df4 = DataFrame(np.arange(20).reshape(4,5), columns=list('abcde'))

print()
print(df3)
print()
print(df4)
print()
print(df3+df4)

print(df3.add(df4, fill_value=-1))  # df3의 빈값이 fill_value값으로 채워진다음에 더함
print(df3)  #df3는 변화 없음
print(df4.add(df3, fill_value=-1))  # 값은 똑같음
print(df3.reindex(df4.index, columns=df4.columns, fill_value=0))
