import pandas as pd
from pandas import Series, DataFrame
import numpy as np

obj = Series(np.arange(4,), index=['a','b','c','d'])
print(obj['b':'c'])

print(obj)

data = DataFrame(np.arange(16).reshape(4,4), index=['seoul', 'busan',
'kwangju', 'daegu'], columns=['one','two','three','four'])

print(data)
print(data['two'])
print(data[['one', 'three']])

print(data[:2])
print("----------------")
print(data[2:])
print("----------------")
print(data[data['three'] > 7])

data[data<5] = 0
print(data)

# ix 속성 : DataFrame의 특수한 색인 필드(속성) / 앞에 쓴 순서부터 출력됨
print(data.ix['busan'])

print(data.ix['busan', ['four','two']])
print(data.ix[['daegu', 'kwangju'], ['three', 'four']])

print(data.ix[['daegu', 'kwangju'], [3,0,1]])
print("-------------------")
print(data)
print('-------------------')
print(data.ix[2,3])

print(data.ix[:'kwangju', 'three'])
print(data.ix[data.three >5, :3])
