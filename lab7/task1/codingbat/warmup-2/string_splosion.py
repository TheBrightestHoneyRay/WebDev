def string_splosion(s):
    res = ""
    for i in range(len(s)):
        res = res + s[: i + 1]

    return res


s = input()

print(string_splosion(s))
