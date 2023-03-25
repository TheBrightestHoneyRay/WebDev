def sum_double(a, b):
    res = 0
    if a == b:
        res = (a + b) * 2
    else:
        res = a + b
    return res


a = int(input())
b = int(input())

print(sum_double(a, b))
