def has23(nums):
    if 2 in nums or 3 in nums:
        return True

    return False


a = list(map(int, input().split(', ')))

print(has23(a))
