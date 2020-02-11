#numpy 정수 인덱싱(integer indexing)

#numpy 배열 a에 대해서 a[[row1, row2], [col1, col2]]는
#a[row1, col1]과 a[row2, col2]의 두개의 배열 요소 집합

import numpy as np

list = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
]

a = np.array(list)

#정수 인덱싱
res = a[[0,2], [1,3]]

print(res)

#부울린 인덱싱 (boolean indexing)

list1=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

aa = np.array(list1)

b_arr = np.array([
  [False, True, False],
  [True, False, True],
  [False, True, False]
])

n = aa[b_arr]

print(n)
