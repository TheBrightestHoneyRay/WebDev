def make_ends(nums):
    res = list()
    if len(nums) < 2:
        return nums

    res = [nums[0], nums[len(nums) - 1]]
    return res


a = list(map(int, input().split(', ')))

print(make_ends(a))
