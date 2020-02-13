#numpy 연산

# 연산자를 이용할 경우에는 +, -, *, /
# 함수를 사용할 경우에는 add(), subtract(), multiply(), divide()
# 배열 a와 배열 b가 있을 때, a+b는 a[0]+b[0], a[1]+b[1]... 와 같은 형식으로 결과를 리턴

import numpy as np
a = np.array([1,2,3])
b = np.array([4,5,6])

#c = a+b
c = np.add(a,b)
print(c)

#c = a-b
c = np.subtract(a,b)
print(c)

c = np.multiply(a,b)
print(c)

c = np.divide(a,b)
print(c)

print("-----------------------------------------")

list1 = [
  [1,2],
  [3,4]
]

list2 = [
  [5,6],
  [7,8]
]

a = np.array(list1)
b = np.array(list2)

# numpy에서 vector와 matrix의 product를 구하기 위해서 dot()함수를 이용한다

print("두 matrix에 대한 product 구하기")

product = np.dot(a,b)

print(product)

# numpy에서는 배열간의 연산을 위한 여러 함수들을 제공
# 각배열의 요소를 더하는 함수 sum(), 배열의 요소들을 곱하는 prod()함수
# 이 함수들은 axis 옵션을 사용한다. axis 0이면 컬럼끼리 더함, 1이면 행끼리 더함

a = np.array([[1,2], [3,4]])
s = np.sum(a)
print(s)

s = np.sum(a, axis=0)
print(s)

s = np.sum(a, axis=1)
print(s)

p = np.prod(a)
print(p)

p = np.prod(a, axis=0)
print(p)

p = np.prod(a, axis=1)
print(p)
