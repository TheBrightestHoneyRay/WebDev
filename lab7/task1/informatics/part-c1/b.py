a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(b - a):
    if (i + a) % d == c:
        print(i + a, end=' ')

