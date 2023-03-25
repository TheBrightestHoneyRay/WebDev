n = int(input())
a = input()
cnt = 0

a = list(map(int, a.split(' ')))

for i in range(n):
    if a[i] >= 0:
        cnt = cnt + 1

print(cnt)
