n = int(input())
a = input()

a = list(map(int, a.split(' ')))

print(a)

for i in range(n):
    if i % 2 == 0:
        print(a[i], end=' ')
