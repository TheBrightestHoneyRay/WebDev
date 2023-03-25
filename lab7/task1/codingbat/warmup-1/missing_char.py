def missing_char(str, n):
    res = ""
    lres = list(str)
    lres.remove(lres[n])
    res = res.join(lres)
    return res


s = input()
a = int(input())

print(missing_char(s, a))
