import struct

x = int(input())
d = int(input())
cnt = 0

for i in range(x):
    digits = str(i)
    for dig in digits:
        if dig == str(d):
            cnt = cnt + 1

print(cnt)

