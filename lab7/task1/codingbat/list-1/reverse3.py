def reverse3(arr):
    arr.reverse()
    return arr


a = list(map(int, input().split(', ')))

print(reverse3(a))
