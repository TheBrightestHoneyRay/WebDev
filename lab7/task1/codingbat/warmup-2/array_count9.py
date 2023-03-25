def array_count9(nums):
    cnt = 0

    for i in range(len(nums)):
        if nums[i] == 9:
            cnt = cnt + 1
    return cnt


a = list(map(int, input().split(', ')))

print(array_count9(a))
