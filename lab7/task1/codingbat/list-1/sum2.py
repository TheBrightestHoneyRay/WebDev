def sum2(nums):
    res = 0
    if len(nums) == 0:
        return 0
    elif len(nums) == 1:
        return nums

    nums = list(map(int, nums.split(', ')))
    res = nums[0] + nums[1]
    return res


a = input()

print(sum2(a))
