n = int(input())
i = 0
while i != 1:

    if n == 1:
        print("Yes")
        break

    if n % 2 == 1:
        i = 1

    n = n / 2

if i == 1:
    print("No")

