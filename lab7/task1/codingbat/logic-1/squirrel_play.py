def squirrel_play(temp, is_summer):
    if is_summer == 'True':
        if 60 <= temp <= 100:
            return True

    if 60 <= temp <= 90:
        return True

    return False


t = int(input())
s = input()

print(squirrel_play(t, s))
