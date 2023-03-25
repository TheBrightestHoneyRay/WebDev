def array_front9(nums):
    res = False
    for i in range(4):
        if int(nums[i]) == 9:
            res = True
    return res


n = input()
ns = n.split(', ')

print(array_front9(ns))
