import math

n = int(input())
cnt = 0

while n > 1:
    n = n / 2
    cnt = cnt + 1

print(cnt)

