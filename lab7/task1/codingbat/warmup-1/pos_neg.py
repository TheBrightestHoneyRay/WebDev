def pos_neg(a, b, negative):
    if (a < 0 and b >= 0) or (a >= 0 and b < 0):
        return True
    elif (a < 0 and b < 0) and negative:
        return True
    else:
        return False


a = int(input())
b = int(input())
neg = bool(input())

print(pos_neg(a, b, neg))
