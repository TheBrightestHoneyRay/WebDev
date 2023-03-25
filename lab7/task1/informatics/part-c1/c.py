import math

a = int(input())
b = int(input())

for i in range(b - a):
    if math.sqrt(i + a) == round(math.sqrt(i + a)):
        print(i + a, end=' ')

