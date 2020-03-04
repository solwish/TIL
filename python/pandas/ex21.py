import pandas as pd
from pandas import Series, DataFrame
import numpy as np

df = DataFrame({'a':range(7), 'b':range(7,0,-1),
                'c':['one', 'one', 'one', 'two', 'two', 'two', 'two'],
                'd':[0,2,1,0,1,2,3,]})  #마지막 콤마 의미 없음
print(df)

# set_index 메서드 : 하나 이상의 컬럼을 색인으로 하는 새로운 DataFrame을 생성
print(df.set_index(['c', 'd']))
# 기존 컬럼값을 유지하면서 인덱스 지정하기
print(df.set_index(['c','d'], drop=False))
# set_index와 반대되는 개념의 메서드 : reset_index() -> 색인을 컬럼으로 변환
df2 = df.set_index(['c', 'd'])
print(df)
print(df2)
print(df2.reset_index())
