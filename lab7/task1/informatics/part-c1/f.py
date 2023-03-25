x = input()
xlen = len(x)
res = ''

for i in range(xlen):
    res = res + x[xlen - i - 1]

print(res)
