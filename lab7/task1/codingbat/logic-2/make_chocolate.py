def make_chocolate(small, big, goal):
    maxBig = goal / 5

    if big >= maxBig:
        if small >= (goal - maxBig * 5):
            return goal - maxBig * 5
    if big < maxBig:
        if small >= (goal - big * 5):
            return goal - big * 5
    return -1


s = int(input())
b = int(input())
g = int(input())

print(make_chocolate(s, b, g))
