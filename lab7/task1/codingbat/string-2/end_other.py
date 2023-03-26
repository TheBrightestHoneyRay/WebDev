def end_other(a, b):
    a = a.lower()
    b = b.lower()

    return a[-(len(b)):] == b or a == b[-(len(a)):]


a = input()
b = input()

print(end_other(a, b))
