def caught_speeding(speed, is_birthday):
    if is_birthday == 'True':
        if speed < 66:
            return 0
        elif 65 < speed < 86:
            return 1
        else:
            return 2

    if speed < 61:
        return 0
    elif 60 < speed < 81:
        return 1
    else:
        return 2


s = int(input())
b = input()

print(caught_speeding(s, b))
