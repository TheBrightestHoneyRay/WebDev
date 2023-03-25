def first_two(s):
    res = ""
    if len(s) < 2:
        return s

    res = s[:2]
    return res


s = input()

print(first_two(s))
