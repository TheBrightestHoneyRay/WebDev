def count_code(s):
    cnt = 0

    for i in range(len(s) - 3):
        if s[i:i+4] == 'code':
            cnt = cnt + 1
            i = i + 3
        else:
            continue

    return cnt


s = input()

print(count_code(s))
