# 부울린 인덱싱 배열을 생성할 때 표현식으로 이용하기

# 배열 a에 대해서 짝수인 배열 요소만 True로 지정하겠다 하면
# b_arr=(a%2==0)

import numpy as np

list = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

arr = np.array(list)

# 배열 arr에 대해 짝수면 True, 홀수면 False
b_arr = (arr % 2 == 0)

print(b_arr)

print(arr[b_arr])

n = arr[arr%2 == 0]

print(n)