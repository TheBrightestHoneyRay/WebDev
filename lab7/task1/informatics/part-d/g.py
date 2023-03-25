n = int(input())
a = input()

a = list(map(int, a.split(' ')))

for i in range(int(n / 2)):
    x = a[i]
    a[i] = a[n - 1 - i]
    a[n - 1 - i] = x

print(a)
