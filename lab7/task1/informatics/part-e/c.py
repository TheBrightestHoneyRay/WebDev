def xor(x, y):
    if x == 1 or y == 1:
        if x == y:
            return 0
        else:
            return 1
    else:
        return 0


x = int(input())
y = int(input())

print(xor(x, y))
