def alarm_clock(day, vacation):
    if vacation == 'True':
        if 0 < day < 6:
            return '10:00'
        else:
            return 'off'

    if 0 < day < 6:
        return '7:00'
    else:
        return '10:00'


d = int(input())
v = input()

print(alarm_clock(d, v))
