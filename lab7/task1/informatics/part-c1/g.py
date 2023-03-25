x = int(input())

for i in range(x + 1):
    if i == 0 or i == 1:
        continue

    if x % i == 0:
        print(i)
        break



