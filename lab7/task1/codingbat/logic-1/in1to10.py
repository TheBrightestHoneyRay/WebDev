def in1to10(num, outside_mode):
    if outside_mode == 'True':
        if num < 2 or num > 9:
            print(0)
            return True
        return False

    if 0 < num < 11:
        return True

    return False


n = int(input())
m = input()
print(in1to10(n, m))
