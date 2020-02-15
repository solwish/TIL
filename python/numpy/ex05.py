#numpy 자료형(data Type)

# int, float, bool(True/False), complex

# 정수형(int)
# int8(-128~127), int16(-32768~32767), int32, int64 (부호가 있는 정수형)
# uint(Unsigned integer): uint8(0~255), uint(0~65535), uint32, uint64

# 실수형(float)
# float16, float32, float64

# 복소수형
# complex64 : 두개의 32비트 부동소수점으로 표시되는 복소수
# complex128 : 두개의 64비트 부동소수점으로 표시되는 복소수

import numpy as np

x = np.float32(1.0)
print(x)
print(type(x))
print(x.dtype)

z = np.arange(5)
print(z)

z = np.arange(5, dtype='f')
print(z)

aa = np.array([1.9,2,3], dtype='f')
print(aa.dtype)

xx = np.int8(aa)
print(xx)
print(xx.dtype)

bb = np.arange(10)
print(bb)

cc = np.arange(3, 10, dtype=np.float)
print(cc)
print(cc.dtype)

dd = np.arange(2, 3)
print(dd)

dd = np.arange(2, 3, 0.2)  #2부터 3번째(3 미만 범위까지)까지 0.2씩 증가
print(dd)
