# hierarchical indexing(multi-index)
# 색인의 계층 : pandas의 주요 기능으로 색인 단계를 지정할 수 있음

import pandas as pd
from pandas import Series, DataFrame
import numpy as np

data = Series(np.random.randint(1, 11, 10), #1부터 10까지 숫자 10개
              index = [['a','a','a','b','b','b','c','c','d','d'],
                        [1,2,3,1,2,3,5,2,1,2]])
print(data)
print(data.index)
print(data['b'])
print(data['a':'b'])
print(data.ix[['a', 'd']])

print()
print(data)
print()

print(data[2]) # 걍 인덱스 무시하고 3번째 데이터 가지고 옴
print(data[:, 2]) # 두번째 레벨 인덱스가 2인것을 전부 가지고옴
print(data[:, 5])
print(data['a', 2])

df = DataFrame(np.arange(12).reshape(4,3),
        index=[['a','a','b','b'],[1,2,1,2]],
        columns=[['seoul', 'busan', 'kwangju'],['red','green','red']])
print(df)

# 색인에 이름 넣기
df.columns.names=['city', 'color']
print(df)
df.index.names=['key1','key2']
print(df)

print(df['seoul'])

# 색인계층 순서 바꾸기 : swaplevel() 메소드 사용

print(df.swaplevel('key1', 'key2')) # 바뀌긴하지만 순서는 그대로임 1, 2, 1, 2

# 사전식으로 계층을 바꾸어서 정렬하기 : sortlevel() 메소드 이용하여 정렬
df2 = df.swaplevel('key1', 'key2')
print(df2.sortlevel(0))  # 0이면 첫번째 index로 정렬 1이면 두번째껄로 정렬
print(df.sortlevel(1).swaplevel(0,1)) # =swaplevel('key1', 'key2'))
print(df.swaplevel(0,1).sortlevel(0))

# sum 함수 level속성
print(df)
print(df.sum(level='key2'))  # 두번째 level로 합산됨
print(df.sum(level='color', axis=1)) # 컬럼 끼리 합산 가능
