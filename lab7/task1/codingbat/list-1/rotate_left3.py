def rotate_left3(nums):
    res = [nums[1], nums[2], nums[0]]
    return res


a = list(map(int, input().split(', ')))

print(rotate_left3(a))
