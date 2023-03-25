def max_end3(nums):
    res = nums
    maxn = max(nums[0], nums[2])
    res = [maxn, maxn, maxn]
    return res


a = list(map(int, input().split(', ')))

print(max_end3(a))
