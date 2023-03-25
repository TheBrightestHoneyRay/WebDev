def non_start(a, b):
    res = a[1:len(a)] + b[1: len(b)]
    return res


a = input()
b = input()

print(non_start(a, b))
