def first_last6(n):

    if n[0] == 6 or n[len(n) - 1]:
        return True

    return False


nums = list(map(int, input().split(', ')))

print(first_last6(nums))
