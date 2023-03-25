def front_back(str):
    if len(str) == 1 or len(str) == 0:
        res = str
    else:
        x = str[0]
        b = str[len(str) - 1]
        res = ""
        lres = list(str)
        lres[0] = b
        lres[len(lres) - 1] = x
        res = res.join(lres)

    return res


s = input()
print(front_back(s))

