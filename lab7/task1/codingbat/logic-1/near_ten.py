def near_ten(num):
    if num % 10 <= 2:
        return True
    return False


n = int(input())

print(near_ten(n))
