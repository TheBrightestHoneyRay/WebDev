def string_bits(s):
    res = ""
    for i in range(len(s)):
        if i % 2 == 0:
            res = res + s[i]
    return res


s = input()

print(string_bits(s))
