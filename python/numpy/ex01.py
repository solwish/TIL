# numpy 슬라이싱

import numpy as np

list = [
[1,2,3,],
[4,5,6,],
[7,8,9]
]

arr = np.array(list)

a = arr[0:2, 0:2] 

print(a)

b = arr[1:, 1:]
print(b)