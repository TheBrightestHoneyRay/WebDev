def front_times(s, n):
    res = ""
    if len(s) < 3:
        res = s * n
    else:
        res = s[:3] * n

    return res


s = input()
n = int(input())

print(front_times(s, n))
