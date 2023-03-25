def common_end(ar1, ar2):
    if ar1[0] == ar2[0] or ar1[len(ar1) - 1] == ar2[len(ar2) - 1]:
        return True

    return False


a = list(map(int, input().split(', ')))
b = list(map(int, input().split(', ')))

print(common_end(a, b))
