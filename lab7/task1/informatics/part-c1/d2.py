
x = int(input())
d = int(input())
cnt = 0
digits = str(x)

for i in digits:
    if i == str(d):
        cnt = cnt + 1

print(cnt)

