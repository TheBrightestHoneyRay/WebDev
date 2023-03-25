n = int(input())
a = input()
cnt = 0

a = list(map(int, a.split(' ')))

for i in range(n):
    if i == n - 1:
        break

    if a[i] < a[i + 1]:
        cnt = cnt + 1


print(cnt)
