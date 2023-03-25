def middle_way(arr1, arr2):
    res = list()
    res.append(arr1[1])
    res.append(arr2[1])
    return res


a = list(map(int, input().split(', ')))
b = list(map(int, input().split(', ')))

print(middle_way(a, b))
