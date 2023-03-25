def same_first_last(nums):
    if nums[0] == nums[len(nums) - 1]:
        return True

    return False


a = list(map(int, input().split(', ')))

print(same_first_last(a))
