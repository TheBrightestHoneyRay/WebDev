def sorta_sum(a, b):
    res = a + b
    if 9 < res < 20:
        return 20
    return res


a = int(input())
b = int(input())

print(sorta_sum(a, b))
