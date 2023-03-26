def lone_sum(a, b, c):
    if a == b == c:
        return 0
    elif a == b:
        return c
    elif a == c:
        return b
    elif b == c:
        return a

    return a + b + c


a = int(input())
b = int(input())
c = int(input())

print(lone_sum(a, b, c))
