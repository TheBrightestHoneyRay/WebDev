def parrot_trouble(talking, hour):
    if talking == True and (hour < 7 or hour > 20):
        return True
    else:
        return False


t = input()
h = int(input())

print(t)

print(parrot_trouble(t, h))