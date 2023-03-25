def string_match(a, b):
    r = min(len(a), len(b))
    cnt = 0

    for i in range(r):
        suba = a[i:i+2]
        subb = b[i:i+2]
        if suba == subb:
            cnt = cnt + 1

    return cnt


a = input()
b = input()

print(string_match(a, b))

