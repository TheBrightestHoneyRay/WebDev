def big_diff(nums):
    return max(nums) - min(nums)


n = list(map(int, input().split(', ')))

print(big_diff(n))
