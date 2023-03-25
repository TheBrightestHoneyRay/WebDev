n = int(input())
a = input()
p = False

a = list(map(int, a.split(' ')))

for i in range(n):
    if i == n - 1:
        break
    if (a[i] < 0 and a[i + 1] < 0) or (a[i] >= 0 and a[i + 1] >= 0):
        print('YES')
        p = True
        break

if p == False:
    print('NO')


