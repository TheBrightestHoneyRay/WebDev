n = int(input())
a = input()

a = list(map(int, a.split(' ')))

for i in range(n):
    if a[i] % 2 == 0:
        print(a[i], end=' ')

