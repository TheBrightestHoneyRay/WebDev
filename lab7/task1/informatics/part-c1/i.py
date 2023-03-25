x = int(input())
cnt = 0

for i in range(x + 1):
    if i == 0:
        continue

    if x % i == 0:
        cnt = cnt + 1

print(cnt)

