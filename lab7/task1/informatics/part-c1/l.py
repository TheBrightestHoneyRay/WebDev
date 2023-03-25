x = input()
xlen = len(x)
res = 0

for i in range(xlen):
    res = res + int(x[xlen - i - 1]) * 2**i

print(res)

