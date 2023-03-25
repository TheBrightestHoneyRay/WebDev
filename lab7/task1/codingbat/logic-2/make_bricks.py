def make_bricks(small, big, goal):
    if small == big == 0:
        return 0
    if (small * 1 + big * 5) % goal == 0:
        return True

    return False


s = int(input())
b = int(input())
g = int(input())

print(make_bricks(s, b, g))
