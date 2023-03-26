def no_teen_sum(a, b, c):
    res = a + b + c
    ar = [a, b, c]
    for i in ar:
        if 12 < i < 15 or 16 < i < 20:
            res = res - i

    return res


a = int(input())
b = int(input())
c = int(input())

print(no_teen_sum(a, b, c))
