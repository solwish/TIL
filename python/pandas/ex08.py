import pandas as pd
from pandas import Series, DataFrame

data = {"Seoul":4000, "Busan":2000, "Incheon":1500, "Kwangju":1000}

obj = Series(data)

print(obj)

cities = ["Seoul", "Daegu", "Incheon", "Kwangju"]
obj2 = Series(data, index=cities)

print(obj2)
print(obj + obj2)

# Series 객체와 Series의 색인(index)은 name이라는 속성이 있다

obj2.name="인구수"
print(obj2)

obj2.index.name = "도시"

print(obj2)

obj2.index=["대전", "부산", "제주", "전주"]		#인덱스 바꾸기
print(obj2)
