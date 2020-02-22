import pandas as pd
from pandas import Series, DataFrame
import numpy as np

obj = Series(np.arange(5), index=['a','b','c','d','e'])

print(obj)

obj2 = obj.drop('c')
print(obj2)

obj3 = obj.drop(['d','c','b'])
print(obj3)

df = DataFrame(np.arange(16).reshape(4,4), index=['seoul', 'busan', 'deagu', 'incheon'],
columns=['one', 'two', 'three', 'four'])
print(df)

df2 = df.drop(['seoul', 'busan'])
print(df2)

df3 = df.drop('three', axis=1)
print(df3)

df4 = df.drop(['four', 'two'], axis=1)
print(df4)
