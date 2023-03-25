n = int(input())
a = input()
cnt = 0

a = list(map(int, a.split(' ')))

i = 1
while i < n - 1:
    if a[i] > a[i + 1] and a[i] > a[i - 1]:
        cnt = cnt + 1
    i = i + 1

print(cnt)
