def left2(s):
    res = s[2:len(s)] + s[0:2]
    return res


s = input()

print(left2(s))
