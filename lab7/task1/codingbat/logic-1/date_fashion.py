def date_fashion(you, date):
    if you < 3 or date < 3:
        return 0
    elif you > 7 or date > 7:
        return 2

    return 1


u = int(input())
d = int(input())

print(date_fashion(u, d))
