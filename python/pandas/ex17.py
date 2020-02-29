# 중복색인

import pandas as pd
from pandas import Series, DataFrame
import numpy as np

obj = Series(range(5), index=['a','a','b','b','c'])
print(obj)
print(obj['a'])  # 1차원 배열(Series) 반환
print(obj['c'])  # 단일 값(스칼라) 반환
# 즉, 중복되는 색인 값을 이용하여 Series 객체를 반환할 수 있음

df = DataFrame(np.random.randn(4,3), index=['a','a','b','b'])
print(df)
print(df.ix['b'])
