def double_char(str):
    res = ""
    for char in str:
        res += char * 2

    return res


s = input()

print(double_char(s))
