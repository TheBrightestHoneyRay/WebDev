def extra_end(s):
    res = s[len(s)-2:len(s)] * 3
    return res


s = input()

print(extra_end(s))
