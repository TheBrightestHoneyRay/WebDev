def combo_string(str1, str2):
    res = ""
    short = min(len(str1), len(str2))
    if len(str1) == short:
        res = str1 + str2 + str1
    elif len(str2) == short:
        res = str2 + str1 + str2
    else:
        res = str1 + str2

    return res


a = input()
b = input()

print(combo_string(a, b))
