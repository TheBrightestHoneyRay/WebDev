def near_hundred(n):
    if 0 < 100 - n <= 10 or 0 < 200 - n <= 10:
        return True
    else:
        return False


n = int(input())

print(near_hundred(n))
