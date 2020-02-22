from pandas import Series, DataFrame
import pandas as pd
import numpy as np

# 색인(index) 객체

# pandas의 색인 객체는 표형식의 데이터에서 각 행과 열에 대한 헤더(이름)
# 메타데이터(축의 이름)를 저장하는 객체

# Series나 DataFrame 객체를 생성할 때 사용되는 배열이나 순차적인 이름은 내부적으로 색인으로 변환

obj = Series(range(3), index=['a','b','c'])

print(obj)

idx = obj.index
print(idx)
print(idx[1]) #b
print(idx[1:]) #b, c

#idx[1] = 'd'	에러남. 색인객체는 변경이 불가능함

index2 = pd.Index(np.arange(3)) # 인덱스 대문자 주의
print(index2)

# 재색인(reindex) : 새로운 색인에 맞도록 객체를 새로 생성하는 기능

obj = Series([2.3, 4.3, -4.1, 3.5], index=['d', 'b', 'a', 'c'])
print(obj)
obj2 = obj.reindex(['a','b','c','d','e'])
print(obj2)

obj3 = obj.reindex(['a','b','c','d','e','f'], fill_value=0.0)
print(obj3)

df = DataFrame(np.arange(1,10,1).reshape(3,3), index=['a','b','d'], columns=['x','y','z'])
print(df)

df2 = df.reindex(['a','b','c','d'])
print(df2)

col =['x','y','w','z']
df3 = df2.reindex(columns=col)  #컬럼 색인 변경
print(df3)

obj4 = Series(['blue','red','yellow'], index=[0,2,4])
print(obj4)

obj5 = obj4.reindex(range(6), method='ffill') # 앞에 있는 인덱스 값으로 대체
print(obj5)

df3 = df.reindex(index=['a','b','c','d'], method='ffill', columns=col)
#DataFrame에서의 보간은 row(행)에 대해서만 이루어진다
print(df3)
print("-----------------------------------------------------")
#재색인은 ix를 이용해서 처리할 수도 있다, 하지만 메소드 사용 불가
df4 = df.ix[['a','b','c','d'], col]#, method='ffill']
print(df4)
