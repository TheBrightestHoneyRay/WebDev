def centered_average(nums):
    sum = 0
    for element in nums:
        sum += element

    return int((sum - min(nums) - max(nums)) / (len(nums)-2))


n = list(map(int, input().split(', ')))

print(centered_average(n))
