def count_evens(nums):
    cnt = 0
    for element in nums:
        if element % 2 == 0:
            cnt += 1

    return cnt


n = list(map(int, input().split(', ')))

print(count_evens(n))
